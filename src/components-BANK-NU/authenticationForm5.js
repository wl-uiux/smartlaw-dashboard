import {            
  Button,           
  Flex,           
  FormControl,           
  FormLabel,           
  Heading,           
  Input,           
  Stack,           
  useColorModeValue,           
 } from '@chakra-ui/react';            
       function AuthenticationForm5 (): JSX.Element {      
        return (     
         <Flex    
minH={'20vh'}    
align={'center'}    
justify={'center'}    
// bg={useColorModeValue('gray.800', 'gray.800')}
>    
         <Stack    
spacing={4}    
w={'full'}    
maxW={'md'}    
bg={useColorModeValue('white', 'gray.700')}    
rounded={'xl'}    
boxShadow={'lg'}    
p={6}    
my={12}>    
         <Heading color="gray.800" lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>    
Enter new salt phrase   
         </Heading>    
         <FormControl id="email" isRequired>    
         <FormLabel color="blue" > 0x address </FormLabel>  
         <Input    
placeholder=" Enter a salt phrase. "  
_placeholder={{ color: 'gray.500' }}    
type="text"    
 />
         </FormControl>    
         <FormControl id="password" isRequired>    
         <FormLabel color="blue" > Salt phrase </FormLabel>  
         <Input type="password" />    
         </FormControl>    
         <Stack spacing={6}>    
         <Button    
bg={'blue.400'}    
color={'white'}    
_hover={{    
      bg: 'blue.500',       
 }}>
Submit   
         </Button>    
         </Stack>    
         </Stack>    
         </Flex>    
 );
 }
export default AuthenticationForm5;              
