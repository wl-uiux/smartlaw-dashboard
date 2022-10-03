import React from "react";
import {
  Box,
  Text,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
function Popover7() {
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
          Terms and Conditions Confirmation
        </Link>
        <br />
        <Popover>
          <PopoverTrigger>
            <Box
              color="white"
              tabIndex="0"
              role=" button "
              aria-label=" LexDAO Box "
              p={5}
              w="50%"
              bg="red.500"
              fontWeight="semibold"
              children="Click to Review Terms and Conditions"
              borderRadius="5px"
            />
          </PopoverTrigger>
          <PopoverContent bg="tomato" color="white">
            <PopoverHeader fontWeight="semibold"> Confirmation </PopoverHeader>
            <PopoverArrow bg="pink.500" />
            <PopoverCloseButton bg="purple.500" />
            <PopoverBody>
              LexDAO provides value and service supporting the fourth industrial
              revolution. Web3 is a set of technologies that publicly
              interoperate through blockchain and node based computing systems.
            </PopoverBody>
          </PopoverContent>
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
export default Popover7;
