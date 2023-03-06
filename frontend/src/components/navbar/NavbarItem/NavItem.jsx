import { Flex } from "@chakra-ui/react";
import React from "react";
import Brand from "../NavItem/Brand";
import Elite from "../NavItem/Elite";
import Mazine from "../NavItem/Mazine";
import New from "../NavItem/New";
import Offer from "../NavItem/Offer";
import Shop from "../NavItem/Shop";
import Splurge from "../NavItem/Splurge";

const NavItem = () => {
  return (
    <Flex
      p="3px"
      display={{ lg: "flex", md: "none", sm: "none", base: "none" }}
      gap="30px"
      bg="white"
      cursor={"pointer"}
      // boxShadow={` rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;`}
      justifyContent="center"
    >
      <Shop />
      <Brand />
      <Offer />
      <New />
      <Splurge />
      <Mazine />
      <Elite />
    </Flex>
  );
};

export default NavItem;
