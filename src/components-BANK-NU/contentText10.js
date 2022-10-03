import React from "react";            
import {            
 Box,           
 Image,           
 Text,           
 Link,           
 Center,           
 Square,           
 Circle,           
 HStack,           
} from "@chakra-ui/react";            
import { PhoneIcon } from "@chakra-ui/icons";            
      function ContentText10() {      
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
color="teal.600"    
>
LexDAO   
        </Text>    
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
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
        <Center bg="gray.800" h="600px" color="white">    
<Image    
borderRadius="lg"    
width={{ md: 400 }}    
src=" https:bafybeic3oyoi3jglbgaoskzq4fddbbouj2vaz32aaiiy2na7s74lyj4x4u.ipfs.infura-ipfs.io "  
alt=" LexDAO "  
/>
        </Center>    
        </Box>    
        <HStack>    
        <Center ml="2" w="40px" h="40px" bg="tomato" color="white">    
        <PhoneIcon />    
        </Center>    
        <Center w="40px" h="40px" bg="tomato" color="white">    
        <Box as="span" fontWeight="bold" fontSize="lg">    
1   
        </Box>    
        </Center>    
        </HStack>    
        <HStack>    
        <Circle ml="2" size="40px" bg="tomato" color="white">    
        <PhoneIcon />    
        </Circle>    
        <Square size="40px" bg="purple.700" color="white">    
        <PhoneIcon />    
        </Square>    
        </HStack>    
        </Box>    
);
}
export default ContentText10;              
