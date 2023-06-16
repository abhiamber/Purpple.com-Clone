import React, { useEffect, useState } from "react";
import "./Cart.css";
import BackendURL from "../BackendURL";
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Divider,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  // CardFooter,
  Stack,
  CardBody,
  Heading,
  Card,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [pin, setPin] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  let navigate = useNavigate();
  const [cartId, setCartId] = useState("");

  const handleAdd = async (id, qty) => {
    try {
      fetch(`${BackendURL}/cart/`, {
        method: "POST",
        body: JSON.stringify({ productId: id, qty }),
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((res) => {
          //   console.log(res);
          getCartItem();
        })
        .catch((err) => console.log(err));
      // alert("quantity changed successfully");
    } catch (err) {
      alert("You cannot add product without Login");
    }
  };

  // ************************ delete cart item*******
  const handleDelete = async (productId) => {
    try {
      fetch(`${BackendURL}/cart/delete`, {
        method: "POST",
        body: JSON.stringify({ productId, cartId }),
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          getCartItem();
          alert("Item deleted successfully");
        })
        .catch((err) => console.log(err));
    } catch (err) {
      alert("You cannot delete product without Login");
    }
  };

  const getCartItem = async () => {
    let p = localStorage.getItem("token") || null;

    if (!p) {
      return navigate("/login");
    }

    let res = await fetch(`${BackendURL}/cart/fetchcartItem`, {
      headers: {
        "Content-Type": "application/json",
        token: p,
      },
    });
    try {
      let data = await res.json();

      if (data.state === "NOT") {
        return alert("Your token is expired please login to get new token");
      }
      setCart(data[0].products);
      setCartId(data[0]._id);
      localStorage.setItem("cartItem", data[0]._id);
    } catch (err) {}
  };

  useEffect(() => {
    getCartItem();
  }, []);

  let total = Math.round(
    cart.reduce((a, c) => (a + c.productId.price) * c.quantity, 0)
  );
  //   total = total * 75;
  var date = new Date();
  var month = date.toLocaleString("default", { month: "short" });
  var day = date.toLocaleString("default", { day: "2-digit" });
  return (
    <SimpleGrid columns={[1, 1, 2, 2, 2]} className="cartcontainer">
      <Box>
        <Text
          textAlign={"left"}
          fontSize="18px"
          color={"black"}
          fontWeight="bold"
          mb="18px"
        >
          MY Cart({cart.length})
        </Text>
        {cart ? (
          cart.map((item) => (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              key={item._id}
              m="10px"
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={item.productId.image_link}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody>
                  <Heading size="md">{item.productId.name}</Heading>
                  <Heading size="sm" py="2">
                    {" "}
                    {item.productId.price_sign} {item.productId.price}
                  </Heading>
                  <Heading size="md" py="2" m="3">
                    {" "}
                    {item.productId.quantity} Items Left
                  </Heading>

                  <Button
                    isDisabled={item.quantity === 1}
                    onClick={() => handleAdd(item.productId._id, -1)}
                  >
                    <MinusIcon />
                  </Button>
                  {item.quantity}

                  <Button
                    onClick={() => handleAdd(item.productId._id, 1)}
                    isDisabled={item.quantity === item.productId.quantity}
                  >
                    <AddIcon />
                  </Button>
                  <Text py="2"></Text>
                  <br />

                  <Button
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => handleDelete(item.productId._id)}
                  >
                    <DeleteIcon />
                  </Button>
                </CardBody>
              </Stack>
            </Card>
          ))
        ) : (
          <h1>Null</h1>
        )}
      </Box>
      <Box className="cartDetails">
        <Box className="safepayment">
          <Image
            src="https://media6.ppl-media.com/mediafiles/ecomm/misc/1515664301_shield.png"
            width="50px"
            height="50px"
            alt="safe Payment"
          />
          <Box className="genuinediv">
            <span>100% Safe Payments</span>
            <Text fontSize={["14px", "14px", "14px", "16px"]}>
              Genuine Products | Easy Returns
            </Text>
          </Box>
        </Box>
        <Box className="deliverysec">
          <input
            placeholder="Enter Pincode"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            maxLength={6}
          />
          <span>CHECK DELIVERY</span>
        </Box>
        {pin.length === 6 ? (
          <h4 style={{ color: "green" }}>
            Delivery by {Number(day) + 5} {month} (Exact dates on Address page){" "}
          </h4>
        ) : null}
        <Divider width="100%" margin="auto" />
        <Box className="pricedivcontainer">
          <Box className="pricesubdiv">
            <Text fontSize={["14px", "14px", "16px", "16px"]}>Total MRP:</Text>
            <Text fontSize={["14px", "14px", "16px", "16px"]}>₹{total}</Text>
          </Box>
          <Box className="pricesubdiv">
            <Text fontSize={["14px", "14px", "16px", "16px"]}>
              Saving on MRP:
            </Text>
            <Text fontSize={["14px", "14px", "16px", "16px"]} color="red">
              - ₹{Math.floor(total * (10 / 100))}
            </Text>
          </Box>
          <Box className="pricesubdiv">
            <Text fontSize={["14px", "14px", "16px", "16px"]}>Subtotal:</Text>
            <Text fontSize={["14px", "14px", "16px", "16px"]}>
              ₹{total - total * (10 / 100)}
            </Text>
          </Box>
          <Box className="pricesubdiv">
            <Text fontSize={["14px", "14px", "16px", "16px"]}>
              Shipping Charges:
            </Text>
            <Text fontSize={["14px", "14px", "16px", "16px"]}>Free</Text>
          </Box>
          <Divider
            width="100%"
            margin="auto"
            marginTop="10px"
            border="1px solid gray"
          />
          <Box
            display="flex"
            justifyContent="space-between"
            fontWeight="700"
            marginTop="10px"
          >
            <Text fontSize="18px" color="black">
              Order Total
            </Text>
            <Text fontSize="18px" color="black">
              ₹{total - total * (10 / 100)}
            </Text>
          </Box>
          <Button
            className="placeorder"
            bg={"#e40980"}
            borderRadius="0px"
            _hover={{ bg: "#e40980" }}
            onClick={onOpen}
          >
            PLACE ORDER
          </Button>

          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Enter your delivery details</ModalHeader>
              <ModalCloseButton />
              <ModalBody
                textAlign={"left"}
                pb={6}
                display="flex"
                flexDirection={"column"}
                gap="10px"
              >
                <FormControl isRequired>
                  <FormLabel mt={"5px"}>Name *</FormLabel>
                  <Input ref={initialRef} type="text" />
                  <FormLabel mt={"5px"}>Pincode *</FormLabel>
                  <Input type={"number"} />
                  <FormLabel mt={"5px"}>Address *</FormLabel>
                  <Input type={"text"} />
                  <FormLabel mt={"5px"}>Landmark </FormLabel>
                  <Input type="text" />
                  <FormLabel mt={"5px"}>City *</FormLabel>
                  <Input type="text" />
                  <FormLabel mt={"5px"}>State *</FormLabel>
                  <Input type="text" />
                  <FormLabel mt={"5px"}>Mobile *</FormLabel>
                  <Input type={"number"} />
                </FormControl>
                <p>
                  Address Type preferences are used to plan your delivery.
                  However, shipments can sometimes arrive early or latter then
                  planned.
                </p>
              </ModalBody>
              <ModalFooter>
                <NavLink to="/checkout">
                  <Button
                    bg={"#e40980"}
                    borderRadius="0px"
                    _hover={{ bg: "#e40980" }}
                    color="white"
                    mr={3}
                  >
                    Proceed To checkout
                  </Button>
                </NavLink>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <p>Need Help? 9039362782 </p>
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default Cart;
