import {
  Box,
  Flex,
  Spacer,
  Text,
  Image,
  Input,
  Button,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  // Heading,
  // useColorMode,
} from "@chakra-ui/react";

import React, { useState, useContext } from "react";

import { CiSearch, CiHeart, CiFaceSmile, CiShoppingCart } from "react-icons/ci";
// import { IconName } from "react-icons/bi";
import logo from "../image/P.png";
import NavItem from "./navbar/NavbarItem/NavItem";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { AuthContext } from "../Utilis/Auth";

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { GetToSearchQueryProduct } from "../redux/prod/prod.action";

const SearchBox = () => {
  let user;
  const { logout } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const btnRef = React.useRef();
  let [query, setQuery] = useState();
  let users = JSON.parse(localStorage.getItem("userName")) || null;
  if (users) {
    user = users.user;
  }

  // console.log(user);

  const handleSearch = () => {
    if (!query) {
      return alert("Your Query is empty");
    }

    dispatch(GetToSearchQueryProduct(query));

    Navigate("/productmain", { state: { q: "S", query } });
    // console.log(query);
  };

  return (
    <Box
      pt="5px"
      ml="38px"
      display={{ sm: "none", base: "none", md: "block", lg: "block" }}
    >
      <Flex p="3px">
        <Box h="10">
          <Flex>
            {" "}
            <Button
              ref={btnRef}
              colorScheme="white"
              bg={"white"}
              color="black"
              onClick={onOpen}
            >
              <Text>What are you looking for?</Text>
              <Text pl="45px" fontSize={"25px"}>
                <CiSearch />
              </Text>
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="top"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader mt="15px" fontWeight={"light"} m="auto" w="80%">
                  Search for Product and Brands{" "}
                </DrawerHeader>

                <DrawerBody m="auto" mt="5px" w="80%">
                  <Flex cursor={"pointer"}>
                    <Input
                      // variant="outline"
                      variant="flushed"
                      borderRadius={"1px"}
                      borderBottomColor={"#fd1d92"}
                      focusBorderColor="#fd1d92"
                      placeholder="Type here..."
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <Text
                      ml="-10px"
                      fontSize={"30px"}
                      color="#fd1d92"
                      bg="white"
                      onClick={handleSearch}
                    >
                      <CiSearch />
                    </Text>
                  </Flex>
                </DrawerBody>

                <DrawerFooter></DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Flex>
          <Box bg="blue" h="1.4px" />
        </Box>
        <Spacer />
        <Box h="10" ml="-35px">
          <Link to="/">
            <Image
              boxSize="60px"
              borderRadius={"5px"}
              w="80px"
              h="40px"
              objectFit="cover"
              src={logo}
              alt="logo"
            />
          </Link>
        </Box>
        <Spacer />
        <Box mr="20px" h="10">
          <Flex>
            <Box color={"black"} fontWeight="light" fontSize="40px">
              <CiHeart />
            </Box>

            <Box color={"black"} fontWeight="light" fontSize="40px">
              <Popover trigger="hover">
                <PopoverTrigger>
                  <Box className={"blackHover"}>
                    <CiFaceSmile />
                  </Box>
                </PopoverTrigger>
                <PopoverContent w="15vw">
                  <PopoverArrow />
                  <PopoverHeader>
                    <Box h="0.5px" bg="black" w="73%" m="auto"></Box>
                    <Flex
                      mx="10px"
                      alignItems="center"
                      justifyContent="space-between"
                      flexDirection={"column"}
                    >
                      {user ? (
                        <Text color={"green"} fontSize="20px">
                          <Link to="#">{user}</Link>
                        </Text>
                      ) : (
                        <Button
                          color={"black"}
                          variant="outline"
                          w="150px"
                          bg="blue"
                        >
                          <Link to="/login">Sign in</Link>
                        </Button>
                      )}
                      {user ? (
                        <Text fontSize={"17px"} color={"red"}>
                          <Link to="/order">Your Order</Link>
                        </Text>
                      ) : (
                        <Text fontSize={"17px"} color={"red"}>
                          <Link to="/register">New Customer?</Link>
                        </Text>
                      )}
                      {user ? (
                        <Text color={"red"}>
                          <Link to="/" onClick={logout} fontSize={"23px"}>
                            Logout
                          </Link>
                        </Text>
                      ) : (
                        <Text fontSize={"20px"} color={"red"}>
                          <Link to="/register">Register Now.</Link>
                        </Text>
                      )}
                      {user &&
                      localStorage.getItem("email") ===
                        "pushpendra1697@gmail.com" ? (
                        <Text fontSize={"23px"}>
                          {" "}
                          <Link to="/admin">Admin</Link>{" "}
                        </Text>
                      ) : (
                        <Text fontSize={"23px"}>
                          {" "}
                          <Link to="/admin">User</Link>{" "}
                        </Text>
                      )}
                    </Flex>
                    <Box h="1px" bg="black" w="70%" m="auto"></Box>
                  </PopoverHeader>
                  <PopoverBody></PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>

            <Box color={"black"} fontWeight="light" fontSize="40px">
              <Link to="/cart">
                <CiShoppingCart />
              </Link>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <hr />
      <NavItem />
    </Box>
  );
};

export default SearchBox;
