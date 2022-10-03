import { FcGoogle } from 'react-icons/fc';            
import { FaEthereum } from 'react-icons/fa';            
import { Button, Center, HStack, Text } from '@chakra-ui/react';            
      function SigninButton() {      
       return (     
        <Center p={8}>    
        <HStack>    
        <Button    
w={'full'}    
maxW={'md'}    
variant={'outline'}    
leftIcon={<FcGoogle />}>    
        <Center>    
<Text> Sign in with Google OAuth 2.0 </Text>  
        </Center>    
        </Button>    
        <Button    
w={'full'}    
maxW={'md'}    
variant={'outline'}    
leftIcon={<FaEthereum />}>    
        <Center>    
<Text> Sign in with Ethereum Address (0x...) </Text>  
        </Center>    
        </Button>    
        </HStack>    
        </Center>    
);
}
export default SigninButton;              
