import React from "react";            
import {            
 Box,           
 Image,           
 Text,           
 Link,           
 Editable,           
 EditableInput,           
 EditablePreview,           
 CircularProgress,           
 CircularProgressLabel,           
 Progress,           
 Stack,           
 HStack,           
} from "@chakra-ui/react";            
      function ProfileLayout5() {      
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
ProfileLayout5 Click to edit   
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
        <HStack>    
        <CircularProgress value={0} color="purple.400">    
        <CircularProgressLabel>0%</CircularProgressLabel>    
        </CircularProgress>    
        <CircularProgress value={10} color="purple.400">    
        <CircularProgressLabel>10%</CircularProgressLabel>    
        </CircularProgress>    
        <CircularProgress value={20} color="purple.400">    
        <CircularProgressLabel>20%</CircularProgressLabel>    
        </CircularProgress>    
        <CircularProgress value={30} color="purple.400">    
        <CircularProgressLabel>30%</CircularProgressLabel>    
        </CircularProgress>    
        <CircularProgress value={40} color="purple.400">    
        <CircularProgressLabel>40%</CircularProgressLabel>    
        </CircularProgress>    
        <CircularProgress value={50} color="purple.400">    
        <CircularProgressLabel>50%</CircularProgressLabel>    
        </CircularProgress>    
        <CircularProgress value={60} color="purple.400">    
        <CircularProgressLabel>60%</CircularProgressLabel>    
        </CircularProgress>    
        <CircularProgress value={70} color="purple.400">    
        <CircularProgressLabel>70%</CircularProgressLabel>    
        </CircularProgress>    
        <CircularProgress value={80} color="purple.400">    
        <CircularProgressLabel>80%</CircularProgressLabel>    
        </CircularProgress>    
        <CircularProgress value={90} color="purple.400">    
        <CircularProgressLabel>90%</CircularProgressLabel>    
        </CircularProgress>    
        <CircularProgress value={100} color="purple.400">    
        <CircularProgressLabel>100%</CircularProgressLabel>    
        </CircularProgress>    
        <CircularProgress isIndeterminate color="purple.600" />    
        </HStack>    
<br/>               
        <Stack spacing={5}>    
        <Progress value={80} />    
        <Progress hasStripe value={64} />    
        <Progress size="xs" isIndeterminate colorScheme="pink" value={64} />    
        <Progress size="sm" colorScheme="purple" isIndeterminate />    
        <Progress size="md" colorScheme="blue" isIndeterminate />    
        </Stack>    
        <HStack>    
        <Progress hasStripe value={64} />    
        </HStack>    
        <HStack>    
        <Progress value={80} />    
        </HStack>    
        <HStack>    
        <Progress value={80} />    
        </HStack>    
        <HStack>    
        <Progress value={80} />    
        </HStack>    
        <HStack>    
        <Progress value={80} />    
        </HStack>    
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
        </Box>    
        </Box>    
);
}
export default ProfileLayout5;              
