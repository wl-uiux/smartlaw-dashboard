import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';            
function Testimonial2() {      
 return (     
  <Stack    
bg={useColorModeValue('gray.800', 'gray.800')}    
py={16}    
px={8}    
spacing={{ base: 8, md: 10 }}    
align={'center'}    
direction={'column'}>    
<Text  
color="gray.300"  
fontSize={{ base: 'xl', md: '2xl' }}    
textAlign={'center'}    
maxW={'3xl'}>    
LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.   
  </Text>    
  <Box textAlign={'center'}>    
  <Avatar    
src={' https://bafybeiadlckn4fdpst6sgl72yhil7o2v5nvb7ao6ystpovnqk6ictughky.ipfs.infura-ipfs.io/ '  
}
alt={' LexDAO '}  
mb={2}    
/>
<Text color="gray.200" fontWeight={600}> Scott Stevenson </Text>  
<Text fontSize={'sm'} color={useColorModeValue('gray.200', 'gray.800')}>    
Managing Member   
  </Text>    
  </Box>    
  </Stack>    
);
}
export default Testimonial2;              
