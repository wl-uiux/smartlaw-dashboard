import React from "react";
import {
  Box,
  Text,
  Link,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";
function Popover2() {
  return (
    <Box p={4} display={{ md: "flex" }}>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 24 }}>
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          LexDAO General Information and Links
        </Link>
        <br />
        <Popover>
          <PopoverTrigger>
            <Button colorScheme="blue"> General Membership Information </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent color="blue">
              <PopoverArrow />
              <PopoverHeader> Header </PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Button colorScheme="blue"> Button </Button>
              </PopoverBody>
              <PopoverFooter> This is the footer </PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
        <br />
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are
          some ways LexDAO members are found.
        </Text>
      </Box>
    </Box>
  );
}
export default Popover2;
