import React from "react";            
import {            
 Box,           
 Image,           
 Text,           
 Link,           
 Editable,           
 EditableInput,           
 EditablePreview,           
 Popover,           
 PopoverTrigger,           
 PopoverContent,           
 PopoverHeader,           
 PopoverBody,           
 PopoverArrow,           
 PopoverCloseButton,           
 Button,           
} from "@chakra-ui/react";            
      function Popover1() {      
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
Popover1 Click to edit   
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
        <Popover>    
        <PopoverTrigger>    
        <Button colorScheme="blue"> Trigger </Button>  
        </PopoverTrigger>    
        <PopoverContent color="blue">    
        <PopoverArrow />    
        <PopoverCloseButton />    
        <PopoverHeader color="blue"> Confirmation! </PopoverHeader>  
        <PopoverBody color="blue">    
Are you sure you want to proceed?   
        </PopoverBody>    
        </PopoverContent>    
        </Popover>    
<br/>               
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
        </Box>    
        </Box>    
);
}
export default Popover1;              
