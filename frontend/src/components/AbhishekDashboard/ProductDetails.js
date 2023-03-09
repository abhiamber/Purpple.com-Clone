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
  Heading,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const ProductDetails = () => {
  const [productData, setProductData] = useState([]);
  const getProductData = async () => {
    let { data } = await axios.get(`${BackendURL}/admin/allproduct`);
    try {
      setProductData(data.product);
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
      return getProductData();
    } catch (e) {
      console.log(e);
    }
    console.log(id);
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div>
      <Heading m="10px" textAlign={"center"}>
        ProductDetails
      </Heading>
      <TableContainer w="90%" m="auto" >
        <Table variant="striped" maxWidth="100%">
          <Thead>
            <Tr bg="teal" color="black" fontWeight={"bold"} fontSize="20px">
              <Th>ID</Th>
              <Th>Brand</Th>
              <Th>Category</Th>
              <Th>Quantity</Th>
              <Th>Price</Th>
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

export default ProductDetails;
