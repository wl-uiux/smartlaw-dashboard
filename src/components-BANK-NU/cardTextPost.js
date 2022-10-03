import {
  Box,
  Center,
  Heading,
  Text,
  HStack,
  VStack,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
function CardTextPost() {
  return (
    <Center align="top" py={6}>
      <VStack align="top">
        <HStack mr="2" ml="2">
          <Box
            maxW={"445px"}
            w={"full"}
            bg={useColorModeValue("gray.300", "gray.900")}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box
              h={"210px"}
              bg={"gray.500"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
            >
              <Image
                src={
                  " https://bafybeidmpeq6op634lbahmksakedv45w3c7t2dtx7bg2ojqsmhy253432q.ipfs.infura-ipfs.io "
                }
                layout={"fill"}
              />
            </Box>
            <Stack>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                LexDAO Article 1
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                Boost Conversion Rates
              </Heading>
              <Text color={"gray.500"}>
                LexDAO provides value and service supporting the fourth
                industrial revolution. Web3 is a set of technologies that
                publicly interoperate through blockchain and node based
                computing systems.
              </Text>
            </Stack>
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar
                src={
                  " https://bafybeidmpeq6op634lbahmksakedv45w3c7t2dtx7bg2ojqsmhy253432q.ipfs.infura-ipfs.io "
                }
                alt={" LexDAO "}
              />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text color={"black"} fontWeight={600}> Scott Stevenson </Text>
                <Text color={"gray.500"}> September 1, 2021 · Short Read </Text>
              </Stack>
            </Stack>
          </Box>

          <Box
            maxW={"445px"}
            w={"full"}
            bg={useColorModeValue("gray.300", "gray.900")}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box
              h={"210px"}
              bg={"blue.500"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
            >
              <Image
                src={
                  " https://bafybeidmpeq6op634lbahmksakedv45w3c7t2dtx7bg2ojqsmhy253432q.ipfs.infura-ipfs.io "
                }
                layout={"fill"}
              />
            </Box>
            <Stack>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                LexDAO Article 2
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                Engage New Users with Rewardable Quests
              </Heading>
              <Text color={"gray.500"}>
                LexDAO provides value and service supporting the fourth
                industrial revolution. Web3 is a set of technologies that
                publicly interoperate through blockchain and node based
                computing systems.
              </Text>
            </Stack>
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar
                src={
                  " https://bafybeidmpeq6op634lbahmksakedv45w3c7t2dtx7bg2ojqsmhy253432q.ipfs.infura-ipfs.io "
                }
                alt={" LexDAO "}
              />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text color={"black"} fontWeight={600}> Scott Stevenson </Text>
                <Text color={"gray.500"}> September 1, 2021 · Short Read </Text>
              </Stack>
            </Stack>
          </Box>

          <Box
            maxW={"445px"}
            w={"full"}
            bg={useColorModeValue("gray.300", "gray.900")}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box
              h={"210px"}
              bg={"green.400"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
            >
              <Image
                src={
                  " https://bafybeidmpeq6op634lbahmksakedv45w3c7t2dtx7bg2ojqsmhy253432q.ipfs.infura-ipfs.io "
                }
                layout={"fill"}
              />
            </Box>
            <Stack>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                LexDAO Article 3
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                Onboard Players Quickly
              </Heading>
              <Text color={"gray.500"}>
                LexDAO provides value and service supporting the fourth
                industrial revolution. Web3 is a set of technologies that
                publicly interoperate through blockchain and node based
                computing systems.
              </Text>
            </Stack>
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar
                src={
                  " https://bafybeidmpeq6op634lbahmksakedv45w3c7t2dtx7bg2ojqsmhy253432q.ipfs.infura-ipfs.io "
                }
                alt={" LexDAO "}
              />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text color={"black"} fontWeight={600}> Scott Stevenson </Text>
                <Text color={"gray.500"}> September 1, 2021 · Short Read </Text>
              </Stack>
            </Stack>
          </Box>

          <Box
            maxW={"445px"}
            w={"full"}
            bg={useColorModeValue("gray.300", "gray.900")}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box
              h={"210px"}
              bg={"purple.500"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
            >
              <Image
                src={
                  " https://bafybeidmpeq6op634lbahmksakedv45w3c7t2dtx7bg2ojqsmhy253432q.ipfs.infura-ipfs.io "
                }
                layout={"fill"}
              />
            </Box>
            <Stack>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                LexDAO Article 4
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                Retain Talent through Incentives
              </Heading>
              <Text color={"gray.500"}>
                LexDAO provides value and service supporting the fourth
                industrial revolution. Web3 is a set of technologies that
                publicly interoperate through blockchain and node based
                computing systems.
              </Text>
            </Stack>
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar
                src={
                  " https://bafybeiadlckn4fdpst6sgl72yhil7o2v5nvb7ao6ystpovnqk6ictughky.ipfs.infura-ipfs.io/ "
                }
                alt={" LexDAO "}
              />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text color={"black"} fontWeight={600}> Scott Stevenson </Text>
                <Text color={"gray.500"}> September 1, 2021 · Short Read </Text>
              </Stack>
            </Stack>
          </Box>
        </HStack>
      </VStack>
    </Center>
  );
}
export default CardTextPost;
