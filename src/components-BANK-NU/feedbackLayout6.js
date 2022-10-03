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
function FeedbackLayout6() {
  const toast = useToast();
  const statuses = ["success", "error", "warning", "info"];
  const variants = ["solid", "subtle", "left-accent", "top-accent"];
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
          {statuses.map((status, i) => (
            <WrapItem key={i}>
              <Button
                colorScheme="orange"
                variant="outline"
                onClick={() =>
                  toast({
                    title: `${status} note`,
                    status: status,
                    isClosable: true,
                  })
                }
              >
                Show {status} note
              </Button>
            </WrapItem>
          ))}
        </Wrap>
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are
          some ways LexDAO members are found.
        </Text>
        <br />
        <br />
        <Wrap>
          {variants.map((variant, i) => (
            <WrapItem key={i}>
              <Button
                colorScheme="cyan"
                variant="outline"
                onClick={() =>
                  toast({
                    title: `${variant} note`,
                    variant: variant,
                    isClosable: true,
                  })
                }
              >
                Show {variant} note
              </Button>
            </WrapItem>
          ))}
        </Wrap>
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are
          some ways LexDAO members are found.
        </Text>
      </Box>
    </Box>
  );
}
export default FeedbackLayout6;
