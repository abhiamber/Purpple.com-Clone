import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
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
import BackendURL from "../BackendURL";

const Order = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    await fetch(`${BackendURL}/order/getorderdetailsofuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.notDelivered);
        setOrders(res.notDelivered);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <Heading textAlign={"center"} m={"2% 0"}>
        Orders Details
      </Heading>
      <Box
        w="80%"
        m="auto"
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
                          Total Price - {ele.priceTotal}
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

export default Order;
