import React from "react";            
import {            
 Box,           
 Image,           
 Text,           
//  Link,           
//  Editable,           
//  EditableInput,           
//  EditablePreview,           
//  Skeleton,           
//  SkeletonCircle,           
//  SkeletonText,           
 Progress,           
 Stack,           
} from "@chakra-ui/react";            
      function FeedbackLayout2() {      
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
        <Stack spacing={5}>    
        <Progress value={80} />    
        <Progress hasStripe value={64} />    
        <Progress colorScheme="green" size="sm" value={20} />    
        <Progress colorScheme="green" size="md" value={20} />    
        <Progress colorScheme="green" size="lg" value={20} />    
        <Progress colorScheme="green" height="32px" value={20} />    
        </Stack>    
<br/>                */}
<br/>               
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
        <Stack spacing={5}>    
        {/* <Progress value={20} size="xs" colorScheme="pink" />     */}
        <Progress size="xs" colorScheme="green" isIndeterminate />    
        <Progress size="xs" colorScheme="red" isIndeterminate />    
        <Progress size="xs" colorScheme="yellow" isIndeterminate />    
        <Progress size="xs" colorScheme="cyan" isIndeterminate />    
        <Progress size="xs" colorScheme="orange" isIndeterminate />    
        <Progress size="xs" colorScheme="blue" isIndeterminate />    
        <Progress size="xs" colorScheme="purple" isIndeterminate />    
        <Progress size="xs" colorScheme="pink" isIndeterminate />    
        </Stack>    
{/* <Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
<br/>               
        <Skeleton startColor="pink.500" endColor="white.500" height="20px" />    
        <Skeleton startColor="blue.500" endColor="white.500" height="20px" />    
        <Skeleton startColor="cyan.500" endColor="white.500" height="20px" />    
        <Skeleton startColor="purple.500" endColor="white.500" height="20px" />    
        <Skeleton startColor="pink.500" endColor="white.500" height="20px" />    
        <Skeleton startColor="yellow.500" endColor="white.500" height="20px" />    
        <Skeleton startColor="red.500" endColor="white.500" height="20px" />    
        <Skeleton startColor="green.500" endColor="white.500" height="20px" />    
<br/>               
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
        <Stack spacing={5}>    
        <Skeleton height="20px" />    
        <Skeleton height="20px" />    
        <Skeleton height="20px" />    
        </Stack>    
<br/>               
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
        <Skeleton>    
        <div>contents wrapped</div>    
        <div>won't be visible</div>    
        </Skeleton>    
<br/>               
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
        <Box padding="6" boxShadow="lg" bg="white">    
        <SkeletonCircle size="10" />    
        <SkeletonText mt="4" noOfLines={4} spacing="4" />    
        </Box>    
<br/>               
        <Stack spacing={5}></Stack>     */}
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
        </Box>    
        </Box>    
);
}
export default FeedbackLayout2;              
