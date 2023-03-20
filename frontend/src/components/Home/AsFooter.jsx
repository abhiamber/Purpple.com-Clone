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
    <Box m="auto" w="90%">
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
              textAlign="center"
              as="h5"
              size="15px"
              color="gray"
              mb="10px"
            >
              PURPLLE BUSINESS
            </Heading>
            <Text
              textAlign="center"
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
          <Box pt="8px">
            <Heading
              textAlign="center"
              as="h5"
              size="15px"
              color="gray"
              mb="10px"
            >
              POLICY INFO
            </Heading>
            <Text
              textAlign="center"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Privacy Policy
            </Text>
            <Text
              textAlign="center"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Terms of Use
            </Text>
            <Text
              textAlign="center"
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
              textAlign="center"
              as="h5"
              size="15px"
              color="gray"
              mb="10px"
            >
              PURPlLE
            </Heading>
            <Text
              textAlign="center"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Need Help?
            </Text>
            <Text
              textAlign="center"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              FAQ's
            </Text>
            <Text
              textAlign="center"
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
    </Box>
  );
}
