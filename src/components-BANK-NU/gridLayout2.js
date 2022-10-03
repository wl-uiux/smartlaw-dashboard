import React from "react";            
import {            
 Box,           
 Badge,           
 Image,           
 Grid,           
 GridItem,           
} from "@chakra-ui/react";            
import { ImStarFull } from "react-icons/im";            
      function GridLayout2() {      
    const property1 = {        
imageUrl:" https://bafybeihv7easq4dgbqdc5rgpzh5vnopfvmbitqxqeipkh7rdiw5pgw2xjq.ipfs.infura-ipfs.io/ ",  
imageAlt: " Player Profile ",  
     skills: 3,       
     guilds: 2,       
     title: "Each player receives a MyMeta profile and ...",       
     formattedPrice: "    100 ",  
     reviewCount: 34,       
     rating: 4,       
};
    const property2 = {        
imageUrl:" https://bafybeignubrsxqj4tzdgz5mqxf545r2fk77e5qhbgk67aacqys2dsufdsq.ipfs.infura-ipfs.io ",  
imageAlt: " Player Profile ",  
     skills: 3,       
     guilds: 2,       
     title: "Each player receives a MyMeta profile and ...",       
     formattedPrice: "    20 MATIC ",  
     reviewCount: 34,       
     rating: 4,       
};
    const property3 = {        
imageUrl:" https://bafybeignubrsxqj4tzdgz5mqxf545r2fk77e5qhbgk67aacqys2dsufdsq.ipfs.infura-ipfs.io ",  
imageAlt: " Player Profile ",  
     skills: 3,       
     guilds: 2,       
     title: "Each player receives a MyMeta profile and ...",       
     formattedPrice: "    30 MATIC ",  
     reviewCount: 34,       
     rating: 4,       
};
    const property4 = {        
imageUrl:" https://bafybeignubrsxqj4tzdgz5mqxf545r2fk77e5qhbgk67aacqys2dsufdsq.ipfs.infura-ipfs.io ",  
imageAlt: " Player Profile ",  
     skills: 3,       
     guilds: 2,       
     title: "Each player receives a MyMeta profile and ...",       
     formattedPrice: "    40 MATIC ",  
     reviewCount: 34,       
     rating: 4,       
};
       return (     
        <Grid    
h="1200px"    
templateRows="repeat(2, 1fr)"    
templateColumns="repeat(5, 1fr)"    
gap={4}    
>
        <GridItem    
rowSpan={2}    
colSpan={1}    
h="100%"    
w="100%"    
bg="gray.700"    
maxW="sm"    
borderWidth="1px"    
borderRadius="lg"    
ml="2"    
mr="2"    
overflow="hidden"    
>
<Image src={property1.imageUrl} alt={property1.imageAlt} />    
        <Box p="6">    
        <Box d="flex" alignItems="baseline"></Box>    
        </Box>    
        <Box    
as="button"    
fontSize="sm"    
ml="2"    
mb="2"    
borderRadius="md"    
bg="orangered"    
color="white"    
px={6}    
h={8}    
>
Contact LexDAO Inkeeper   
        </Box>    
        </GridItem>    
        <GridItem    
colSpan={2}    
h="100%"    
w="100%"    
bg="gray.700"    
maxW="sm"    
borderWidth="1px"    
borderRadius="lg"    
ml="2"    
mr="2"    
overflow="hidden"    
>
<Image src={property2.imageUrl} alt={property2.imageAlt} />    
        <Box p="6">    
        <Box d="flex" alignItems="baseline">    
        <Badge borderRadius="full" px="2" colorScheme="orange">    
New Look   
        </Badge>    
        <Box    
color="yellow.500"    
fontWeight="semibold"    
letterSpacing="wide"    
fontSize="xs"    
textTransform="uppercase"    
ml="2"    
>
{property2.skills} skills &bull; {property2.guilds} guilds guilds   
        </Box>    
        </Box>    
        <Box    
mt="1"    
fontWeight="semibold"    
as="h4"    
lineHeight="tight"    
isTruncated    
>
{property2.title}    
        </Box>    
        <Box color="yellow.500">    
{property2.formattedPrice}    
        <Box as="span" color="white.600" fontSize="sm">    
per service   
        </Box>    
        </Box>    
        <Box d="flex" mt="2" alignItems="center">    
{Array(5)    
.fill("")    
.map((_, i) => (    
< ImStarFull   
key={i}    
color={i < property2.rating ? "teal.500" : "gray.300"}    
/>
))}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">    
{property2.reviewCount}  reviews   
        </Box>    
        </Box>    
        </Box>    
        <Box    
as="button"    
fontSize="xs"    
ml="2"    
mb="2"    
borderRadius="md"    
bg="yellowgreen"    
color="black"    
px={4}    
h={6}    
>
Contact Player   
        </Box>    
        </GridItem>    
        <GridItem    
colSpan={2}    
h="100%"    
w="100%"    
bg="gray.700"    
maxW="sm"    
borderWidth="1px"    
borderRadius="lg"    
ml="2"    
mr="2"    
overflow="hidden"    
>
<Image src={property3.imageUrl} alt={property3.imageAlt} />    
        <Box p="6">    
        <Box d="flex" alignItems="baseline">    
        <Badge borderRadius="full" px="2" colorScheme="orange">    
New Look   
        </Badge>    
        <Box    
color="yellow.500"    
fontWeight="semibold"    
letterSpacing="wide"    
fontSize="xs"    
textTransform="uppercase"    
ml="2"    
>
{property3.skills} skills &bull; {property3.guilds} guilds   
        </Box>    
        </Box>    
        <Box    
mt="1"    
fontWeight="semibold"    
as="h4"    
lineHeight="tight"    
isTruncated    
>
{property3.title}    
        </Box>    
        <Box color="yellow.500">    
{property3.formattedPrice}    
        <Box as="span" color="white.600" fontSize="sm">    
per service   
        </Box>    
        </Box>    
        <Box d="flex" mt="2" alignItems="center">    
{Array(5)    
.fill("")    
.map((_, i) => (    
< ImStarFull   
key={i}    
color={i < property3.rating ? "teal.500" : "gray.300"}    
/>
))}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">    
{property3.reviewCount}  reviews   
        </Box>    
        </Box>    
        </Box>    
        <Box    
as="button"    
fontSize="xs"    
ml="2"    
mb="2"    
borderRadius="md"    
bg="yellowgreen"    
color="black"    
px={4}    
h={6}    
>
Contact Player   
        </Box>    
        </GridItem>    
        <GridItem    
colSpan={2}    
h="100%"    
w="100%"    
bg="gray.700"    
maxW="sm"    
borderWidth="1px"    
borderRadius="lg"    
ml="2"    
mr="2"    
overflow="hidden"    
>
<Image src={property3.imageUrl} alt={property3.imageAlt} />    
        <Box p="6">    
        <Box d="flex" alignItems="baseline">    
        <Badge borderRadius="full" px="2" colorScheme="orange">    
New Look   
        </Badge>    
        <Box    
color="yellow.500"    
fontWeight="semibold"    
letterSpacing="wide"    
fontSize="xs"    
textTransform="uppercase"    
ml="2"    
>
{property3.skills} skills &bull; {property3.guilds} guilds   
        </Box>    
        </Box>    
        <Box    
mt="1"    
fontWeight="semibold"    
as="h4"    
lineHeight="tight"    
isTruncated    
>
{property3.title}    
        </Box>    
        <Box color="yellow.500">    
{property3.formattedPrice}    
        <Box as="span" color="white.600" fontSize="sm">    
per service   
        </Box>    
        </Box>    
        <Box d="flex" mt="2" alignItems="center">    
{Array(5)    
.fill("")    
.map((_, i) => (    
< ImStarFull   
key={i}    
color={i < property3.rating ? "teal.500" : "gray.300"}    
/>
))}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">    
{property3.reviewCount}  reviews   
        </Box>    
        </Box>    
        </Box>    
        <Box    
as="button"    
fontSize="xs"    
ml="2"    
mb="2"    
borderRadius="md"    
bg="yellowgreen"    
color="black"    
px={4}    
h={6}    
>
Contact Player   
        </Box>    
        </GridItem>    
        <GridItem    
colSpan={2}    
h="100%"    
w="100%"    
bg="gray.700"    
maxW="sm"    
borderWidth="1px"    
borderRadius="lg"    
ml="2"    
mr="2"    
overflow="hidden"    
>
<Image src={property4.imageUrl} alt={property4.imageAlt} />    
        <Box p="6">    
        <Box d="flex" alignItems="baseline">    
        <Badge borderRadius="full" px="2" colorScheme="orange">    
New Look   
        </Badge>    
        <Box    
color="yellow.500"    
fontWeight="semibold"    
letterSpacing="wide"    
fontSize="xs"    
textTransform="uppercase"    
ml="2"    
>
{property4.skills} skills &bull; {property4.guilds} guilds   
        </Box>    
        </Box>    
        <Box    
mt="1"    
fontWeight="semibold"    
as="h4"    
lineHeight="tight"    
isTruncated    
>
{property4.title}    
        </Box>    
        <Box color="yellow.500">    
{property4.formattedPrice}    
        <Box as="span" color="white.600" fontSize="sm">    
per service   
        </Box>    
        </Box>    
        <Box d="flex" mt="2" alignItems="center">    
{Array(5)    
.fill("")    
.map((_, i) => (    
< ImStarFull   
key={i}    
color={i < property4.rating ? "teal.500" : "gray.300"}    
/>
))}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">    
{property4.reviewCount} reviews   
        </Box>    
        </Box>    
        </Box>    
        <Box    
as="button"    
fontSize="xs"    
ml="2"    
mb="2"    
borderRadius="md"    
bg="yellowgreen"    
color="black"    
px={4}    
h={6}    
>
Contact Player   
        </Box>    
        </GridItem>    
        <GridItem colSpan={4} mr="2" bg="tomato" />    
        </Grid>    
);
}
export default GridLayout2;              
