import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import NavItem from "./NavbarItem/NavItem";
import logo from "../../image/P.png";
import { CiFaceSmile, CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { AuthContext } from "../../Utilis/Auth";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  // GetToQueryProduct,
  GetToSearchQueryProduct,
} from "../../redux/prod/prod.action";
import Navmenu from "./NavbarItem/Navmenu";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logout } = useContext(AuthContext);
  let users = JSON.parse(localStorage.getItem("user")) || null;

  const btnRef = React.useRef();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  let [query, setQuery] = useState();
  const handleSearch = () => {
    if (!query) {
      return alert("Your Query is empty");
    }

    dispatch(GetToSearchQueryProduct(query));

    Navigate("/productmain", { state: { q: "S", query } });
    // console.log(query);
  };

  return (
    <Flex
      // ml="12px"
      pl="8px"
      pr="8px"
      // Text-Align="center"
      position={"sticky"}
      top="0px"
      zIndex={999}
      bg="white"
      mb="5px"
      justifyContent={"space-between"}
      w="100%"
      m="auto"
    >
      <Box p="4" w="70px">
        <Link to="/" w="70px">
          <Image
            boxSize="50px"
            borderRadius={"5px"}
            h="40px"
            objectFit="cover"
            src={logo}
            alt="logo"
            maxWidth="90px"
          />
        </Link>
      </Box>
      <Box
        p="4"
        ml="80px"
        display={{ lg: "block", md: "none", sm: "none", base: "none" }}
      >
        <NavItem />
      </Box>

      <Box p="4">
        <Flex>
          <Box>
            <Flex>
              {" "}
              <Text
                cursor={"pointer"}
                ref={btnRef}
                colorScheme="white"
                bg={"white"}
                color="black"
                onClick={onOpen}
              >
                <Text color={"black"} fontWeight="light" fontSize="40px">
                  <CiSearch />
                </Text>
              </Text>
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
                        pt="10px"
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
          </Box>
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
                          color={"black"}
                          variant="outline"
                          w="100%"
                          bg="blue"
                          fontSize={"17px"}
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
                          // color={"black"}
                          variant="outline"
                          w="100%"
                          bg="blue"
                          fontSize={"17px"}
                          color={"red"}
                        >
                          <Link to="/register">New Customer?</Link>
                        </Button>

                        <Button
                          // color={"black"}
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

          <Box
            color={"black"}
            fontWeight="light"
            fontSize="40px"
            cursor={"pointer"}
          >
            <Link to="/cart">
              <CiShoppingCart />
            </Link>
          </Box>
        </Flex>
      </Box>

      <Box
        p="4"
        display={{ lg: "none", md: "none", sm: "block", base: "block" }}
      >
        <Navmenu />
      </Box>
    </Flex>
  );
};

export default Navbar;
