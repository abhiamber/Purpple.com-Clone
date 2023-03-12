import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function AsFooter() {
  return (
    <Box>
      <SimpleGrid m="auto" mt="30px" columns={[1, 2, 4]}>
        <VStack>
          <Box pt="8px">
            <Heading
              textAlign="left"
              as="h5"
              size="15px"
              color="gray"
              mb="10px"
            >
              PURPLLE
            </Heading>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              About Us
            </Text>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Our Team
            </Text>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Careers
            </Text>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Press
            </Text>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Sitemap
            </Text>
          </Box>
        </VStack>
        <VStack>
          <Box pt="8px">
            <Heading
              textAlign="left"
              as="h5"
              size="15px"
              color="gray"
              mb="10px"
            >
              PURPLLE BUSINESS
            </Heading>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Sell on Purplle
            </Text>
          </Box>
        </VStack>
        <VStack>
          <Box ml="80px">
            <Heading
              textAlign="left"
              as="h5"
              size="15px"
              color="gray"
              mb="10px"
            >
              POLICY INFO
            </Heading>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Privacy Policy
            </Text>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Terms of Use
            </Text>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Return & Cancellation Policy
            </Text>
          </Box>
        </VStack>
        <VStack>
          <Box pt="8px">
            <Heading
              textAlign="left"
              as="h5"
              size="15px"
              color="gray"
              mb="10px"
            >
              PURPlLE
            </Heading>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Need Help?
            </Text>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              FAQ's
            </Text>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Contact Us
            </Text>
          </Box>
        </VStack>
      </SimpleGrid>
      <Box border="1px" borderColor="#e8e8e8" w="85%" m="auto"></Box>
      <SimpleGrid columns={[1, 1, 2]}>
        <SimpleGrid
          columns={4}
          pl={[null, null, "120px"]}
          pr={[null, null, "120px"]}
          spacing="105px"
        >
          <Box w="150px">
            <Heading as="h5" size="15px" color="gray" pt="40px" pl="30px">
              PAYMENT
            </Heading>
          </Box>
          <Box pl="-20px" w="300px" mt="25px">
            <Image
              mt="15px"
              src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1499177379_tt.jpg"
              w="70%"
              h="27px"
            />
          </Box>
        </SimpleGrid>
        <SimpleGrid
          m="auto"
          columns={4}
          pl={[null, null, "10px"]}
          pr={[null, null, "10px"]}
          spacing="105px"
        >
          <Box w="150px">
            <Heading as="h5" size="15px" color="gray" pt="40px" pl="30px">
              CONNECT
            </Heading>
          </Box>
          <Box pl="-20px" w="300px">
            <Image
              cursor="pointer"
              w="70%"
              mt="0px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XY1bxw40RPgonlgvx4W_5JcNQA5szpT1Bw&usqp=CAU"
            />
          </Box>
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}
