import React from "react";            
import {            
 Box,           
 Center,           
 Image,           
 Text,           
 Link,           
 Menu,           
 MenuButton,           
 MenuList,           
 MenuItem,           
 MenuItemOption,           
 MenuGroup,           
 MenuOptionGroup,           
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

import artistsbadge from "../images/metagame/badge-artists-500x-2022.png";
import buildersbadge from "../images/metagame/badge-builders-500x-2022.png";
import designersbadge from "../images/metagame/badge-designers-500x-2022.png";
import fairiesbadge from "../images/metagame/badge-fairies-500x-2022.png";
import headhuntersbadge from "../images/metagame/badge-headhunter-500x-2022.png";
import innkeepersbadge from "../images/metagame/badge-innkeepers-500x-2022.png";
import necromancersbadge from "../images/metagame/badge-necromancers-500x-2022.png";
import shillersbadge from "../images/metagame/badge-shillers-500x-2022.png";
import writersbadge from "../images/metagame/badge-writers-500x-2022.png";

// import blockchains from "../images/lexdao/008-compass.svg";
// import enforcement from "../images/lexdao/009-sheriff-badge.svg";
// import airdropsurprise from "../images/lexdao/012-trick.svg";
// import evidencer from "../images/lexdao/024-candy.svg";
// import judiciary from "../images/lexdao/027-scale.svg";
// import bughunters from "../images/lexdao/029-antivirus.svg";
// import donuts from "../images/lexdao/054-donut-3.svg";
// import artists from "../images/lexdao/080-pallete.svg";
// import developers from "../images/lexdao/088-builder-1.svg";
// import rewards from "../images/lexdao/099-magic-wand-2.svg";
// import recruiters from "../images/lexdao/110-headhunter-2.svg";
// import marketers from "../images/lexdao/116-megaphone-2.svg";
// import designers from "../images/lexdao/118-graphic-designer.svg";
// import trees from "../images/lexdao/153-magnolia.svg";
// import superchargers from "../images/lexdao/210-zeus-1.svg";
// import advocates from "../images/lexdao/212-zeus-3.svg";
// import justice from "../images/lexdao/216-justice.svg";
// import resolvers from "../images/lexdao/217-auction.svg";
// import projectmanagers from "../images/lexdao/218-target-1.svg";
// import authenticators from "../images/lexdao/219-compliant.svg";
// import governors from "../images/lexdao/220-governance.svg";
// import tealeaves from "../images/lexdao/223-tea-leaf.svg";
// import documents from "../images/lexdao/225-search.svg";
// import strategists from "../images/lexdao/226-strategy.svg";
// import jurors from "../images/lexdao/229-handshake.svg";
// import policymakers from "../images/lexdao/229-handshake.svg";
// import smartlaw from "../images/lexdao/235-trident-7.svg";

function MenuLayout3() {
        return (
          <Box p={4} display={{ lg: "flex" }}>
            <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
              <Text
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="sm"
                letterSpacing="wide"
                color="yellow.600"
              >
                SmartLaw Web3Skills Specialties
              </Text>
              <Link
                mt={1}
                display="block"
                fontSize="lg"
                lineHeight="normal"
                fontWeight="semibold"
                href="#"
                >
                Finding Members and Patrons for LexDAO
              </Link>
              <br />
              <br />
              <HStack>

              <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label=" Options "
                    icon={<HamburgerIcon />}
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
                <br />
                <br />
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
                <br />

                <Menu>
                  <MenuButton
                    variant="outline"
                    colorScheme="purple"
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                  >
              Groups
            </MenuButton>
            <MenuList>
              <MenuItem color="blue" minH="40px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src={innkeepersbadge}
                  alt=" Innkeeers Guild "
                  mr="12px"
                />
                <span> Innkeepers Guild </span>
              </MenuItem>
              <MenuItem color="blue" minH="40px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src={buildersbadge}
                  alt=" Builders Guild "
                  mr="12px"
                />
                <span> Builders Guild </span>
              </MenuItem>
              <MenuItem color="blue" minH="48px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src={designersbadge}
                  alt=" Designers Guild "
                  mr="12px"
                />
                <span> Designers Guild </span>
              </MenuItem>
              <MenuItem color="blue" minH="48px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src={writersbadge}
                  alt=" Writers Guild "
                  mr="12px"
                />
                <span> Writers Guild </span>
              </MenuItem>
              <MenuItem color="blue" minH="48px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src={artistsbadge}
                  alt=" Artists Guild "
                  mr="12px"
                />
                <span> Artists Guild </span>
              </MenuItem>
              <MenuItem color="blue" minH="48px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src={fairiesbadge}
                  alt=" Fairies Guild "
                  mr="12px"
                />
                <span> Fairies Guild </span>
              </MenuItem>
              <MenuItem color="blue" minH="40px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src={shillersbadge}
                  alt=" Shillers Guild "
                  mr="12px"
                />
                <span> Shillers Guild </span>
              </MenuItem>
              <MenuItem color="blue" minH="48px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src={headhuntersbadge}
                  alt=" Headhunters Guild "
                  mr="12px"
                />
                <span> Headhunters Guild </span>
              </MenuItem>
              <MenuItem color="blue" minH="40px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src={necromancersbadge}
                  alt=" Necromancers Guild "
                  mr="12px"
                />
                <span> Necromancers Guild </span>
              </MenuItem>
            </MenuList>
          </Menu>
          <br />
          <Menu>
                  <MenuButton as={Button} colorScheme="purple">
                    Member Profile
                  </MenuButton>
                  <MenuList color="blue">
                    <MenuGroup title=" Profile">
                      <MenuItem> My Account </MenuItem>
                      <MenuItem> Payments </MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title=" Help">
                      <MenuItem> Docs </MenuItem>
                      <MenuItem> FAQ </MenuItem>
                    </MenuGroup>
                  </MenuList>
                </Menu>
                <br />
                <Menu>
                  <MenuButton as={Button} colorScheme="pink">
                    Patron Profile
                  </MenuButton>
                  <MenuList color="blue">
                    <MenuGroup title=" Profile">
                      <MenuItem> My Account </MenuItem>
                      <MenuItem> Payments </MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title=" Help">
                      <MenuItem> Docs </MenuItem>
                      <MenuItem> FAQ </MenuItem>
                    </MenuGroup>
                  </MenuList>
                </Menu>
                <br />
                <Menu closeOnSelect={false}>
                  <MenuButton as={Button} colorScheme="blue">
                    Game Menu
                  </MenuButton>
                  <MenuList minWidth="240px">
                    <MenuOptionGroup defaultValue="asc" title=" Order" type="radio">
                      <MenuItemOption value="asc"> Ascending </MenuItemOption>
                      <MenuItemOption value="desc"> Descending </MenuItemOption>
                    </MenuOptionGroup>
                    <MenuDivider />
                    <MenuOptionGroup title=" Country" type="checkbox">
                      <MenuItemOption value="email"> Email </MenuItemOption>
                      <MenuItemOption value="phone"> Phone </MenuItemOption>
                      <MenuItemOption value="country"> Country </MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
                <br />
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
                <br />
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
                <br />

              </HStack>
      
<br/>               
        <Center>    
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
        </Center>    
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
        </Box>    
        </Box>    
);
}
export default MenuLayout3;              
