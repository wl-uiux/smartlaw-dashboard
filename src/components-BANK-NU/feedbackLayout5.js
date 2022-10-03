import React from "react";            
import {            
 useToast,           
 Box,           
 Image,           
 Text,           
 Link,           
 Editable,           
 EditableInput,           
 EditablePreview,           
 CircularProgress,           
 CircularProgressLabel,           
 Stack,           
 HStack,           
 Button,           
} from "@chakra-ui/react";            
      function FeedbackLayout5() {      
   const toast = useToast();         
   const toastIdRef = React.useRef();         
      function close() {      
if (toastIdRef.current) {    
toast.close(toastIdRef.current);    
}
}
      function closeAll() {      
toast.closeAll();    
}
      function addToast() {      
toastIdRef.current = toast({ description: "LexDAO note" });    
}
      function update() {      
if (toastIdRef.current) {    
toast.update(toastIdRef.current, { description: "new text" });    
}
}
       return (     
        <Box p={4} display={{ md: "flex" }}>    
        <Box flexShrink={0}>    
<Image    
borderRadius="lg"    
width={{ md: 40 }}    
src=" https://bafybeibbsjwphabvlxbodddrtxo4mb7unoyrkx5swstlgqx563jv2sgwku.ipfs.infura-ipfs.io/ "  
alt=" LexDAO "  
/>
        </Box>    
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>    
<Text    
fontWeight="bold"    
textTransform="uppercase"    
fontSize="sm"    
letterSpacing="wide"    
color="yellow.600"    
>
Click to Edit    
        </Text>    
        <Editable defaultValue=" Type your message here:">   
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
Finding Players and Patrons for LexDAO   
        </Link>    
<br/>               
        <Button    
variant="solid"    
color="purple.400"    
colorScheme="yellow"    
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
Show LexDAO Note   
        </Button>    
<br/>               
<br/>               
        <Stack isInline spacing={2}>    
        <Button    
onClick={addToast}    
type="button"    
colorScheme="orange"    
variant="outline"    
>
Note   
        </Button>    
        <Button onClick={close} type="button" variant="outline">    
Close last note   
        </Button>    
        <Button onClick={closeAll} type="button" variant="outline">    
Close all notes   
        </Button>    
        </Stack>    
<br/>               
        <Stack isInline spacing={2}>    
        <Button    
onClick={addToast}    
type="button"    
colorScheme="cyan"    
variant="outline"    
>
Note   
        </Button>    
        <Button    
onClick={update}    
type="button"    
colorScheme="red"    
variant="outline"    
>
Update last note   
        </Button>    
        </Stack>    
<br/>               
        <HStack>    
        <CircularProgress value={59} size="100px" thickness="4px" />    
        <CircularProgress value={30} color="orange.400" thickness="12px" />    
        <CircularProgress isIndeterminate color="green.300" />    
        <CircularProgress value={40} color="green.400">    
        <CircularProgressLabel>40%</CircularProgressLabel>    
        </CircularProgress>    
        </HStack>    
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
        </Box>    
        </Box>    
);
}
export default FeedbackLayout5;              
