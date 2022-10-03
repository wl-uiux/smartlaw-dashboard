import {            
  Stack,           
  Flex,           
  Button,           
  Text,           
  VStack,           
  useBreakpointValue,           
 } from '@chakra-ui/react';            
       function Hero5() {      
        return (     
         <Flex    
w={'full'}    
h={'60vh'}    
backgroundImage={'url( https://bafybeidfytfu2sx2qpyfmwzyokf5hvnvdnrqvxja3bdtbtyc44plrgngue.ipfs.infura-ipfs.io/ )'  
 }
backgroundSize={'cover'}    
backgroundPosition={'center center'}>    
         <VStack    
w={'full'}    
justify={'center'}    
px={useBreakpointValue({ base: 4, md: 8 })}    
bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>    
         <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>    
<Text    
color={'white'}    
fontWeight={700}    
lineHeight={1.2}    
fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>    
LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.   
         </Text>    
         <Stack direction={'row'}>    
         <Button    
bg={'blue.400'}    
rounded={'full'}    
color={'white'}    
_hover={{ bg: 'blue.500' }}>    
Show more   
         </Button>    
         <Button    
bg={'whiteAlpha.300'}    
rounded={'full'}    
color={'white'}    
_hover={{ bg: 'whiteAlpha.500' }}>    
Show more   
         </Button>    
         </Stack>    
         </Stack>    
         </VStack>    
         </Flex>    
 );
 }
export default Hero5;              
