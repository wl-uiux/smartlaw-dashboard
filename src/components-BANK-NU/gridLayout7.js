import React from "react";            
import {            
 Box,           
 Text,           
 HStack,           
} from "@chakra-ui/react";            
      function GridLayout7() {      
       return (     
        <HStack spacing="24px">    
        <Box w="120px" h="40px" bg="purple">    
<Text mt={2} ml={3} color="white">    
One   
        </Text>    
        </Box>    
        <Box w="120px" h="40px" bg="blue">    
<Text mt={2} ml={3} color="white">    
Two   
        </Text>    
        </Box>    
        <Box w="120px" h="40px" bg="magenta">    
<Text mt={2} ml={3} color="white">    
Three   
        </Text>    
        </Box>    
        </HStack>    
);
}
export default GridLayout7;              
