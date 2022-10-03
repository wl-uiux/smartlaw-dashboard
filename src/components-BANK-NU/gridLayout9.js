import React from "react";            
import {            
 Box,           
 Text,           
 StackDivider,           
 VStack,           
} from "@chakra-ui/react";            
      function GridLayout9() {      
       return (     
        <VStack    
divider={<StackDivider borderColor="gray.200" />}    
spacing={4}    
align="stretch"    
>
        <Box h="40px" bg="purple">    
<Text mt={2} ml={3} color="white">    
One   
        </Text>    
        </Box>    
        <Box h="40px" bg="blue">    
<Text mt={2} ml={3} color="white">    
Two   
        </Text>    
        </Box>    
        <Box h="40px" bg="magenta">    
<Text mt={2} ml={3} color="white">    
Three   
        </Text>    
        </Box>    
        </VStack>    
);
}
export default GridLayout9;              
