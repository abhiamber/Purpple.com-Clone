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
  let user;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logout } = useContext(AuthContext);
  let users = JSON.parse(localStorage.getItem("userName")) || null;

  if (users) {
    user = users.user;
  }
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
      m="auto"
      // ml="12px"
      pl="18px"
      pr="18px"
      position={"sticky"}
      top="0px"
      zIndex={999}
      bg="white"
      mb="5px"
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

      <Spacer />
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
                      <Text fontSize={"23px"} color={"red"}>
                        <Link to="/" onClick={logout}>
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
      <Spacer />
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
