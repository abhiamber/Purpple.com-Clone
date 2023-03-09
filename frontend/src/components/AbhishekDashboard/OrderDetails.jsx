// import { Center, Image } from "@chakra-ui/react";
// import React from "react";

// function OrderDetails() {
//   return (
//     <div>
//       <Center>
//         <Image src="https://cdn-icons-png.flaticon.com/512/5695/5695859.png" />
//       </Center>
//     </div>
//   );
// }

// export default OrderDetails;

import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BackendURL from "../../BackendURL";

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState();

  const handleSubmit = () => {
    getOrders();
  };

  const getOrders = async () => {
    let res;
    console.log(search, page);
    if (search) {
      res = await fetch(
        `${BackendURL}/order/getall?page=${page}&search=${search}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
        }
      );
    } else {
      res = await fetch(`${BackendURL}/order/getall?page=${page}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      });
    }
    try {
      let data = await res.json();
      console.log(data.delivered);
      setOrders(data.delivered);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getOrders(page);
  }, [page]);

  // console.log("dnkjjbk");

  return (
    <div>
      <Heading textAlign={"center"} m={"2% 0"}>
        Orders Details
      </Heading>
      <Box display={"flex"} justifyContent="space-around" flexWrap={"wrap"}>
        <Box>
          <Input
            placeholder="userName"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button w="100%" mt="15px" onClick={handleSubmit}>
            Search
          </Button>
        </Box>
        <Box>
          <Button
            isDisabled={page === 1}
            onClick={() => {
              setPage(page - 1);
              // getOrders(page - 1);
            }}
          >
            Prev
          </Button>
          <Button>{page}</Button>
          <Button
            onClick={() => {
              setPage(page + 1);
              // getOrders(page + 1);
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
      <Box
        w="80%"
        m="auto"
        mt="10px"
        display={"flex"}
        flexWrap="wrap"
        gap="5"
        textAlign={"center"}
        justifyContent={"space-evenly"}
      >
        {orders ? (
          orders.map((ele) =>
            ele.cartId?.products.map((prod, indexs) => {
              return (
                <Card
                  key={indexs}
                  w="100%"
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  m="auto"
                  textAlign={"center"}
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "20%", sm: "20%" }}
                    src={prod.productId.image_link}
                    alt="Caffe Latte"
                  />

                  <Stack>
                    <CardBody>
                      <Heading size="md" textAlign={"center"}>
                        <Popover>
                          <PopoverTrigger>
                            <Button c="black" bg="blue" m="5px">
                              Track Your Order
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                              <Box>
                                {" "}
                                {ele.status.map((status, ind) => {
                                  return (
                                    <Text
                                      display={"block"}
                                      py="2"
                                      key={ind}
                                      fontSize="20px"
                                      c="teal"
                                    >
                                      {status}
                                    </Text>
                                  );
                                })}
                              </Box>
                            </PopoverBody>
                          </PopoverContent>
                        </Popover>
                      </Heading>
                      <Box
                        fontSize={"25px"}
                        fontWeight="bold"
                        textAlign={"left"}
                      >
                        <Text fontSize={"25px"} textAlign={"left"}>
                          Order Id - {ele._id}
                        </Text>

                        <Text fontSize={"25px"} textAlign={"left"}>
                          {" "}
                          DeliveryDate - {ele.DeliveryDate}
                        </Text>

                        <Text fontSize={"25px"} textAlign={"left"}>
                          {" "}
                          OrderDate - {ele.createdAt.slice(0, 10)}
                        </Text>

                        <Text fontSize={"25px"} textAlign={"left"}>
                          Tptal Price - {ele.priceTotal}
                        </Text>

                        <Text fontSize={"25px"} textAlign={"left"}>
                          Order Current Status - {ele.currentStatus}
                        </Text>

                        <Text fontSize={"25px"} textAlign={"left"}>
                          OrderDelivered - {ele.OrderDelivered ? "YES" : "NO"}
                        </Text>
                      </Box>
                    </CardBody>
                  </Stack>
                </Card>
              );
            })
          )
        ) : (
          <Heading>No Order Till Now</Heading>
        )}
      </Box>
    </div>
  );
};

export default OrderDetails;
