import React from "react";
import {
  useDisclosure,
  Button,
  Box,
  // Image,
  Radio,
  RadioGroup,
  Link,
  // Editable,
  // EditableInput,
  // EditablePreview,
  // CircularProgress,
  // CircularProgressLabel,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Stack,
  // HStack,
  Text,
} from "@chakra-ui/react";
function Drawer2() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  return (
    <Box p={4} display={{ md: "flex" }}>

      <Box mt={{ base: 4, md: 0 }} ml={{ md: 48 }}>
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          Customizing Course Content
        </Link>
        <br />
        <RadioGroup defaultValue={placement} onChange={setPlacement}>
          <Stack direction="row" mb="4">
            <Radio value="top"> Open at Top </Radio>
            <Radio value="right"> Open on Right </Radio>
            <Radio value="bottom"> Open at Bottom </Radio>
            <Radio value="left"> Open on Left </Radio>
          </Stack>
        </RadioGroup>
        <Button colorScheme="blue" onClick={onOpen}>
          Open SmartLaw Web3Skills Course Content 
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px"> Basic Drawer </DrawerHeader>
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
        <br />
        <br />
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are
          some ways LexDAO members are found.
        </Text>
      </Box>
    </Box>
  );
}
export default Drawer2;
