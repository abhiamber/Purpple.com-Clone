import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BackendURL from "../BackendURL";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, SetName] = useState("");
  const [address, SetAddress] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/login";

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
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${BackendURL}/signup`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        address,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "NO") {
          alert("User Already Exists");
        }
        navigate(redirectPath, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  // {name,email,password}(required) but age,gender,phonenumber,address(opt)
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg="#F1F6F5">
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontWeight={350} fontSize={"4xl"} textAlign={"center"}>
            About You
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Sign Up to enjoy all of our cool features
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="firstName" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Name"
                onChange={(e) => SetName(e.target.value)}
                required
              />
              {name === "" && (
                <FormLabel color="red">Name is required here</FormLabel>
              )}
            </FormControl>

            <FormControl id="address">
              <FormLabel>Address (optional)</FormLabel>
              <Input
                required
                placeholder="Address"
                type="text"
                onChange={(e) => SetAddress(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="Email"
                type="email"
                onChange={(e) => Setemail(e.target.value)}
                required
              />
              {!isEmailErrorFunc() && email !== "" && (
                <FormLabel color={"red"}>Invalid Email</FormLabel>
              )}
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Phone Number (optional) </FormLabel>
              <Input placeholder="Phone Number" type="number" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Password"
                  required
                  onChange={(e) => Setpassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {!isPasswordErrorFunc() && password !== "" && (
                <FormLabel color="red">
                  Password should be grater than 6
                </FormLabel>
              )}
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                isDisabled={
                  !isEmailErrorFunc() || !isPasswordErrorFunc() || name === ""
                }
                fontWeight="600"
                bgColor="black"
                size="lg"
                color="white"
                borderRadius="0"
                _hover={{
                  bg: "cyan.500",
                }}
                onClick={handleSubmit}
              >
                SIGN UP
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link to="/login">
                  <Text color={"blue.400"}> Login</Text>
                </Link>
              </Text>
              <Text align={"center"}>
                By proceeding, you are confirming that you agree to our{" "}
                <strong>Terms and Conditions</strong> and{" "}
                <strong>Privacy Policy</strong>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
