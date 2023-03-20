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
} from "@chakra-ui/react";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Utilis/Auth";
import BackendURL from "../BackendURL";
let google = window.google;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const [first, setFirst] = useState({});

  /*google login*/
  const handleCallbackResponse = (response) => {
    console.log("he");
    console.log("token:" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setFirst(userObject);
    document.getElementById("signInDiv").hidden = true;
  };

  useEffect(() => {
    console.log("hel");

    /* global google */
    google.accounts.id.initialize({
      client_id:
        "514340861987-f7tbdfd063bbb72d0452dm5je7onj1vj.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

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
          if (data.message === "user not found") {
            alert("user not Exist Please Signup First");
            navigate("/register");
          }
          if (data.message === "Unauthorized") {
            alert("Please fill correct password");
          }
        }
        if (data.status === "OK") {
          alert("Login Successful");
          console.log(data);
          login(data);
          navigate(redirectPath, { replace: true });
        }
      })
      .catch((e) => alert("ERROR", e.message));
  };

  if (first.name) {
    console.log(first.name);
    login({ user: first.name });
    alert(`Login Successful with ${first.name}`);
    navigate(redirectPath, { replace: true });
  }

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
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
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
