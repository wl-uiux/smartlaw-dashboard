import React from "react";            
import {            
 useClipboard,           
 Flex,           
 Input,           
 Editable,           
 EditablePreview,           
 EditableInput,           
 Button,           
 Box,           
 Center,           
 HStack,           
} from '@chakra-ui/react';            
      function HookClipboard() {      
   const [value] = React.useState("LexDAO Text Helper")         
   const { hasCopied, onCopy } = useClipboard(value)         
       return (     
        <Box>    
        <Center><HStack>    
        <Flex mb={2}>    
        <Input value={value} isReadOnly placeholder="Welcome" />    
        <Button colorScheme="purple" onClick={onCopy} ml={2}>    
{hasCopied ? "Copied" : "Copy"}    
        </Button>    
        </Flex>    
        <Editable placeholder=" Paste here">   
        <EditablePreview width="100%" />    
        <EditableInput />    
        </Editable>    
        </HStack>    
        </Center>    
        </Box>    
);
}
export default HookClipboard;              
