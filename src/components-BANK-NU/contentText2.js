import React from "react";            
import {            
 Box,           
 Grid,           
 Text,           
 Heading,           
 Flex,           
 Spacer,           
 HStack,           
 Button,           
} from "@chakra-ui/react";            
      function ContentText2() {      
       return (     
        <Box>    
        <HStack>    
        <Box>    
<Text> LexDAO Full width Flex and Spacer </Text>  
        <Flex>    
        <Box w="400px" h="10" bg="red.500" />    
        <Spacer/>    
        <Box w="400px" h="10" bg="blue.500" />    
        <Spacer/>    
        <Box w="400px" h="10" bg="red.500" />    
        </Flex>    
<Text>    
Grid: The children start at the beginning, the 1/3 mark and 2/3 mark   
        </Text>    
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>    
        <Box w="400px" h="10" bg="blue.500" />    
        <Box w="400px" h="10" bg="blue.500" />    
        <Box w="400px" h="10" bg="blue.500" />    
        </Grid>    
<Text>    
HStack: The children have equal spacing but don't span the whole   
container   
        </Text>    
        <HStack spacing="24px">    
        <Box w="400px" h="10" bg="teal.500" />    
        <Box w="400px" h="10" bg="teal.500" />    
        <Box w="400px" h="10" bg="teal.500" />    
        </HStack>    
        </Box>    
        </HStack>    
<br/>               
<br/>               
        <Flex>    
        <Box p="2">    
        <Heading size="md"> LexDAO Training Program </Heading>  
        </Box>    
        <Box>    
        <Button colorScheme="teal" mr="4">    
Sign Up   
        </Button>    
        <Button colorScheme="teal"> Log in </Button>  
        </Box>    
        </Flex>    
        </Box>    
);
}
export default ContentText2;              
