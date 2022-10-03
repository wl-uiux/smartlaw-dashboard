import {            
  Button,           
  Flex,           
  Heading,           
  Image,           
  Stack,           
  Text,           
  useBreakpointValue,           
 } from '@chakra-ui/react';            
       function Hero4() {      
        return (     
         <Stack minH={'30vh'} direction={{ base: 'column', md: 'row' }}>    
         <Flex p={8} flex={1} align={'center'} justify={'center'}>    
         <Stack spacing={6} w={'full'} maxW={'lg'}>    
         <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>    
<Text    
as={'span'}    
position={'relative'}    
_after={{    
      content: "''",       
      width: 'full',       
      height: useBreakpointValue({ base: '20%', md: '30%' }),       
      position: 'absolute',       
      bottom: 1,       
      left: 0,       
      bg: 'blue.400',       
      zIndex: -1,       
 }}>
Web3 Gig Economy   
         </Text>    
<br/>               
<Text color={'blue.400'} as={'span'}>    
Decentralized Developer Projects   
         </Text>{' '}    
         </Heading>    
<Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>    
ProjectBoard LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.   
LexDAO for freelancers, gig-workers, agencies, and moonlighters.   
         </Text>    
         <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>    
         <Button    
rounded={'full'}    
bg={'blue.400'}    
color={'white'}    
_hover={{    
      bg: 'blue.500',       
 }}>
Create Project   
         </Button>    
         <Button 
         colorScheme="purple"
         rounded={'full'}> How It Works </Button>  
         </Stack>    
         </Stack>    
         </Flex>    
         <Flex flex={1}>    
<Image    
alt={' Login Image '}  
objectFit={'cover'}    
// src={' https://bafkreihf2qyfow2phbzdie5btp32dtejg37cprtgc4i72iu3t2o332r7im.ipfs.infura-ipfs.io/'  
src={' https://bafkreigzphqmjfzncsgdcs5xogr5zxnbatza4qhhjibtlnyiaaute2xgni.ipfs.infura-ipfs.io/'  

}
 />
         </Flex>    
         </Stack>    
 );
 }
export default Hero4;              
