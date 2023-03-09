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
  const { logout } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const btnRef = React.useRef();
  let [query, setQuery] = useState();
  let users = JSON.parse(localStorage.getItem("user")) || null;

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
      display={{ sm: "none", base: "none", md: "block", lg: "block" }}
    >
      <Flex p="3px">
        <Box h="10" ml="38px">
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

            <Box color={"black"} fontWeight="light" fontSize="40px" mt="-1.5">
              <Popover trigger="hover">
                <PopoverTrigger>
                  <Box className={"blackHover"} p="7px">
                    <CiFaceSmile />
                  </Box>
                </PopoverTrigger>
                <PopoverContent w="20vw">
                  <PopoverArrow />
                  <PopoverHeader>
                    <Box h="0.5px" bg="black" w="100%" m="auto"></Box>
                    <Flex
                      mx="10px"
                      alignItems="center"
                      justifyContent="space-between"
                      flexDirection={"column"}
                    >
                      {users ? (
                        <Box>
                          <Text color={"green"} fontSize="30px">
                            {users.name}
                          </Text>

                          <Button
                            variant="outline"
                            w="100%"
                            bg="blue"
                            fontSize={"17px"}
                            color={"black"}
                          >
                            <Link to="/order">Your Order</Link>
                          </Button>

                          <Button
                            variant="outline"
                            w="100%"
                            bg="blue"
                            fontSize={"23px"}
                            color={"red"}
                          >
                            <Link to="/" onClick={logout}>
                              Logout
                            </Link>
                          </Button>

                          {users.role === "Admin" ? (
                            <Button
                              color={"black"}
                              variant="outline"
                              w="100%"
                              bg="blue"
                            >
                              <Link to="/admin">Admin</Link>
                            </Button>
                          ) : null}
                        </Box>
                      ) : (
                        <Box>
                          <Button
                            color={"black"}
                            variant="outline"
                            w="100%"
                            bg="blue"
                          >
                            <Link to="/login">Sign in</Link>
                          </Button>

                          <Button
                            variant="outline"
                            w="100%"
                            bg="blue"
                            fontSize={"17px"}
                            color={"red"}
                          >
                            <Link to="/register">New Customer?</Link>
                          </Button>

                          <Button
                            variant="outline"
                            w="100%"
                            bg="blue"
                            fontSize={"20px"}
                            color={"red"}
                          >
                            <Link to="/register">Register Now.</Link>
                          </Button>
                        </Box>
                      )}
                    </Flex>
                  </PopoverHeader>
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
      <Box w="100%" m="auto">
        <NavItem />
      </Box>
    </Box>
  );
};

export default SearchBox;
