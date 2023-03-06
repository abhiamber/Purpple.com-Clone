import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const Offer = () => {
  let [catogoryKey, setcatogoryKey] = useState();
  let [catogoryTypes, setCatogoryTypes] = useState({
    "FACE MAKEUP": ["Primer", "Foundation", "Compact", "Blush"],
    "LIP MAKEUP": ["Lipstick", "Lip Liner", "Lip Gloss"],
  });
  const toggleSearch = () => {};
  let shop = {
    Makeup: {
      "FACE MAKEUP": ["Primer", "Foundation", "Compact", "Blush"],
      "LIP MAKEUP": ["Lipstick", "Lip Liner", "Lip Gloss"],
    },

    "Skin Care": {
      CLEANERS: ["Face Wash", "Cleaner"],
      "EYE CARE": ["Eye Serum", "Eye Cream"],
    },

    "Hair care": {
      "SHAMPOO & CONDITIONERS": ["Shampoo", "Dry Shampoo"],
      "HAIR ACCESSORIES": ["Hair Clips,Bands & more"],
    },

    Appliacnces: {
      "SHAMPOO & CONDITIONERS": ["Shampoo", "Dry Shampoo"],
      "HAIR ACCESSORIES": ["Hair Clips,Bands & more"],
    },

    "Personal Care": {
      "SHAMPOO & CONDITIONERS": ["Shampoo", "Dry Shampoo"],
      "HAIR ACCESSORIES": ["Hair Clips,Bands & more"],
    },

    Men: {
      "SHAMPOO & CONDITIONERS": ["Shampoo", "Dry Shampoo"],
      "HAIR ACCESSORIES": ["Hair Clips,Bands & more"],
    },

    Fragrance: {
      "SHAMPOO & CONDITIONERS": ["Shampoo", "Dry Shampoo"],
      "HAIR ACCESSORIES": ["Hair Clips,Bands & more"],
    },

    "Health & Wellness": {
      "SHAMPOO & CONDITIONERS": ["Shampoo", "Dry Shampoo"],
      "HAIR ACCESSORIES": ["Hair Clips,Bands & more"],
    },

    "Mom & Baby": {
      "SHAMPOO & CONDITIONERS": ["Shampoo", "Dry Shampoo"],
      "HAIR ACCESSORIES": ["Hair Clips,Bands & more"],
    },
  };

  const setshopFucntion = () => {
    let arr = [];
    for (let key in shop) {
      arr.push(key);
    }
    setcatogoryKey(arr);
  };

  useEffect(() => {
    setshopFucntion();
  }, []);

  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box className={"blackHover"} fontWeight={630} p="7px">
          OFFERS{" "}
        </Box>
      </PopoverTrigger>
      <PopoverContent w="100vw">
        <PopoverArrow />
        <PopoverHeader>
          <Box h="0.5px" bg="black" w="95%" m="auto"></Box>
          <Flex mx="50px" alignItems="center" justifyContent="space-between">
            <Flex gap="1px">
              {catogoryKey &&
                catogoryKey.map((e, i) => (
                  <Box
                    fontWeight="600"
                    key={i}
                    className={"greyHover"}
                    p="10px"
                    onMouseOver={() => {
                      setCatogoryTypes(shop[e]);
                    }}
                  >
                    {e}
                  </Box>
                ))}
            </Flex>
          </Flex>
          <Box h="1px" bg="black" w="95%" m="auto"></Box>
        </PopoverHeader>
        <PopoverBody>
          <SimpleGrid mx="50px" columns={5}>
            {catogoryKey &&
              Object.keys(catogoryTypes) &&
              Object.keys(catogoryTypes).map((keyName, keyindex) => {
                return (
                  <Box key={keyindex}>
                    <Box fontWeight="500">{keyName}</Box>
                    {catogoryTypes[keyName] &&
                      catogoryTypes[keyName].map((el, i) => {
                        return <Box key={i}>{el}</Box>;
                      })}
                  </Box>
                );
              })}
          </SimpleGrid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Offer;
