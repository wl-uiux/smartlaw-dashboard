import React from "react";
import {
  useDisclosure,
  Button,
  Box,
  Image,
  Link,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  HStack,
  Text,
} from "@chakra-ui/react";
function HookDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box p={4} display={{ md: "flex" }}>
      <Box flexShrink={0}>
        <Image
          borderRadius="lg"
          width={{ md: 40 }}
          src=" https://bafybeidmpeq6op634lbahmksakedv45w3c7t2dtx7bg2ojqsmhy253432q.ipfs.infura-ipfs.io
 "
          alt=" LexDAO "
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="yellow.600"
        >
          SmartLaw Web3Skills Curriculum
        </Text>
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          Lesson 1 - Public Private Key Pairs and RSA Encryption
        </Link>
        <br />
        <Box>
          <HStack>
            <Button colorScheme="orange" onClick={onOpen}>
              {" "}
              Open Web3Skills Lesson 1{" "}
            </Button>
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">
                  {" "}
                  Basic Drawer{" "}
                </DrawerHeader>
                <DrawerBody>
                  <p>
                    {" "}
                    LexDAO provides value and service supporting the fourth
                    industrial revolution. Web3 is a set of technologies that
                    publicly interoperate through blockchain and node based
                    computing systems.{" "}
                  </p>
                  <p>
                    {" "}
                    LexDAO provides value and service supporting the fourth
                    industrial revolution. Web3 is a set of technologies that
                    publicly interoperate through blockchain and node based
                    computing systems.{" "}
                  </p>
                  <p>
                    {" "}
                    LexDAO provides value and service supporting the fourth
                    industrial revolution. Web3 is a set of technologies that
                    publicly interoperate through blockchain and node based
                    computing systems.{" "}
                  </p>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </HStack>
        </Box>
        <br />
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are a
          few ways LexDAO members are found.
        </Text>
      </Box>
    </Box>
  );
}
export default HookDrawer;
