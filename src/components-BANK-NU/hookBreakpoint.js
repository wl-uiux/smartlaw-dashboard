import React from "react";            
import {            
 useBreakpointValue,           
 VStack,           
 Button,           
 Box,           
 Center,           
 Text,           
} from '@chakra-ui/react';            
      function HookBreakpoint() {      
   const variant = useBreakpointValue({ base: "outline", md: "solid", lg: "outline" })         
       return (     
        <Box>    
        <Center>    
        <VStack align="flex-start">    
<Text> Resize your window to see the button variant change </Text>  
        <Button w="300px" colorScheme="teal" variant={variant}>    
Button   
        </Button>    
        </VStack>    
        </Center>    
        </Box>    
);
}
export default HookBreakpoint;              
