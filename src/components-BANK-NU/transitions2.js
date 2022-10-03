import React from "react";            
import {            
 useDisclosure,           
 Button,           
 Box,           
 Image,           
 Link,           
 Editable,           
 EditableInput,           
 EditablePreview,           
 CircularProgress,           
 CircularProgressLabel,           
 ScaleFade,           
 HStack,           
 Text,           
} from "@chakra-ui/react";            
      function Transitions2() {      
   const { isOpen, onToggle } = useDisclosure()         
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
Transitions2 Click to edit   
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
        <Button onClick={onToggle}> Click Me </Button>  
        <ScaleFade initialScale={0.9} in={isOpen}>    
        <Box    
p="40px"    
color="white"    
mt="4"    
bg="teal.500"    
rounded="md"    
shadow="md"    
>
  Fade          
        </Box>    
        </ScaleFade>    
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
export default Transitions2;              
