import React from "react";
import {
  Box,
  Text,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  Button,
  Portal,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
} from "@chakra-ui/react";
function Popover6() {
  const initRef = React.useRef();
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
          LexDAO Welcome Message
        </Link>
        <br />
        <Popover closeOnBlur={false} placement="left" initialFocusRef={initRef}>
          {({ isOpen, onClose }) => (
            <>
              <PopoverTrigger>
                <Button colorScheme="blue">
                  Click to {isOpen ? "Close the Welcome Message" : "View the Welcome Message"}
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverHeader> Thank you for your interest. </PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Box>LexDAO welcomes you. Connect your 0x..address now.</Box>
                    <Button
                      mt={4}
                      colorScheme="blue"
                      onClick={onClose}
                      ref={initRef}
                    >
                      Close
                    </Button>
                  </PopoverBody>
                  <PopoverFooter> Go to freeweb3.com </PopoverFooter>
                </PopoverContent>
              </Portal>
            </>
          )}
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
export default Popover6;
