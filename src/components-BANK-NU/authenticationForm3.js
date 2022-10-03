import {            
  Button,           
  Checkbox,           
  Flex,           
  FormControl,           
  FormLabel,           
  Heading,           
  Input,           
  Link,        
//   Text,   
  Stack,           
  Image,           
 } from "@chakra-ui/react";            
       function AuthenticationForm3() {      
        return (     
         <Stack minH={"20vh"} direction={{ base: "column", md: "row" }}>    
         <Flex p={8} flex={1} align={"center"} justify={"center"}>    
         <Stack spacing={4} w={"full"} maxW={"md"}>    
         <Heading color="yellow" fontSize={"2xl"}> Sign in to your 0x account </Heading>  
         <FormControl id="email">    
         <FormLabel> 0x Address  </FormLabel>  
         <Input type="text" />    
         </FormControl>    
         <FormControl id="password">    
         <FormLabel> Salt phrase</FormLabel>  
         <Input type="password" />    
         </FormControl>    
         <Stack spacing={6}>    
         <Stack    
direction={{ base: "column", sm: "row" }}    
align={"start"}    
justify={"space-between"}    
 >
         <Checkbox>Create a email address and subdomain for this 0x address.</Checkbox>    
<Link color={"yellow"}> Forgot salt? </Link>  
         </Stack>    
         <Button colorScheme={"blue"} variant={"solid"}>    
Sign In   
         </Button>    
         </Stack>    
         </Stack>    
         </Flex>    
         <Flex flex={1}>    
<Image    
alt={" Login Image "}  
objectFit={"cover"}    
src={" https://bafybeia5uao63ppanvkyj7uxnwhmuxazrhnnrmzanblxfjlxkbozi3z57e.ipfs.infura-ipfs.io/ "  
 }
 />
         </Flex>    
         </Stack>    
 );
 }
export default AuthenticationForm3;              
