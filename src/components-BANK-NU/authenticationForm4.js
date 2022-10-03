import {            
  Center,
  Button,           
  FormControl,           
  Flex,           
  Heading,           
  Input,   
  FormLabel,        
  Stack,     
  Box,
  HStack,      
  Text,           
  useColorModeValue,           
 } from '@chakra-ui/react';            
       function AuthenticationForm4 (): JSX.Element {      
        return (     

<Box>
        <Center>
         <Flex    
minH={'20vh'}    
maxH={'25vh'}
align={'center'}    
justify={'center'}    
// bg={useColorModeValue('gray.800', 'gray.800')}
>    

<HStack ml="5" mr="5" >


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
Forgot your salt phrase?   
         </Heading>    
<Text    
fontSize={{ base: 'sm', sm: 'md' }}    
color={useColorModeValue('gray.700', 'gray.400')}>    
You&apos;ll get an email with a reset link   
         </Text>    
         <FormControl id="email">    
         <Input    
placeholder=" Enter an email address. "  
_placeholder={{ color: 'gray.500' }}    
type="email"    
 />
         </FormControl>    
         <Stack spacing={6}>    
         <Button    
bg={'blue.400'}    
color={'white'}    
_hover={{    
      bg: 'blue.500',       
 }}>
Request Reset   
         </Button>    
         </Stack>    
         </Stack>    



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
         <FormLabel color="blue" > 0x Address </FormLabel>  
         <Input    
placeholder=" Enter an email address. "  
_placeholder={{ color: 'gray.500' }}    
type="email"    
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



         </HStack>
         
         </Flex>    
         </Center>
         </Box>
 );
 }
export default AuthenticationForm4;              
