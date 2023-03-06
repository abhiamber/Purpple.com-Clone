import {
  Box,
  Button,
  Divider,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import BackendURL from "../BackendURL";
import "./Payment.css";
const Payment = () => {
  const [cart, setCart] = useState([]);
  let userid = localStorage.getItem("uproid");
  useEffect(() => {
    fetch(`${BackendURL}/cart/fetchcartItem`, {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setCart(res[0].products);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeItemFromCart = () => {
    fetch(`${BackendURL}/cart/changecartactive`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({ cartId: localStorage.getItem("cartItem") }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleOrder = () => {
    fetch(`${BackendURL}/order/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        priceTotal: 20,
        paymentMethod: "cash",
        DeliveryAdress: "abcd",
        cartId: localStorage.getItem("cartItem"),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        removeItemFromCart();
        console.log(res);
      })
      .catch((err) => console.log(err));

    fetch(`${BackendURL}/cart/delete/${userid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => console.log("Order Placed"))
      .catch((err) => console.log(err));
    alert("Successfully placed order");
    return (window.location.href = "/");
  };

  let total = Math.round(
    cart.reduce((a, c) => (a + c.productId.price) * c.quantity, 0)
  );
  // total = total;
  var date = new Date();
  var month = date.toLocaleString("default", { month: "short" });
  var day = date.toLocaleString("default", { day: "2-digit" });
  return (
    <Box className="Payment-container">
      <Box className="payment-left-container">
        <Box className="creditcard-container">
          <Box className="Creditecard">Credit/Debit Card</Box>
          <Box className="creditcard-form">
            <Input className="inputbox" placeholder="Enter Name on Card" />
            <Box display={"flex"} justifyContent="space-between">
              <Input
                className="inputbox"
                placeholder="Card Number"
                width={["200px", "230px", "250px"]}
              />
              <Box
                display={"flex"}
                alignItems="center"
                justifyContent={"center"}
                border={"1px solid #d0d0d0"}
              >
                <input style={{ width: "60px" }} placeholder="CVV" />
                <Image
                  src="https://media6.ppl-media.com/mediafiles/ecomm/misc/1516175146_cvv.jpg"
                  alt="cvv"
                  width={"30px"}
                  height="20px"
                />
              </Box>
            </Box>
            <Box display={"flex"} justifyContent="space-between">
              <Input width={"45%"} placeholder="Expiry MM" />
              <Input width={"45%"} placeholder="Expiry YY" />
            </Box>
            <Box>
              <Button
                bg={"#e40980"}
                width="40%"
                borderRadius="0px"
                _hover={{ bg: "#e40980" }}
                color="white"
                mb={5}
                onClick={handleOrder}
              >
                PAY ₹{total}
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="creditcard-container">
          <Box className="Creditecard">Net Banking</Box>
          <Box className="banklogo-cont">
            <Box>
              <Image
                className="banklogo"
                src="https://png.pngitem.com/pimgs/s/23-238440_axis-bank-png-logo-of-axis-bank-transparent.png"
                alt="Axis"
              />
              <Text>AXIS</Text>
            </Box>
            <Box>
              <Image
                className="banklogo"
                src="https://companieslogo.com/img/orig/HDB-bb6241fe.png?t=1633497370"
                alt="hdfc"
              />
              <Text>HDFC</Text>
            </Box>
            <Box>
              <Image
                className="banklogo"
                src="https://i.pinimg.com/originals/ff/d5/31/ffd531a6a78464512a97848e14506738.png"
                alt="ICICI"
              />
              <Text>ICICI</Text>
            </Box>
            <Box>
              <Image
                className="banklogo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/240px-SBI-logo.svg.png"
                alt="SBI"
              />
              <Text>SBI</Text>
            </Box>
            <Box>
              <Image
                className="banklogo"
                src="https://companieslogo.com/img/orig/KOTAKBANK.NS-36440c5e.png?t=1593960269"
                alt="KOTAK"
              />
              <Text>KOTAK</Text>
            </Box>
          </Box>
          <Select
            placeholder="Select a Bank"
            width={"50%"}
            h="30px"
            mb="10px"
            ml="3"
          >
            <option value="option1"> Bank of Baroda</option>
            <option value="option2">Bank of India</option>
            <option value="option3">Bank of Maharashtra</option>
            <option value="option3">Canara Bank</option>
            <option value="option3">Central Bank of India</option>
            <option value="option3">Indian Bank</option>
            <option value="option3">Indian Overseas Bank</option>
            <option value="option3">Punjab & Sind Bank</option>
            <option value="option3">Punjab National Bank</option>
            <option value="option3">State Bank of India</option>
            <option value="option3">UCO Bank</option>
            <option value="option3">Union Bank of India</option>
          </Select>
          {/* <Button bg={'#e40980'} width='40%' borderRadius='0px' _hover={{ bg: '#e40980' }} color='white' mb={5} ml='3' w='28%'>
                        PAY ₹{total}
                    </Button> */}
        </Box>
        <Box className="creditcard-container">
          <Box className="Creditecard">Wallets</Box>
          <Box ml="10px">
            <RadioGroup>
              <Stack direction="column">
                <Radio value="1">
                  <Box display={"flex"} alignItems="center">
                    <Image
                      className="wallet-logo"
                      src="https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png"
                      alt="Paytm"
                    />
                    <Text fontSize={"16px"} fontWeight="500" color={"black"}>
                      Paytm Wallet
                    </Text>
                  </Box>
                </Radio>
                <Radio value="2">
                  <Box display={"flex"} alignItems="center">
                    <Image
                      className="wallet-logo"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ih1e58Hb14wPsHUbWoVYF-4jznxuDzDd9Q&usqp=CAU"
                      alt="Ola money"
                    />
                    <Text fontSize={"16px"} fontWeight="500" color={"black"}>
                      OlaMoney Postpaid + Wallet
                    </Text>
                  </Box>
                </Radio>
                <Radio value="3">
                  <Box display={"flex"} alignItems="center">
                    <Image
                      className="wallet-logo"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Y2bFIK3LjcUwBJylqP5mgPOL-vnkRwk3Sg&usqp=CAU"
                      alt="Paytm"
                    />
                    <Text fontSize={"16px"} fontWeight="500" color={"black"}>
                      Mobikwik
                    </Text>
                  </Box>
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
          {/* <Button bg={'#e40980'} width='40%' borderRadius='0px' _hover={{ bg: '#e40980' }} color='white' mb={5} ml='3' w='28%' mt='10px'>
                        PAY ₹{total}
                    </Button> */}
        </Box>
        <Box className="creditcard-container">
          <Box className="Creditecard">Wallets</Box>
          <Box ml="10px">
            <RadioGroup mt="10px" mb="10px">
              <Stack direction="column">
                <Radio value="1">
                  <Box display={"flex"} alignItems="center">
                    <Image
                      className="wallet-logo"
                      src="https://play-lh.googleusercontent.com/B5cNBA15IxjCT-8UTXEWgiPcGkJ1C07iHKwm2Hbs8xR3PnJvZ0swTag3abdC_Fj5OfnP"
                      alt="Paytm"
                    />
                    <Text fontSize={"16px"} fontWeight="500" color={"black"}>
                      upi
                    </Text>
                  </Box>
                </Radio>
                <Radio value="2">
                  <Box display={"flex"} alignItems="center">
                    <Image
                      className="wallet-logo"
                      src="https://images.hindustantimes.com/tech/img/2020/11/05/1600x900/image_-_2020-11-05T095740.083_1604550459365_1604550465218_1604550598928.jpg"
                      alt="Gpay"
                    />
                    <Text fontSize={"16px"} fontWeight="500" color={"black"}>
                      Google Pay
                    </Text>
                  </Box>
                </Radio>
                <Radio value="3">
                  <Box display={"flex"} alignItems="center">
                    <Image
                      className="wallet-logo"
                      src="https://image01.realme.net/general/20190821/1566357380566.jpg"
                      alt="Paytm"
                    />
                    <Text fontSize={"16px"} fontWeight="500" color={"black"}>
                      Mobikwik
                    </Text>
                  </Box>
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Box>
        <Box className="creditcard-container">
          <Box className="Creditecard">Wallets</Box>
          <Box ml="10px">
            <RadioGroup mt="10px" mb="10px">
              <Stack direction="column">
                <Radio value="1">
                  <Box display={"flex"} alignItems="center">
                    <Text fontSize={"16px"} fontWeight="500" color={"black"}>
                      Pay on Delivery
                    </Text>
                  </Box>
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Box>
      </Box>

      <Box className="payment-right-container">
        <Box className="cartDetails">
          <Box className="safepayment">
            <Text>Need Help? 86555 00222</Text>
          </Box>
        </Box>
        <Divider width="100%" margin="auto" />
        <Text fontSize={"16px"} fontWeight="500" color={"green.500"}>
          Product will be deliverd on {Number(day) + 3} {month}
        </Text>
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
            <Text fontSize={["14px", "14px", "16px", "16px"]}>
              ₹{total * (10 / 100)}
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
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
