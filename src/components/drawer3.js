import React from "react";
import {
  useDisclosure,
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
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  // HStack,
  Text,
} from "@chakra-ui/react";
function Drawer3() {
  const [size, setSize] = React.useState("md");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };
  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];
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
          Review SmartLaw Web3Skills Course Curriculum
        </Link>
        <br />
        {sizes.map((size) => (
          <Button
            variant="outline"
            color="cyan"
            onClick={() => handleClick(size)}
            key={size}
            m={4}
          >{`Open ${size} Course`}</Button>
        ))}
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>{`${size} course contents`}</DrawerHeader>
            <DrawerBody>
              {size === "full"
                ? `Captured 😆 , refresh the page to leave or press 'Esc' key.`
                : null}
            </DrawerBody>
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
export default Drawer3;
