import { FcGoogle } from 'react-icons/fc';            
import { ImGithub } from 'react-icons/im';            
import { FaFacebook, FaEthereum, FaGitkraken, } from 'react-icons/fa';            
import { SiLinkedin, SiMessenger } from 'react-icons/si';            
import { Box, Button, Center, Stack, Text } from '@chakra-ui/react';            
      function SigninButtons() {      
       return (     
        <Box>    
        <Center p={8}>    
        <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>    
        <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>    
        <Center>    
<Text> Continue with Communication Channel </Text>  
        </Center>    
        </Button>    
        <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>    
        <Center>    
<Text> Sign in with Google OAuth 2.0 </Text>  
        </Center>    
        </Button>    
        <Button w={'full'} variant={'outline'} leftIcon={<ImGithub />}>    
        <Center>    
<Text> Sign in with Github </Text>  
        </Center>    
        </Button>    
        <Button w={'full'} variant={'outline'} leftIcon={<FaGitkraken />}>    
        <Center>    
<Text> Sign in with Kraken </Text>  
        </Center>    
        </Button>    
        <Button w={'full'} variant={'outline'} leftIcon={<FaEthereum />}>    
        <Center>    
<Text> Sign in with Ethereum </Text>  
        </Center>    
        </Button>    
        <Button w={'full'} variant={'outline'} leftIcon={<FaEthereum color="cyan"/>}>    
        <Center>    
<Text> Sign in with Polygon/Matic </Text>  
        </Center>    
        </Button>    
        <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>    
        <Center>    
<Text> Send to Linkedin </Text>  
        </Center>    
        </Button>    
        <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiMessenger />}>    
        <Center>    
<Text> Send to Messenger </Text>  
        </Center>    
        </Button>    
        </Stack>    
        </Center>    
        </Box>    
);
}
export default SigninButtons;              
