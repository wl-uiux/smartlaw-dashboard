import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  HStack,
  Image,
} from "@chakra-ui/react";
const IMAGE =
  " https://bafybeighle3fjqrn4z6eztdnxgrk4uwp7kdkwaltjliy5upncamx6ctwgq.ipfs.infura-ipfs.io/";
const IMAGE1 =
  " https://bafybeid6xmqmhc5s2oev2pyftrxz3yiq3htpmqqbmc4ew7skj77tp4gjbi.ipfs.infura-ipfs.io/";
const IMAGE2 =
  " https://bafybeignubrsxqj4tzdgz5mqxf545r2fk77e5qhbgk67aacqys2dsufdsq.ipfs.infura-ipfs.io/";
const IMAGE3 =
  " https://bafybeidlmfis2lf2oqsewhfyvwtzkfgr4dyu7u5ebue32vn27slr72g7he.ipfs.infura-ipfs.io/ ";
function CardService1() {
  return (
    <Center py={12}>
      <HStack mr="2" ml="2">
        <Box
          role={" group "}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={IMAGE}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              LexDAO Brand
            </Text>
            <Heading
              color="blue"
              fontSize={"2xl"}
              fontFamily={"body"}
              fontWeight={500}
            >
              LexDAO, SEED
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text color="blue" fontWeight={800} fontSize={"xl"}
              textTransform={"uppercase"}>
                5.0 Matic
              </Text>
              <Text textDecoration={"line-through"} color={"red"}
              textTransform={"uppercase"}>
                10 Matic
              </Text>
            </Stack>
          </Stack>
        </Box>

        <Box
          role={" group "}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE1})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={IMAGE1}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              LexDAO Brand
            </Text>
            <Heading
              color="blue"
              fontSize={"2xl"}
              fontFamily={"body"}
              fontWeight={500}
            >
              LexDAO, SEED
              </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text color="blue" fontWeight={800} fontSize={"xl"}
              textTransform={"uppercase"}>
                5.0 Matic
              </Text>
              <Text textDecoration={"line-through"} color={"red"}
              textTransform={"uppercase"}>
                10 Matic
              </Text>
            </Stack>
          </Stack>
        </Box>

        <Box
          role={" group "}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE2})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={IMAGE2}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              LexDAO Brand
            </Text>
            <Heading
              color="blue"
              fontSize={"2xl"}
              fontFamily={"body"}
              fontWeight={500}
            >
              LexDAO, SEED
              </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text color="blue" fontWeight={800} fontSize={"xl"}
              textTransform={"uppercase"}>
                5.0 Matic
              </Text>
              <Text textDecoration={"line-through"} color={"red"}
              textTransform={"uppercase"}>
                10 Matic
              </Text>
            </Stack>
          </Stack>
        </Box>

        <Box
          role={" group "}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE3})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={IMAGE3}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              LexDAO Brand
            </Text>
            <Heading
              color="blue"
              fontSize={"2xl"}
              fontFamily={"body"}
              fontWeight={500}
            >
              LexDAO, SEED
              </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text color="blue" fontWeight={800} fontSize={"xl"}
              textTransform={"uppercase"}>
                5.0 Matic
              </Text>
              <Text textDecoration={"line-through"} color={"red"}
              textTransform={"uppercase"}>
                10 Matic
              </Text>
            </Stack>
          </Stack>
        </Box>
      </HStack>
    </Center>
  );
}
export default CardService1;
