import React, { useEffect, useState } from "react";
import axios from "axios";
import BackendURL from "../../BackendURL";

import {
  Table,
  Thead,
  Tbody,
  //   Tfoot,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  Input,
  Heading,
} from "@chakra-ui/react";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";

const ManageQuantity = () => {
  const [productData, setProductData] = useState([]);
  const [qty, setQty] = useState();
  const getProductData = async () => {
    let { data } = await axios.get(`${BackendURL}/admin/quantity`);
    try {
      setProductData(data.limitedProduct);
      // console.log(data);
      return;
    } catch (e) {
      return console.log(e.message);
    }
  };
  const handleDataDelete = (id) => {
    axios.post(`${BackendURL}/admin/deleteproduct`, {
      id,
    });
    try {
      alert("ok");
      getProductData();
      return;
    } catch (e) {
      return console.log(e);
    }
    // console.log(id);
  };

  // managing quantity

  const handleClickForManageQty = async (id) => {
    if (qty === 0 || qty === "") {
      return alert("Please provide QTY");
    }

    await axios.post(`${BackendURL}/admin/increasequantity`, {
      id,
      qty,
    });
    try {
      alert("ok");
      // console.log(data);
      getProductData();
      setQty(0);
      return;
    } catch (e) {
      return console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div>
      <Heading m="10px" textAlign={"center"}>
        ManageQuantity
      </Heading>
      <TableContainer w="90%" m="auto">
        <Table variant="striped" maxWidth="100%">
          <Thead>
            <Tr bg="teal" color="black" fontWeight={"bold"} fontSize="20px">
              <Th>ID</Th>
              <Th>Brand</Th>
              <Th>Category</Th>
              <Th>Quantity</Th>
              <Th>Price</Th>
              <Th>Manage Quantity</Th>
              <Th>Remove</Th>
            </Tr>
          </Thead>
          <Tbody>
            {productData.map((prod) => {
              return (
                <Tr key={prod._id}>
                  <Td>{prod._id}</Td>
                  <Td>{prod.brand}</Td>

                  <Td>{prod.product_type}</Td>
                  <Td>{prod.quantity}</Td>
                  <Td>{prod.price}</Td>
                  <Th>
                    <Input
                      placeholder="QTY"
                      w="25%"
                      onChange={(e) => setQty(Number(e.target.value))}
                    />
                    <Button onClick={() => handleClickForManageQty(prod._id)}>
                      <CheckIcon />
                    </Button>
                  </Th>

                  <Td>
                    <Button onClick={() => handleDataDelete(prod._id)}>
                      <DeleteIcon />
                    </Button>
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

export default ManageQuantity;
