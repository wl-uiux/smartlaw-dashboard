import React from "react";            
import {            
 AspectRatio,           
 Box,     
 Center,      
//  Image,           
//  Heading,           
//  chakra,           
 HStack,           
} from "@chakra-ui/react";            
import Iframe from "react-iframe";            
      function ContentText5() {      
       return (     
        <Box>    
        <HStack>   
                <Center> 
        {/* <chakra.h1 fontSize="lg"> Button Heading </chakra.h1>    
        <chakra.button    
px="6"    
py="2"    
bg="orange.600"    
rounded="md"    
_hover={{ bg: "orange.300" }}    
>
Click for Content   
        </chakra.button>    
<br/>               
<br/>               
        <Box sx={{ "--my-color": "#53c8c4" }}>    
        <Heading color="var(--my-color)" size="lg">    
Welcome to LexDAO   
        </Heading>    
        </Box>    
<br/>               
<br/>               
        <Box borderWidth={2} borderColor="purple.500" p={5} className="my-box">    
        <Heading size="lg" color="blue.500">    
From one Color to {}   
        <Box    
as="span"    
color="red.500"    
sx={{    
".my-box:hover &": {    
     color: "green.500",       
},
}}
>
Another   
        </Box>    
        </Heading>    
        </Box>    
<br/>               
<br/>               
        <AspectRatio maxW="800px" ratio={1.5}>    
<Image    
src=" https://bafybeibopr3dkfuddq5mhznnzktqymrz5ghzt4rc7jxxpgl2dtgerseqyq.ipfs.infura-ipfs.io "  
alt=" LexDAO "  
objectFit="cover"    
/>
        </AspectRatio>     */}
<br/>               
<br/>               
        <Iframe    
url="http://www.youtube.com/embed/GNNYUMf3xKc"    
width="850px"    
height="450px"    
id="myId"    
className="myClassname"    
display="initial"    
position="relative"    
/>
<br/>               
<br/>               
        <AspectRatio maxW="2400px" ratio={7 / 3}>    
        <iframe    
title=" LexDAO "  
src=" http://www.youtube.com/embed/GNNYUMf3xKc "  
allowFullScreen   
/>
        </AspectRatio>    
<br/>               
<br/>               
        <AspectRatio ratio={16 / 9}>    
        <iframe    
title=" OpusOneMap "  
src=" https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=7900%20St%20Helena%20Hwy,%20Oakville,%20CA%2094562+(Opus%20One,%20Oakville)&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed "  
alt=" LexDAO "  
/>
        </AspectRatio>  
        </Center>  
        </HStack>    
        </Box>    
);
}
export default ContentText5;              
