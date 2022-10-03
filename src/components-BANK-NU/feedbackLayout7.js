import React from "react";
import {
  useToast,
  Box,
  Text,
  Link,
  Wrap,
  WrapItem,
  Button,
} from "@chakra-ui/react";
function FeedbackLayout7() {
  const toast = useToast();
  const positions = [
    "top",
    "top-right",
    "top-left",
    "bottom",
    "bottom-right",
    "bottom-left",
  ];
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
          Finding Members and Patrons for LexDAO
        </Link>
        <br />
        <Wrap>
          {positions.map((position, i) => (
            <WrapItem key={i}>
              <Button
                colorScheme="yellow"
                variant="outline"
                onClick={() =>
                  toast({
                    title: `${position} note`,
                    position: position,
                    isClosable: true,
                  })
                }
              >
                Show {position} note
              </Button>
            </WrapItem>
          ))}
        </Wrap>
        <br />

        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are
          some ways LexDAO members are found.
        </Text>
      </Box>
    </Box>
  );
}
export default FeedbackLayout7;
