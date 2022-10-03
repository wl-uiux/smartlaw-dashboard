import React from "react";            
import {            
 Box,           
 Image,           
 Link,           
 Editable,           
 EditableInput,           
 EditablePreview,           
//  CircularProgress,           
//  CircularProgressLabel,           
//  Stack,           
 HStack,           
 Text,           
} from "@chakra-ui/react";            
      function Images1() {      
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
Drawer5 Click the text to edit   
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
        {/* <Box boxSize="fit" align="right">    
<Image src=" https://bafybeididcw6gmg2ohgcu3pj4slvpkjx7zl3qqugmbbqp5bp6vqvgo3x4u.ipfs.infura-ipfs.io/"  alt=" Scott Stevenson " />
        </Box>    
        <Box boxSize="fit">    
<Image src=" https://bafybeididcw6gmg2ohgcu3pj4slvpkjx7zl3qqugmbbqp5bp6vqvgo3x4u.ipfs.infura-ipfs.io/"  alt=" Scott Stevenson " />
        </Box>    
        <Box boxSize="sm">    
<Image src=" https://bafybeididcw6gmg2ohgcu3pj4slvpkjx7zl3qqugmbbqp5bp6vqvgo3x4u.ipfs.infura-ipfs.io/"  alt=" Scott Stevenson " />
        </Box>    
        <Box boxSize="xs">    
<Image src=" https://bafybeididcw6gmg2ohgcu3pj4slvpkjx7zl3qqugmbbqp5bp6vqvgo3x4u.ipfs.infura-ipfs.io/" alt=" Scott Stevenson " />
        </Box>    
<br/>               
<br/>               
<br/>                */}
        <Box>    
        <HStack>    
<Image    
borderRadius="full"    
boxSize="150px"    
src=" https://bafybeiadlckn4fdpst6sgl72yhil7o2v5nvb7ao6ystpovnqk6ictughky.ipfs.infura-ipfs.io/ "  
alt=" LexDAO "  
/>
<Image    
borderRadius="full"    
boxSize="150px"    
src=" https://bafybeididcw6gmg2ohgcu3pj4slvpkjx7zl3qqugmbbqp5bp6vqvgo3x4u.ipfs.infura-ipfs.io/ "  
alt=" LexDAO "  
/>
<Image    
borderRadius="full"    
boxSize="150px"    
src=" https://bafybeiadlckn4fdpst6sgl72yhil7o2v5nvb7ao6ystpovnqk6ictughky.ipfs.infura-ipfs.io/ "  
alt=" LexDAO "  
/>
<Image    
borderRadius="full"    
boxSize="150px"    
src=" https://bafybeididcw6gmg2ohgcu3pj4slvpkjx7zl3qqugmbbqp5bp6vqvgo3x4u.ipfs.infura-ipfs.io/ "  
alt=" LexDAO "  
/>
<Image    
borderRadius="full"    
boxSize="150px"    
src=" https://bafybeiadlckn4fdpst6sgl72yhil7o2v5nvb7ao6ystpovnqk6ictughky.ipfs.infura-ipfs.io/ "  
alt=" LexDAO "  
/>
        </HStack>    
        </Box>    
<br/>               
        {/* <Stack direction="row">    
<Image    
boxSize="100px"    
objectFit="cover"    
src=" https://bafybeiguyjy4qwabtnovknmynr53fxhqfdfao5gj524bllxfcxiaa3pmz4.ipfs.infura-ipfs.io/ "  
alt=" LexDAO "  
/>
<Image    
boxSize="150px"    
objectFit="cover"    
src=" https://bafybeiguyjy4qwabtnovknmynr53fxhqfdfao5gj524bllxfcxiaa3pmz4.ipfs.infura-ipfs.io/ "  
alt=" LexDAO "  
/>
<Image boxSize="200px" src=" https://bafybeiguyjy4qwabtnovknmynr53fxhqfdfao5gj524bllxfcxiaa3pmz4.ipfs.infura-ipfs.io/ " alt=" Scott Stevenson " />
        </Stack>     */}
<br/>               
        <Box>    
        {/* <HStack>    
<Image src="gibbresh.png" fallbackSrc="https://via.placeholder.com/150" />    
<Image src="gibbresh.png" fallbackSrc="https://via.placeholder.com/150" />    
<Image src="gibbresh.png" fallbackSrc="https://via.placeholder.com/150" />    
<Image src="gibbresh.png" fallbackSrc="https://via.placeholder.com/150" />    
<Image src="gibbresh.png" fallbackSrc="https://via.placeholder.com/150" />    
        </HStack>     */}
        </Box>    
        {/* <HStack>    
        <CircularProgress value={59} size="100px" thickness="4px" />    
        <CircularProgress value={30} color="orange.400" thickness="12px" />    
        <CircularProgress isIndeterminate color="green.300" />    
        <CircularProgress value={40} color="green.400">    
        <CircularProgressLabel>40%</CircularProgressLabel>    
        </CircularProgress>    
        </HStack>     */}
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are a few ways ways LexDAO participants are found.   
        </Text>    
        </Box>    
        </Box>    
);
}
export default Images1;              
