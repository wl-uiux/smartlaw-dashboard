import React from "react";            
import {            
 useBoolean,           
 Button,           
 Box,           
 Center,           
 HStack,           
 Text,           
} from '@chakra-ui/react';            
      function HookBoolean1() {      
   const [flag, setFlag] = useBoolean()         
   return (     
        <Box>    
        <Center>    
        <HStack>    
        <Button colorsScheme="cyan" variant="outline" onClick={setFlag.toggle}>    
Dark Mode Toggle 
        </Button>    
        <div onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>    
{flag ? 'The dark mode is ON!' : 'Hover me to turn dark mode ON'}    
        </div>    
<Text color="orange" > Dark mode state: {flag.toString()} </Text>  
        </HStack>    
        </Center>    
        </Box>      
);
}
export default HookBoolean1;              
