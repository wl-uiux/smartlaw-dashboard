import { ReactNode } from 'react';            
import {            
 Box,           
 Container,           
 Stack,           
 SimpleGrid,           
 Text,           
 Button,           
 Link,           
 Image,           
 useColorModeValue,           
} from '@chakra-ui/react';            
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';            
    const ListHeader = ({ children }: { children: ReactNode }) => {        
       return (     
<Text fontWeight={'500'} fontSize={'lg'} mb={2}>    
{children}    
        </Text>    
);
};
      function Footer4() {      
       return (     
        <Box    
bg={useColorModeValue('gray.50', 'gray.900')}    
color={useColorModeValue('gray.700', 'gray.200')}>    
        <Container as={Stack} maxW={'6xl'} py={10}>    
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>    
        <Stack align={'flex-start'}>    
        <ListHeader> W3LE </ListHeader>  
<Link href={' # '}> About Us </Link>
<Link href={' # '}> Blog </Link>
<Link href={' # '}> Careers </Link>
<Link href={' # '}> Contact Us </Link>
        </Stack>    
        <Stack align={'flex-start'}>    
        <ListHeader> LexDAO Support </ListHeader>  
<Link href={' # '}> Help Center </Link>
<Link href={' # '}> Safety Center </Link>
<Link href={' # '}> Community Guidelines </Link>
        </Stack>    
        <Stack align={'flex-start'}>    
        <ListHeader> Legal </ListHeader>  
<Link href={' # '}> Cookies Policy </Link>
<Link href={' # '}> Privacy Policy </Link>
<Link href={' # '}> Terms of Service </Link>
<Link href={' # '}> Non-Fungible Digital Assets </Link>
        </Stack>    
        <Stack align={'flex-start'}>    
        <ListHeader> Install LexDAO Application </ListHeader>  
<Image ml="2" w="120px" src=" https://bafybeifaalwxb5i2rldgevit3z5bjzp7d242wgos35bwqdp2tcxrf6vzvi.ipfs.infura-ipfs.io/ /"></Image>  
<Image w="120px" src=" https://bafybeifqlrlkuyeypayztu7ne5fbsuay5gm23qnjwk3jnvhr6gno75rcfa.ipfs.infura-ipfs.io /" ></Image>  
        </Stack>    
        </SimpleGrid>    
        </Container>    
        <Box    
borderTopWidth={1}    
borderStyle={'solid'}    
borderColor={useColorModeValue('gray.200', 'gray.700')}>    
        <Container    
as={Stack}    
maxW={'6xl'}    
py={4}    
direction={{ base: 'column', md: 'row' }}    
spacing={4}    
justify={{ md: 'space-between' }}    
align={{ md: 'center' }}>    
<Text> © 2021 W3LE. All rights reserved </Text>  
        <Stack direction={'row'} spacing={6}>    
        <Button label={'Twitter'} href={' # '}>  
        <FaTwitter />    
        </Button>    
        <Button label={'YouTube'} href={' # '}>  
        <FaYoutube />    
        </Button>    
        <Button label={'Instagram'} href={' # '}>  
        <FaInstagram />    
        </Button>    
        </Stack>    
        </Container>    
        </Box>    
        </Box>    
);
}
export default Footer4;              
