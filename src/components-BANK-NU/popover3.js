import React from "react";
import {
  Box,
  Text,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
function Popover3() {
  const initialFocusRef = React.useRef();
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
          Steps to LexDAO Membership
        </Link>
        <br />
        <Popover
          initialFocusRef={initialFocusRef}
          placement="bottom"
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <Button colorScheme="blue"> Membership Step One </Button>
          </PopoverTrigger>
          <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
            <PopoverHeader pt={4} fontWeight="bold" border="0">
              Manage Your LexDAO Channels
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              LexDAO provides value and service supporting the fourth industrial
              revolution. Web3 is a set of technologies that publicly
              interoperate through blockchain and node based computing systems.
            </PopoverBody>
            <PopoverFooter
              border="0"
              d="flex"
              alignItems="center"
              justifyContent="space-between"
              pb={4}
            >
              <Box fontSize="sm">Step 1 of 4</Box>
              <ButtonGroup size="sm">
                <Button colorScheme="green">Setup 0x.. Account</Button>
                <Button colorScheme="blue" ref={initialFocusRef}>
                  Next
                </Button>
              </ButtonGroup>
            </PopoverFooter>
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
export default Popover3;
