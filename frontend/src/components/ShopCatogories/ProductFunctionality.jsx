import {
  Box,
  Button,
  Flex,
  Radio,
  RadioGroup,
  //   Skeleton,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import { GetToProduct } from "../../redux/prod/prod.action";
// import { useDispatch, useSelector } from "react-redux";
// import { GetToQueryProduct } from "../../redux/prod/prod.action";

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ProductFunctionality = ({ sortFilterFunc }) => {
  const [value, setValue] = React.useState();
  const [allProdStatus, setAllProdStatus] = useState(false);

  let [page, setPage] = useState(1);

  useEffect(() => {
    sortFilterFunc(value, page);
  }, [value, page]);

  return (
    <Box mt="20px">
      <Flex justifyContent={"space-around"}>
        {" "}
        <Box>
          <Button>Sort</Button>
          <RadioGroup onChange={setValue} value={value} mt="10px">
            <Stack direction="column">
              <Radio value="1">Price Low</Radio>
              <Radio value="2">Price High</Radio>
              <Radio value="3">Rating High</Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <Box>
          <Button onClick={() => setAllProdStatus(true)}>All Products</Button>
          <RadioGroup onChange={setValue} value={value} mt="10px">
            {allProdStatus ? (
              <Stack direction="column">
                <Radio value="4">Trending</Radio>
                <Radio value="5">Popular</Radio>
              </Stack>
            ) : null}
          </RadioGroup>
        </Box>
      </Flex>

      <Box
        textAlign={"center"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        gap={3}
        flexWrap="wrap"
        w="80%"
        m="auto"
        p="10px"
        mt="20px"
      >
        {allProdStatus
          ? arr.map((el, i) => {
              return (
                <Button
                  variant={"outline"}
                  color="teal"
                  bg="orange.400"
                  onClick={() => setPage(el)}
                  Key={i}
                >
                  {el}
                </Button>
              );
            })
          : null}
      </Box>
    </Box>
  );
};

export default ProductFunctionality;
