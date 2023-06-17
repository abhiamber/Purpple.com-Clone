import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Utilis/Auth";
import BackendURL from "../BackendURL";
// let google = window.google;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  // Email Validation by using genral expression
  let isEmailErrorFunc = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (emailRegex.test(email)) {
      return true;
    }
    return false;
  };

  // password validation by checking length should be geater than 6
  let isPasswordErrorFunc = () => {
    if (password.length > 5) {
      return true;
    }
    return false;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    fetch(`${BackendURL}/login`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "NO") {
          return alert("invalid Credentials");
        }
        if (data.status === "OK") {
          alert("Login Successful");
          login(data);
          navigate(redirectPath, { replace: true });
        }
      })
      .catch((e) => alert("ERROR", e.message));
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontWeight={350} fontSize={"4xl"}>
            Existing Customers
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />

              {!isEmailErrorFunc() && email !== "" && (
                <FormLabel color={"red"}>Invalid Email</FormLabel>
              )}
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {!isPasswordErrorFunc() && password !== "" && (
                <FormLabel color="red">
                  Password should be grater than 6
                </FormLabel>
              )}
            </FormControl>

            <Text>{"------ or connect with --------"}</Text>
            <Box id="signInDiv"></Box>

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Link to="/register">
                  <Text color={"blue.400"}> New Customer?</Text>
                </Link>
              </Stack>

              <Button
                isDisabled={!isEmailErrorFunc() || !isPasswordErrorFunc()}
                onClick={handleLogin}
                fontWeight="600"
                bgColor="black"
                color="white"
                borderRadius="0"
                _hover={{
                  bg: "cyan.500",
                }}
              >
                LOGIN
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
