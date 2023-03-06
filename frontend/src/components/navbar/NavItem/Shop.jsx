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
  // Text,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  GetToProduct,
  GetToQueryProduct,
} from "../../../redux/prod/prod.action";
import { useNavigate } from "react-router-dom";
const Shop = () => {
  let [catogoryKey, setcatogoryKey] = useState();
  let [catogoryTypes, setCatogoryTypes] = useState({
    "FACE MAKEUP": [
      "Cream",
      "Powder",
      "Foundation",
      "bb_cc",
      "Contour",
      "Bronzer",
      "Concealer",
      "Blush",
    ],
    "LIP MAKEUP": ["Lipstick", "Liquid", "Lip Liner", "Lip Gloss"],
  });

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { prod } = useSelector((store) => store);
  // console.log(prod);

  const toggleSearch = (query) => {
    if (query === "total") {
      dispatch(GetToProduct(query));
      Navigate("/productmain");
      return;
    }
    dispatch(GetToQueryProduct(query));
    Navigate("/productmain", { state: { q: "N", query } });
    // console.log(query);
  };
  let shop = {
    Makeup: {
      "FACE MAKEUP": [
        "Cream",
        "bb_cc",
        "Powder",
        "Foundation",
        "Concealer",
        "Bronzer",
        "Contour",
        "Blush",
        "Highlighter",
      ],
      Nails: ["nail_polish", "gel"],
      "LIP MAKEUP": ["Lipstick", "Liquid", "Lip Liner", "Lip Gloss"],
    },

    "Skin Care": {
      CLEANERS: ["Face Wash", "Cleaner"],
      "EYE CARE": ["Pencil", "Palette", "Eye Liner", "Eye Shadow"],
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
    // toggleSearch();
  }, []);

  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box className={"blackHover"} p="7px" fontWeight={630}>
          SHOP CATOGORIES{" "}
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
                    key={i}
                    fontWeight="600"
                    className={"greyHover"}
                    p="10px"
                    onMouseOver={() => {
                      setCatogoryTypes(shop[e]);
                    }}
                    onClick={() => toggleSearch("total")}
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
                        return (
                          <Box key={i} onClick={() => toggleSearch(el)}>
                            {el}
                          </Box>
                        );
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

export default Shop;
