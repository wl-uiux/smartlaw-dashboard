import React from "react";
import {
  Box,
  Text,
  Link,
  Heading,
  Button,
} from "@chakra-ui/react";
function FeedbackLayout8() {
  return (
    <Box p={4} display={{ md: "flex" }}>

      <Box mt={{ base: 4, md: 0 }} ml={{ md: 48 }}>
        <Box maxW="32rem">
          <Heading mb={4} color="cyan">
            Payments Center
          </Heading>
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
          <Text fontSize="xl">
            MetaFP helps businesses process payments to their developer
            communities.
          </Text>
          <Button size="lg" colorScheme="green" mt="24px">
            Create a free account
          </Button>
        </Box>
        <br />
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are a
          few ways LexDAO members are found.
        </Text>
      </Box>
    </Box>
  );
}
export default FeedbackLayout8;
