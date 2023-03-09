import React, { useEffect, useState } from "react";
import {
  SimpleGrid,
  Button,
  Center,
  // Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Select,
} from "@chakra-ui/react";
import BackendURL from "../../BackendURL";

import {
  Table,
  Thead,
  Tbody,
  // Tfoot,
  Tr,
  Th,
  Td,
  // TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
const OrderManagement = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [edit, setEdit] = useState();
  const [orderList, setOrderList] = useState([]);
  const [totalIncome, setTotalIncome] = useState();

  // make the api request to change the status
  const handleEdit = async (id) => {
    console.log(edit, id);
    if (edit !== undefined) {
      let { data } = await axios.post(`${BackendURL}/order/changestatus`, {
        orderId: id,
        status: edit,
      });
      try {
        console.log(data);
        getListOfOrder();
      } catch (e) {
        return console.log(e);
      }
    }
  };
  useEffect(() => {
    // make the api call for total income of the day******
  }, []);
  //  pedning order and pending items************
  useEffect(() => {}, []);
  // total income of the day*************
  const getTotalIncome = async () => {
    let { data } = await axios.get(`${BackendURL}/order/totalincome`);
    try {
      // console.log(data);
      setTotalIncome(data.total);
    } catch (e) {
      return console.log(e);
    }
  };
  useEffect(() => {
    getTotalIncome();
  }, []);
  // get all the non delived items
  const getListOfOrder = async () => {
    let { data } = await axios.get(`${BackendURL}/order/getnotdelivered`);
    try {
      setOrderList(data.notDelivered);
      return;
      // console.log(data.notDelivered);
    } catch (e) {
      return console.log(e);
    }
  };
  useEffect(() => {
    getListOfOrder();
  }, []);
  return (
    <div>
      <SimpleGrid columns={4} spacing={10} p="40px">
        <Center
          bg="tomato"
          minimumheight="120px"
          fontSize="30px"
          fontWeight="600"
        >
          Pending
        </Center>
        <Center bg="tomato" height="120px" fontSize="30px" fontWeight="600">
          OrderCancel
        </Center>
        <Center bg="tomato" height="120px" fontSize="30px" fontWeight="600">
          Order Process
        </Center>
        <Center bg="tomato" height="120px" fontSize="30px" fontWeight="600">
          Total Income :{totalIncome}
        </Center>
      </SimpleGrid>
      <TableContainer w="98%" m="auto">
        <Table variant="striped">
          <Thead>
            <Tr bg="teal" color="black" fontWeight={"bold"} fontSize="20px">
              <Th>Oderid</Th>
              <Th>userId</Th>
              <Th>Payment</Th>
              <Th>OderDate</Th>
              <Th>DeliveryDate</Th>
              <Th>status</Th>
              <Th>Total</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orderList?.map((item) => {
              return (
                <Tr key={item._id}>
                  <Td>{item._id}</Td>
                  <Td>{item.userId}</Td>
                  <Td>{item.paymentMethod}</Td>
                  <Td>{item.createdAt.slice(0, 10)}</Td>
                  <Td>{item.DeliveryDate}</Td>
                  <Td>
                    <Button>{item.currentStatus}</Button>

                    <Button onClick={onOpen}>Edit</Button>

                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Change Status</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Select
                            placeholder="changestatus"
                            onChange={(e) => setEdit(e.target.value)}
                          >
                            <option value="Shipped">Shipped</option>
                            <option value="Pending"> Pending</option>
                            <option value="OrderCancel">OrderCancel</option>
                            <option value="Delivered">Delivered</option>
                          </Select>

                          <Button
                            onClick={() => {
                              handleEdit(item._id);
                              onClose();
                            }}
                          >
                            Submit
                          </Button>
                        </ModalBody>
                      </ModalContent>
                    </Modal>
                  </Td>
                  <Td>{item.priceTotal}</Td>
                  <Td>
                    {" "}
                    <Button>
                      <DeleteIcon />
                    </Button>{" "}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default OrderManagement;
