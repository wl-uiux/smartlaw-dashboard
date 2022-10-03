import React from "react";            
import {            
 Box,           
 Image,           
 Text,           
 Link,           
 Editable,           
 EditableInput,           
 EditablePreview,           
 Heading,           
 Stack,           
 Button,           
} from "@chakra-ui/react";            
      function ProfileLayout3() {      
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
<br/>               
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
        <Box maxW="32rem">    
        <Heading mb={4} color="cyan">    
Payments Center   
        </Heading>    
<Text fontSize="xl">    
MetaFP helps businesses process payments to their developer communities.   
        </Text>    
        <Button size="lg" colorScheme="green" mt="24px">    
Create a free account   
        </Button>    
        </Box>    
<br/>               
        <Heading size="sm" fontSize="30px" color="yellow">    
Heading override   
        </Heading>    
<br/>               
        <Stack spacing={6}>    
        <Heading as="h1" size="4xl" isTruncated>    
LexDAO Four   
        </Heading>    
        <Heading as="h2" size="3xl" isTruncated>    
LexDAO Three    
        </Heading>    
        <Heading as="h2" size="2xl">    
LexDAO Two   
        </Heading>    
        <Heading as="h2" size="xl">    
LexDAO XL   
        </Heading>    
        <Heading as="h3" size="lg">    
LexDAO Large   
        </Heading>    
        <Heading as="h4" size="md">    
LexDAO Medium   
        </Heading>    
        <Heading as="h5" size="sm">    
LexDAO Small   
        </Heading>    
        <Heading as="h6" size="xs">    
LexDAO XS   
        </Heading>    
        </Stack>    
<br/>               
        <Heading isTruncated>    
LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.   
LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.   
LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.   
        </Heading>    
<br/>               
<hr/>               
<br/>               
        <Stack spacing={3}>    
<Text fontSize="6xl"> LexDAO Six </Text>  
<Text fontSize="5xl"> LexDAO Five </Text>  
<Text fontSize="4xl"> LexDAO Four </Text>  
<Text fontSize="3xl"> LexDAO Three </Text>  
<Text fontSize="2xl"> LexDAO Two </Text>  
<Text fontSize="xl"> LexDAO Boost </Text>  
<Text fontSize="lg"> LexDAO Grand </Text>  
<Text fontSize="md"> LexDAO Franklin </Text>  
<Text fontSize="sm"> LexDAO Finney </Text>  
<Text fontSize="xs"> LexDAO Starter </Text>  
        </Stack>    
<br/>               
        <box>    
<Text color="gray.500" isTruncated>    
"LexDAO 15 provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.",   
        </Text>    
        </box>    
<br/>               
<Text color="yellow" noOfLines={2}>    
"LexDAO 8 provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems. Here are a few ways LexDAO participants are found.   
        </Text>    
<br/>               
<Text color="cyan" noOfLines={[1, 2, 3]}>    
"LexDAO 12 provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.   
Here are a few ways LexDAO participants are found.   
        </Text>    
<br/>               
<Text fontSize="30px" color="lime">    
Web2Skills Profile Three   
        </Text>    
<Text fontSize="30px" color="cornflowerblue">    
Web2Skills Profile Three   
        </Text>    
<br/>               
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
<br/>               
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
<br/>               
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
<br/>               
        <Box>    
<Text as="i"> Italic </Text>  
<br/>               
<Text as="u"> Three LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems. </Text>  
<br/>               
<Text as="abbr"> I18N </Text>  
<br/>               
<Text as="cite"> SmartlLaw curations. </Text>  
<br/>               
<Text as="del"> Deleted </Text>  
<br/>               
<Text as="em"> Emphasis </Text>  
<br/>               
<Text as="ins"> Inserted </Text>  
<br/>               
<Text as="kbd"> Ctrl + C </Text>  
<br/>               
<Text as="mark"> Highlighted </Text>  
<br/>               
<Text as="s"> Strikethrough </Text>  
<br/>               
<Text as="samp"> Sample </Text>  
<br/>               
<Text as="sub"> Three LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems. </Text>  
<br/>               
<Text as="sup"> Three LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems. </Text>  
        </Box>    
<br/>               
<br/>               
<Text mt={2} color="cornflowerblue">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
        </Box>    
        </Box>    
);
}
export default ProfileLayout3;              
