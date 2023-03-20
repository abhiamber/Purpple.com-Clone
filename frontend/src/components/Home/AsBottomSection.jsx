import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function AsBottomSection() {
  return (
    <Box pl={["30px", null, null]} pr={["30px", null, null]}>
      <SimpleGrid columns={[1, 1, 3]} mt="50px">
        <VStack>
          <Box
            border="1px solid gray"
            pl="25%"
            pr="25%"
            pt="20px"
            pb="20px"
            h="100%"
            w="100%"
          >
            <Image
              m="auto"
              src="https://media6.ppl-media.com/mediafiles/ecomm/home/1499247950_secure-payment.jpg"
            />
            <Heading
              textAlign="center"
              as="h4"
              fontSize="20px"
              mt="24px"
              color="black"
              fontWeight="500"
            >
              100 % Secure Payment
            </Heading>
            <Text textAlign="center" mt="10px" fontSize="15px">
              All major credit & debit cards accepted.
            </Text>
          </Box>
        </VStack>
        <VStack>
          <Box
            border="1px solid gray"
            pl="25%"
            pr="25%"
            pt="20px"
            pb="20px"
            h="100%"
            w="100%"
          >
            <Image
              m="auto"
              src="https://media6.ppl-media.com/mediafiles/ecomm/home/1499247975_beauty-assistant.jpg"
            />
            <Heading
              as="h4"
              fontSize="20px"
              color="black"
              mt="24px"
              textAlign="center"
              fontWeight="500"
            >
              Beauty Assistant
            </Heading>
            <Text mt="10px" textAlign="center" fontSize="15px">
              Tell me what you are looking for and i will help you find your
              perfect match.
            </Text>
          </Box>
        </VStack>
        <VStack>
          <Box
            border="1px solid gray"
            pl="25%"
            pr="25%"
            pt="20px"
            pb="20px"
            h="100%"
            w="100%"
          >
            <Image
              m="auto"
              src="https://media6.ppl-media.com/mediafiles/ecomm/home/1499247997_help-center.jpg"
            />
            <Heading
              as="h4"
              fontSize="20px"
              color="black"
              mt="24px"
              textAlign="center"
              fontWeight="500"
            >
              Help Center
            </Heading>
            <Text mt="10px" fontSize="15px" textAlign="center">
              Got a question? Look no further. Browse FAQ or submit your query.
            </Text>
          </Box>
        </VStack>
      </SimpleGrid>
      <SimpleGrid
        columns={[1, 1, 2]}
        backgroundColor="rgba(245,246,247,1)"
        pt="40px"
        pb="40px"
      >
        <VStack>
          <Box>
            <Heading
              as="h4"
              fontSize="24px"
              textAlign="left"
              fontWeight="400"
              mb="15px"
            >
              Spotlight
            </Heading>
            <Image
              w="400px"
              h="230px"
              src="https://media6.ppl-media.com/mediafiles/ecomm/home/1545829914_sddefault.jpg"
            />
          </Box>
        </VStack>
        <VStack>
          <Box>
            <Heading
              as="h4"
              fontSize="24px"
              textAlign="left"
              fontWeight="400"
              mb="15px"
            >
              Shop on the go
            </Heading>
            <Image
              w="400px"
              h="230px"
              src="https://i.ytimg.com/vi/j2KsRYKLWck/maxresdefault.jpg"
            />
          </Box>
        </VStack>
      </SimpleGrid>
    </Box>
  );
}
