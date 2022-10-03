import {            
  Flex,           
  Container,           
  Heading,           
  Stack,           
  Text,           
  Button,    
  Image,       

 } from '@chakra-ui/react';            
       function Hero2() {      
        return (     
         <Container maxW={'5xl'}>    
         <Stack    
textAlign={'center'}    
align={'center'}    
spacing={{ base: 8, md: 10 }}    
py={{ base: 20, md: 28 }}>    
         <Heading    
fontWeight={600}    
fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}    
lineHeight={'110%'}>    
Live daily meetups make{' '}   
<Text as={'span'} color={'orange.400'}>    
LexDAO easy to play.   
         </Text>    
         </Heading>    
<Text color={'gray.500'} maxW={'3xl'}>    
LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.   
LexDAO daily.   
         </Text>    
         
                  <Image    
         alt={' LexDAO '}  
         fit={'cover'}    
         align={'center'}    
         w={'100%'}    
         h={'300px'}    
         src={' https://bafybeieevv3xe4zrsz45th4nztmarmlc3ox2zrgc74gbdm7c6bnhwynqiy.ipfs.infura-ipfs.io/'  
          }
          />
         <Stack spacing={6} direction={'row'}>    
         <Button    
rounded={'full'}    
px={6}    
colorScheme={'orange'}    
bg={'orange.400'}    
_hover={{ bg: 'orange.500' }}>    
Get Started with LexDAO   
         </Button>    
         <Button colorScheme="cyan" color="black" rounded={'full'} px={6}>    
Learn more   
         </Button>    
         </Stack>    
         <Flex w={'full'}>    
         </Flex>    
         </Stack>    

         </Container>    
 );
 }

export default Hero2;              
