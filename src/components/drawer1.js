import React from "react";
import {
  useDisclosure,
  Input,
  Button,
  Box,
  // Image,
  Link,
  // Editable,
  // EditableInput,
  // EditablePreview,
  // CircularProgress,
  // CircularProgressLabel,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  // HStack,
  Text,
} from "@chakra-ui/react";
function Drawer1() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
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
          Open Course One Content
        </Link>
        <br />
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open Course One Content on the Right
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader> Create your account </DrawerHeader>
            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue"> Save </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <br />

        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are
          some ways LexDAO members are found.
        </Text>
      </Box>
    </Box>
  );
}
export default Drawer1;
