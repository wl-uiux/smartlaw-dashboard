import React from "react";            
import {            
 Box,           
 Image,           
 Text,           
//  Link,           
//  Editable,           
//  EditableInput,           
//  EditablePreview,           
//  CircularProgress,           
//  CircularProgressLabel,           
 Spinner,           
 Stack,           
//  HStack,           
} from "@chakra-ui/react";            
      function FeedbackLayout3() {      
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
{/* <Text    
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
        </Text>     */}
<br/>               
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
<br/>               
        <Stack direction="row" spacing={4}>    
        <Spinner size="xs" color="red.500" />    
        <Spinner size="xs" color="pink.500" />    
        <Spinner size="xs" color="blue.500" />    
        <Spinner size="xs" color="purple.500" />    
        <Spinner size="xs" />    
        <Spinner size="sm" />    
        <Spinner size="md" />    
        <Spinner size="lg" />    
        <Spinner size="xl" />    
        </Stack>    
<br/>               
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
        <Spinner    
thickness="4px"    
speed="0.65s"    
emptyColor="gray.200"    
color="green.500"    
size="xl"    
/>
        <Spinner    
thickness="4px"    
speed="0.65s"    
emptyColor="gray.200"    
color="red.500"    
size="xl"    
/>
        <Spinner    
thickness="4px"    
speed="0.65s"    
emptyColor="gray.200"    
color="yellow.500"    
size="xl"    
/>
        <Spinner    
thickness="4px"    
speed="0.65s"    
emptyColor="gray.200"    
color="cyan.500"    
size="xl"    
/>
        <Spinner    
thickness="4px"    
speed="0.65s"    
emptyColor="gray.200"    
color="orange.500"    
size="xl"    
/>
        <Spinner    
thickness="4px"    
speed="0.65s"    
emptyColor="gray.200"    
color="blue.500"    
size="xl"    
/>
        <Spinner    
thickness="4px"    
speed="0.65s"    
emptyColor="gray.200"    
color="purple.500"    
size="xl"    
/>
        <Spinner    
thickness="4px"    
speed="0.65s"    
emptyColor="gray.200"    
color="pink.500"    
size="xl"    
/>
<br/>               
<br/>               
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
<br/>               
        </Box>    
        </Box>    
);
}
export default FeedbackLayout3;              
