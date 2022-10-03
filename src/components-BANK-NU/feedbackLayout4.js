import React from "react";
import {
  Box,
  Text,
  Link,
  Editable,
  EditableInput,
  EditablePreview,
  useToast,
  Button,
} from "@chakra-ui/react";
function FeedbackLayout4() {
  const toast = useToast();
  return (
    <Box p={4} display={{ md: "flex" }}>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 48 }}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="yellow.600"
        >
          Add Account Details
        </Text>
        <Editable defaultValue="Enter your unique account string here:">
          <EditablePreview />
          <EditableInput />
        </Editable>
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          Creating a SmartLaw Web3Skills Member Account
        </Link>
        <br />

        <Button
          variant="solid"
          colorScheme="messenger"
          onClick={() =>
            toast({
              title: "Account created.",
              description: "An account has been created.",
              status: "success",
              duration: 9000,
              isClosable: true,
            })
          }
        >
          Create Account
        </Button>
        <br />
        <br />
        <Button
          variant="outline"
          colorScheme="orange"
          onClick={() =>
            toast({
              position: "bottom-left",
              render: () => (
                <Box color="white" p={3} bg="blue.500">
                  Welcome to LexDAO
                </Box>
              ),
            })
          }
        >
          Show Notes
        </Button>
        <br />
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are
          some ways LexDAO members are found.
        </Text>
      </Box>
    </Box>
  );
}
export default FeedbackLayout4;
