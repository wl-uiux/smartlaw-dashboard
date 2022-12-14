import { React } from 'react';            
import {            
 Box,           
 Flex,           
 Avatar,           
 HStack,           
 Link,           
IconButton,    
 Button,           
 Menu,           
 MenuButton,           
 MenuList,           
 MenuItem,           
 MenuDivider,           
 useDisclosure,           
 useColorModeValue,           
 Stack,           
} from '@chakra-ui/react';            
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';            
   const Links = ['Live Dashboard', 'Current Projects', 'Players', 'Patrons'];         
    const NavLink = ({ children } ) => (        
<Link    
px={2}    
py={1}    
rounded={'md'}    
_hover={{    
     textDecoration: 'none',       
     bg: useColorModeValue('gray.200', 'gray.700'),       
}}
href={' # '}>  
{children}    
        </Link>    
);
      function Header0 () {      
   const { isOpen, onOpen, onClose } = useDisclosure();         
       return (     
        <>    
        <Box bg="gray" px={4}>    
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>    
<IconButton    
size={'md'}    
icon={isOpen ? < CloseIcon /> : <HamburgerIcon />}  
aria-label={'Open Menu'}    
display={{ md: 'none' }}    
onClick={isOpen ? onClose : onOpen}    
/>
        <HStack spacing={8} alignItems={'center'}>    
        <Box> LexDAO </Box>  
        <HStack    
as={'nav'}    
spacing={4}    
display={{ base: 'none', md: 'flex' }}>    
{Links.map((link) => (    
        <NavLink key={link}>{link}</NavLink>    
))}
        </HStack>    
        </HStack>    
        <Flex alignItems={'center'}>    
        <Button    
variant={'solid'}    
colorScheme={'purple'}    
size={'sm'}    
mr={4}    
leftIcon={<AddIcon />}>    
LexDAO Action   
        </Button>    
        <Menu>    
        <MenuButton    
as={Button}    
rounded={'full'}    
variant={'link'}    
cursor={'pointer'}    
minW={0}>    
        <Avatar    
size={'sm'}    
src={' https://bafkreihpob65rfthwbxx3xvuk6rj4r564qqx6irpjcuktuojkny3nglsqu.ipfs.infura-ipfs.io/ '  
}
                                                               />
                                                               

        </MenuButton>    
        <MenuList color="blue">    
        <MenuItem> Link 1 </MenuItem>  
        <MenuItem> Link 2 </MenuItem>  
        <MenuDivider />    
        <MenuItem> Link 3 </MenuItem>  
        </MenuList>    
        </Menu>    
        </Flex>    
        </Flex>    
{isOpen ? (    
        <Box pb={4} display={{ md: 'none' }}>    
        <Stack as={'nav'} spacing={4}>    
{Links.map((link) => (    
        <NavLink key={link}>{link}</NavLink>    
))}
        </Stack>    
        </Box>    
) : null}    
        </Box>    
        <Box p={4}>LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.</Box>    
</>               
);
}
export default Header0;              
