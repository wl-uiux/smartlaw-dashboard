import React from "react";            
import {            
 Collapse,           
 Button,           
 Box,           
 Image,           
 Link,           
 Editable,           
 EditableInput,           
 EditablePreview,           
 CircularProgress,           
 CircularProgressLabel,           
 HStack,           
 Text,           
} from "@chakra-ui/react";            
      function Transitions5() {      
   const [show, setShow] = React.useState(false)         
   const handleToggle = () => setShow(!show)         
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
color="yellow"    
>
Transitions5 Click to edit   
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
        <Box>    
        <HStack>    
        <Collapse startingHeight={20} in={show}>    
LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.   
        </Collapse>    
        <Button size="sm" onClick={handleToggle} mt="1rem">    
Show {show ? "Less" : "More"}   
        </Button>    
        </HStack>    
        </Box>    
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
export default Transitions5;              
