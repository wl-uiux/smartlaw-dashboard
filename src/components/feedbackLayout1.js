import React from "react";
import {
  Box,
  Image,
  Text,
  Link,
  CircularProgress,
  CircularProgressLabel,
  HStack,
} from "@chakra-ui/react";
function FeedbackLayout1() {
  return (
   
    <Box p={4} display={{ md: "flex" }}>
      <Box flexShrink={0}>
        <Image
          borderRadius="lg"
          width={{ md: 40 }}
          src=" https://bafybeidmpeq6op634lbahmksakedv45w3c7t2dtx7bg2ojqsmhy253432q.ipfs.infura-ipfs.io
 "
          alt=" LexDAO "
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 24 }}>
        <Text    
fontWeight="bold"    
textTransform="uppercase"    
fontSize="sm"    
letterSpacing="wide"    
color="yellow.600"    
>
Tracking Web3Skills Progress        </Text>    
<Link    
mt={1}    
display="block"    
fontSize="lg"    
lineHeight="normal"    
fontWeight="semibold"    
href=" # "  
>
SmartLaw Web3Skills provides tips. tricks, and tools for the decentralized internet.    
        </Link>    
        <br />

        <HStack>
          <CircularProgress value={0} color="blue.400">
            <CircularProgressLabel>0%</CircularProgressLabel>
          </CircularProgress>
          <CircularProgress value={10} color="blue.400">
            <CircularProgressLabel>10%</CircularProgressLabel>
          </CircularProgress>
          <CircularProgress value={20} color="blue.400">
            <CircularProgressLabel>20%</CircularProgressLabel>
          </CircularProgress>
          <CircularProgress value={30} color="blue.400">
            <CircularProgressLabel>30%</CircularProgressLabel>
          </CircularProgress>
          <CircularProgress value={40} color="blue.400">
            <CircularProgressLabel>40%</CircularProgressLabel>
          </CircularProgress>
          <CircularProgress value={50} color="blue.400">
            <CircularProgressLabel>50%</CircularProgressLabel>
          </CircularProgress>
          <CircularProgress value={60} color="blue.400">
            <CircularProgressLabel>60%</CircularProgressLabel>
          </CircularProgress>
          <CircularProgress value={70} color="blue.400">
            <CircularProgressLabel>70%</CircularProgressLabel>
          </CircularProgress>
          <CircularProgress value={80} color="blue.400">
            <CircularProgressLabel>80%</CircularProgressLabel>
          </CircularProgress>
          <CircularProgress value={90} color="blue.400">
            <CircularProgressLabel>90%</CircularProgressLabel>
          </CircularProgress>
          <CircularProgress value={100} color="blue.400">
            <CircularProgressLabel>100%</CircularProgressLabel>
          </CircularProgress>
          <CircularProgress isIndeterminate color="blue.600" />
        </HStack>
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are
          some ways LexDAO members are found.
        </Text>

      </Box>
    </Box>
  );
}
export default FeedbackLayout1;
