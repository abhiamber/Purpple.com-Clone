import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Shop from "../NavItem/Shop";
import { useDispatch } from "react-redux";
import { GetToQueryProduct } from "../../../redux/prod/prod.action";

let shop = [
  "Cream",
  "bb_cc",
  "Powder",
  "Foundation",
  "Concealer",
  "Bronzer",
  "Contour",
  "Blush",
  "Highlighter",
  "nail_polish",
  "gel",
  "Lipstick",
  "Liquid",
  "Lip Liner",
  "Lip Gloss",
  "Pencil",
  "Palette",
  "Eye Liner",
  "Eye Shadow",
];
function Navmenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  // let [catogoryKey, setcatogoryKey] = useState(shop);

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(prod);

  const toggleSearch = (query) => {
    onClose();
    dispatch(GetToQueryProduct(query));
    Navigate("/productmain", { state: { q: "N", query } });
    // console.log(query);
  };

  return (
    <>
      <Box
        ref={btnRef}
        onClick={onOpen}
        color={"black"}
        fontWeight="light"
        fontSize="40px"
        cursor={"pointer"}
      >
        <RxHamburgerMenu />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link to="/">
              <AiFillHome onClick={onClose} />
            </Link>
          </DrawerHeader>

          <DrawerBody>
            {shop.map((item, i) => {
              return (
                <Box
                  fontSize={"20px"}
                  _hover={{
                    fontWeight: "semibold",
                    borderRadius: "10px",
                  }}
                  onClick={() => toggleSearch(item)}
                  key={i}
                >
                  {item}{" "}
                </Box>
              );
            })}
          </DrawerBody>

          <DrawerFooter bg="#f9f9f9">
            <Flex
              //   mb="50px"
              w="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Image
                w="30px"
                h="30px"
                border="1px solid"
                borderRadius="100%"
                src="https://www.shutterstock.com/image-illustration/united-states-america-flag-260nw-1385203346.jpg"
              />
              <Text textDecor="underline">Change Language</Text>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navmenu;
