import React from "react";            
import {            
 Box,           
 Image,           
 Text,           
 Center,           
 Link,           
 Editable,           
 EditableInput,           
 EditablePreview,           
 Menu,           
 MenuButton,           
 MenuList,           
 MenuItem,           
 MenuDivider,           
 Wrap,           
 WrapItem,           
IconButton,    
 Portal,           
 HStack,           
 Avatar,           
 Button,           
} from "@chakra-ui/react";            
import {            
  AddIcon,          
  HamburgerIcon,          
  ChevronDownIcon,          
  RepeatIcon,          
  LinkIcon,          
} from "@chakra-ui/icons";            
import { FaEdit } from "react-icons/fa";            
      function MenuLayout1() {      
       return (     
        <Box p={4} display={{ md: "flex" }}>    
        <Box flexShrink={0}>    
<Image    
borderRadius="lg"    
width={{ md: 40 }}    
src=" https://bafybeibbsjwphabvlxbodddrtxo4mb7unoyrkx5swstlgqx563jv2sgwku.ipfs.infura-ipfs.io/ "  
alt=" LexDAO "  
/>
        </Box>    
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>    
<Text    
fontWeight="bold"    
textTransform="uppercase"    
fontSize="sm"    
letterSpacing="wide"    
color="yellow.600"    
>
MenuLayout1 Click to edit   
        </Text>    
        <Editable defaultValue=" Type your message here:">   
        <EditablePreview />    
        <EditableInput />    
        </Editable>    
<Link    
mt={1}    
display="block"    
fontSize="lg"    
lineHeight="normal"    
fontWeight="semibold"    
href=" # "  
>
Finding Players and Patrons for LexDAO   
        </Link>    
<br/>               
        <Center>    
        <HStack>    
        <Menu>    
        <MenuButton    
variant="outline"    
color="cyan"    
as={Button}    
rightIcon={<ChevronDownIcon />}    
>
LexDAO Actions   
        </MenuButton>    
        <MenuList>    
        <MenuItem color="red"> Download </MenuItem>  
        <MenuItem color="red"> Create a Copy </MenuItem>  
        <MenuItem color="red"> Mark as Draft </MenuItem>  
        <MenuItem color="red"> Delete </MenuItem>  
        <MenuItem color="red"> Attend a Workshop </MenuItem>  
        </MenuList>    
        </Menu>    
<br/>               
<br/>               
        <Menu>    
{({ isOpen }) => (    
        <>    
        <MenuButton    
variant="outline"    
color="orange"    
isActive={isOpen}    
as={Button}    
rightIcon={<ChevronDownIcon />}    
>
{isOpen ? "Close - State" : "Open - State"}    
        </MenuButton>    
        <MenuList>    
        <MenuItem color="orange"> Download </MenuItem>  
        <MenuItem    
color="orange"    
onClick={() => alert("Confirm the Choice")}    
>
Create a Copy   
        </MenuItem>    
        </MenuList>    
</>               
)}
        </Menu>    
<br/>               
        <Menu>    
        <MenuButton    
variant="outline"    
colorScheme="messenger"    
px={4}    
py={2}    
transition="all 0.2s"    
borderRadius="md"    
borderWidth="1px"    
_hover={{ bg: "gray.400" }}    
_expanded={{ bg: "blue.400" }}    
_focus={{ boxShadow: "outline" }}    
>
File Management   
        <ChevronDownIcon />    
        </MenuButton>    
        <MenuList>    
        <MenuItem color="blue"> New File </MenuItem>  
        <MenuItem color="blue"> New Window </MenuItem>  
        <MenuDivider />    
        <MenuItem color="blue"> Open... </MenuItem>  
        <MenuItem color="blue"> Save File </MenuItem>  
        </MenuList>    
        </Menu>    
<br/>               
        <Menu>    
        <MenuButton    
variant="outline"    
colorScheme="purple"    
as={Button}    
rightIcon={<ChevronDownIcon />}    
>
Guilds   
        </MenuButton>    
        <MenuList>    
        <MenuItem color="blue" minH="40px">    
<Image    
boxSize="2rem"    
borderRadius="full"    
src=" https://bafybeidsu7licdvguf5tgyigtpcedjgy6tegmdlklvtq6j5hurwrsr3sjm.ipfs.infura-ipfs.io/ "  
alt=" Innkeepers Guild "  
mr="12px"    
/>
        <span> Innkeepers Guild </span>  
        </MenuItem>    
        <MenuItem color="blue" minH="40px">    
<Image    
boxSize="2rem"    
borderRadius="full"    
src=" https://bafkreic5mdegc7kyvhfonrteh7khvkprc6yc7lc4mdqinfjdkz2o3uwl2u.ipfs.infura-ipfs.io/ "  
alt=" Builders Guild "  
mr="12px"    
/>
        <span> Builders Guild </span>  
        </MenuItem>    
        <MenuItem color="blue" minH="48px">    
<Image    
boxSize="2rem"    
borderRadius="full"    
src=" https://bafybeiagnt3b2nxgu2vh7skmbruthedv73o6ek7vyzpbkjh7rujfm3cici.ipfs.infura-ipfs.io/ "  
alt=" Designers Guild "  
mr="12px"    
/>
        <span> Designers Guild </span>  
        </MenuItem>    
        <MenuItem color="blue" minH="48px">    
<Image    
boxSize="2rem"    
borderRadius="full"    
src=" https://bafybeicv4pk3axs2xequepsfbxnvkdyesm3gm6dqf2sk2mycgx4flybi2a.ipfs.infura-ipfs.io/ "  
alt=" Writers Guild "  
mr="12px"    
/>
        <span> Writers Guild </span>  
        </MenuItem>    
        <MenuItem color="blue" minH="48px">    
<Image    
boxSize="2rem"    
borderRadius="full"    
src=" https://bafybeicivgxjjb5jng2ovkpd3urvxay6zcwuxawvrx6cp42c33brwv5x4q.ipfs.infura-ipfs.io/ "  
alt=" Artists Guild "  
mr="12px"    
/>
        <span> Artists Guild </span>  
        </MenuItem>    
        <MenuItem color="blue" minH="48px">    
<Image    
boxSize="2rem"    
borderRadius="full"    
src=" https://bafybeidlmfis2lf2oqsewhfyvwtzkfgr4dyu7u5ebue32vn27slr72g7he.ipfs.infura-ipfs.io/ "  
alt=" Fairies Guild "  
mr="12px"    
/>
        <span> Fairies Guild </span>  
        </MenuItem>    
        <MenuItem color="blue" minH="40px">    
<Image    
boxSize="2rem"    
borderRadius="full"    
src=" https://bafybeigpgmeklembgujmes2lf2nnduufayioze54rdvwlg426bykcwueri.ipfs.infura-ipfs.io/ "  
alt=" Shillers Guild "  
mr="12px"    
/>
        <span> Shillers Guild </span>  
        </MenuItem>    
        <MenuItem color="blue" minH="48px">    
<Image    
boxSize="2rem"    
borderRadius="full"    
src=" https://bafybeihiqf6qmvfdeltwoee5yr4jhjddksj73kxcdnltinsee6krfmqy3a.ipfs.infura-ipfs.io/ "  
alt=" Headhunters Guild "  
mr="12px"    
/>
        <span> Headhunters Guild </span>  
        </MenuItem>    
        <MenuItem color="blue" minH="40px">    
<Image    
boxSize="2rem"    
borderRadius="full"    
src=" https://bafybeiejwxdtue664xxw2zcr3223wsbqhlxfqogwasv5cz4mxmveqv2yvu.ipfs.infura-ipfs.io/ "  
alt=" Necromancers Guild "  
mr="12px"    
/>
        <span> Necromancers Guild </span>  
        </MenuItem>    
        </MenuList>    
        </Menu>    
<br/>               
        <Menu>    
        <MenuButton color="yellow"> Open menu </MenuButton>  
        <Portal>    
        <MenuList color="blue">    
        <MenuItem> Menu 1 </MenuItem>  
        <MenuItem> New Window </MenuItem>  
        <MenuItem> Open Closed Tab </MenuItem>  
        <MenuItem> Open File </MenuItem>  
        </MenuList>    
        </Portal>    
        </Menu>    
<br/>               
        <Menu>    
        <MenuButton    
as={IconButton}    
aria-label=" Options "  
icon={< HamburgerIcon />}  
variant="outline"    
colorScheme="blue"    
color="cyan"    
/>
        <MenuList color="blue">    
        <MenuItem icon={<AddIcon />} command="⌘T">    
New Tab   
        </MenuItem>    
        <MenuItem icon={<LinkIcon />} command="⌘N">    
New Window   
        </MenuItem>    
        <MenuItem icon={<RepeatIcon />} command="⌘⇧N">    
Open Closed Tab   
        </MenuItem>    
        <MenuItem icon={<FaEdit />} command="⌘O">    
Open File...   
        </MenuItem>    
        </MenuList>    
        </Menu>    
        </HStack>    
        </Center>    
<br/>               
        <Wrap>    
        <WrapItem>    
        <Avatar    
name=" Innkeepers Guild "  
size="xl"    
src=" https://bafybeidsu7licdvguf5tgyigtpcedjgy6tegmdlklvtq6j5hurwrsr3sjm.ipfs.infura-ipfs.io/ "  
/>
        </WrapItem>    
        <WrapItem>    
        <Avatar    
name=" Builders Guild "  
size="xl"    
src=" https://bafkreic5mdegc7kyvhfonrteh7khvkprc6yc7lc4mdqinfjdkz2o3uwl2u.ipfs.infura-ipfs.io/ "  
/>
        </WrapItem>    
        <WrapItem>    
        <Avatar    
name=" Designers Guild "  
size="xl"    
src=" https://bafybeiagnt3b2nxgu2vh7skmbruthedv73o6ek7vyzpbkjh7rujfm3cici.ipfs.infura-ipfs.io/ "  
/>
        </WrapItem>    
        <WrapItem>    
        <Avatar    
name=" Writers Guild "  
size="xl"    
src=" https://bafybeicv4pk3axs2xequepsfbxnvkdyesm3gm6dqf2sk2mycgx4flybi2a.ipfs.infura-ipfs.io/ "  
/>
        </WrapItem>    
        <WrapItem>    
        <Avatar    
name=" Artists Guild "  
size="xl"    
src=" https://bafybeicivgxjjb5jng2ovkpd3urvxay6zcwuxawvrx6cp42c33brwv5x4q.ipfs.infura-ipfs.io/ "  
/>
        </WrapItem>    
        <WrapItem>    
        <Avatar    
name=" Fairies Guild "  
size="xl"    
src=" https://bafybeidlmfis2lf2oqsewhfyvwtzkfgr4dyu7u5ebue32vn27slr72g7he.ipfs.infura-ipfs.io/ "  
/>
        </WrapItem>    
        <WrapItem>    
        <Avatar    
name=" Shillers Guild "  
size="xl"    
src=" https://bafybeigzgwfqaroaiszsmfgi47w5rzvvgevykysof7fdyk5d6q4bxobsti.ipfs.infura-ipfs.io/ "  
/>
        </WrapItem>    
        <WrapItem>    
        <Avatar    
name=" Headhunters Guild "  
size="xl"    
src=" https://bafybeihiqf6qmvfdeltwoee5yr4jhjddksj73kxcdnltinsee6krfmqy3a.ipfs.infura-ipfs.io/ "  
/>
        </WrapItem>    
        <WrapItem>    
        <Avatar    
name=" Necromancers Guild "  
size="xl"    
src=" https://bafybeiejwxdtue664xxw2zcr3223wsbqhlxfqogwasv5cz4mxmveqv2yvu.ipfs.infura-ipfs.io/ "  
/>
        </WrapItem>    
        </Wrap>    
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
        </Box>    
        </Box>    
);
}
export default MenuLayout1;              
