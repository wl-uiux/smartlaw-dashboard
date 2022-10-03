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
  Button,
  ButtonGroup,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
} from "@chakra-ui/react";
function Popover5() {
  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
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
          Agreeing to the Terms and Conditions
        </Link>
        <br />
        <>
          <Button colorScheme="blue" mr={5} onClick={open}>
            Confirmation
          </Button>
          <Popover
            returnFocusOnClose={false}
            isOpen={isOpen}
            onClose={close}
            placement="right"
            closeOnBlur={false}
          >
            <PopoverTrigger>
              <Button colorScheme="pink"> Double Confirmation </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader fontWeight="semibold">
                {" "}
                Confirmation Verification{" "}
              </PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody color="blue">
                Are you sure you want to proceed?
              </PopoverBody>
              <PopoverFooter d="flex" justifyContent="flex-end">
                <ButtonGroup size="sm">
                  <Button variant="outline" colorScheme="red">
                    Cancel
                  </Button>
                  <Button colorScheme="green"> I Confirm </Button>
                </ButtonGroup>
              </PopoverFooter>
            </PopoverContent>
          </Popover>
        </>
        <br />
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are
          some ways LexDAO members are found.
        </Text>
      </Box>
    </Box>
  );
}
export default Popover5;
