import React from "react";            
import {            
 Box,           
 Text,           
 Stack,           
} from "@chakra-ui/react";            
      function GridLayout8() {      
       return (     
        <Stack direction={["column", "row"]} spacing="24px">    
        <Box w="240px" h="40px" bg="purple">    
<Text mt={2} ml={3} color="white">    
3   
        </Text>    
        </Box>    
        <Box w="240px" h="40px" bg="blue">    
<Text mt={2} ml={3} color="white">    
3   
        </Text>    
        </Box>    
        <Box w="240px" h="40px" bg="magenta">    
<Text mt={2} ml={3} color="white">    
3   
        </Text>    
        </Box>    
        </Stack>    
);
}
export default GridLayout8;              
