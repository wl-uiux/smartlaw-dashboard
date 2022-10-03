import React from "react";
import {
  Box,
  Image,
  Text,
  Link,
  Editable,
  EditableInput,
  EditablePreview,
  Badge,
  Flex,
  WrapItem,
  Stack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  HStack,
  Avatar,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Wrap,
  IconButton,
  Portal,
  Button,
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";

import {
  AddIcon,
  HamburgerIcon,
  ChevronDownIcon,
  RepeatIcon,
  LinkIcon,
} from "@chakra-ui/icons";

import { ImStarFull } from "react-icons/im";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import {
  WiAlien,
  WiBarometer,
  WiEarthquake,
  WiFire,
  WiHorizonAlt,
  WiHorizon,
  WiMoonAltFull,
  WiSolarEclipse,
  WiTime6,
  WiLightning,
  WiStars,
  WiWindDeg,
} from "react-icons/wi";


import artistsbadge from "../images/metagame/badge-artists-500x-2022.png";
import buildersbadge from "../images/metagame/badge-builders-500x-2022.png";
import designersbadge from "../images/metagame/badge-designers-500x-2022.png";
import fairiesbadge from "../images/metagame/badge-fairies-500x-2022.png";
import headhuntersbadge from "../images/metagame/badge-headhunter-500x-2022.png";
import innkeepersbadge from "../images/metagame/badge-innkeepers-500x-2022.png";
import necromancersbadge from "../images/metagame/badge-necromancers-500x-2022.png";
import shillersbadge from "../images/metagame/badge-shillers-500x-2022.png";
import writersbadge from "../images/metagame/badge-writers-500x-2022.png";



// import smartlaweb3skills from "../images/lexdao/smartlaw-web3skills-white.png";
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

function ProfileLayout1() {
  return (
    <Box p={4} display={{ md: "flex" }}>
      <Box flexShrink={0}>
        <Image
          borderRadius="lg"
          maxW="400px"
          width={{ md: 40 }}
          src=" https://bafybeidmpeq6op634lbahmksakedv45w3c7t2dtx7bg2ojqsmhy253432q.ipfs.infura-ipfs.io
 "
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
          ProfileLayout1 Click to edit
        </Text>
        <Editable defaultValue=" Type your message here:">
          <EditablePreview />
          <EditableInput />
        </Editable>
        <br />
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          Finding Members and Patrons for LexDAO
        </Link>
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are
          some ways LexDAO members are found.
        </Text>
        <Stack direction="row">
          <Badge variant="solid" colorScheme="red">
            <Text fontSize="xs"> Group 0 </Text>
          </Badge>
          <Badge variant="solid" colorScheme="orange">
            <Text fontSize="xs"> Group 1 </Text>
          </Badge>
          <Badge variant="solid" colorScheme="yellow">
            <Text fontSize="xs"> Group 2 </Text>
          </Badge>
          <Badge variant="solid" colorScheme="green">
            <Text fontSize="xs"> Group 3 </Text>
          </Badge>
          <Badge variant="solid" colorScheme="teal">
            <Text fontSize="xs"> Group 4 </Text>
          </Badge>
          <Badge variant="solid" colorScheme="cyan">
            <Text fontSize="xs"> Group 5 </Text>
          </Badge>
          <Badge variant="solid" colorScheme="blue">
            <Text fontSize="xs"> Group 6 </Text>
          </Badge>
          <Badge variant="solid" colorScheme="purple">
            <Text fontSize="xs"> Group 7 </Text>
          </Badge>
          <Badge variant="solid" colorScheme="pink">
            <Text fontSize="xs"> Group 8 </Text>
          </Badge>
          <Badge variant="solid" colorScheme="blackAlpha">
            <Text fontSize="xs"> Group 9 </Text>
          </Badge>
          <Badge variant="outline" colorScheme="blue">
            Rogue Player
          </Badge>
        </Stack>
        <br />
        <Flex>
          <WrapItem>
            <Avatar
              size="xl"
              name=" Scott Stevenson "
              src=" https://bafybeiadlckn4fdpst6sgl72yhil7o2v5nvb7ao6ystpovnqk6ictughky.ipfs.infura-ipfs.io/ "
            />{" "}
          </WrapItem>
          <Box ml="3">
            <Text fontWeight="bold">
              Scott Stevenson
              <Badge ml="1" colorScheme="green">
                tenfinney
              </Badge>
            </Text>
            <Text fontSize="sm"> Web3 Legal Engineering </Text>
          </Box>
        </Flex>
        <br />
        <Text fontSize="xl" fontWeight="bold">
          Scott Stevenson
          <Badge ml="1" fontSize="0.8em" colorScheme="green">
            <Text fontSize="sm"> Tenfinney </Text>
          </Badge>
        </Text>
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
        <br />
        <br />
        <HStack spacing={4}>
          {["lg", "lg", "lg"].map((size) => (
            <Tag size={size} key={size} variant="solid" colorScheme="yellow">
              <TagLeftIcon boxSize="12px" as={ImStarFull} />
              <TagLabel> Member </TagLabel>
            </Tag>
          ))}
        </HStack>
        <br />
        <HStack spacing={4}>
          {["lg", "lg", "lg"].map((size) => (
            <Tag size={size} key={size} variant="solid" colorScheme="blue">
              <TagLabel> Ethereum </TagLabel>
              <TagRightIcon as={FaEthereum} />
            </Tag>
          ))}
        </HStack>
        <br />
        <HStack spacing={4}>
          {["md", "md", "md"].map((size) => (
            <Tag size={size} key={size} variant="solid" colorScheme="facebook">
              <TagLabel> Patron </TagLabel>
              <TagRightIcon as={WiSolarEclipse} />
            </Tag>
          ))}
        </HStack>
        <br />
        <HStack spacing={4}>
          {["sm", "sm", "sm"].map((size) => (
            <Tag
              size={size}
              key={size}
              variant="subtle"
              colorScheme="whiteAlpha"
            >
              <TagLeftIcon boxSize="12px" as={FaBitcoin} />
              <TagLabel> Bitcoin </TagLabel>
            </Tag>
          ))}
        </HStack>
        <br />

        <br />
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
              MenuItem
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
        </HStack>
        <br />
        <Center>
          <Wrap>
            <WrapItem>
              <Avatar
                name=" Innkeepers Guild "
                size="lg"
                bg="gray.500"
                src={innkeepersbadge}
              />
            </WrapItem>
            <WrapItem>
              <Avatar
                name=" Builders Guild "
                size="lg"
                bg="gray.500"
                src={buildersbadge}
              />
            </WrapItem>
            <WrapItem>
              <Avatar
                name=" Designers Guild "
                size="lg"
                bg="gray.500"
                src={designersbadge}
              />
            </WrapItem>
            <WrapItem>
              <Avatar
                name=" Writers Guild "
                size="lg"
                bg="gray.500"
                src={writersbadge}
              />
            </WrapItem>
            <WrapItem>
              <Avatar
                name=" Artists Guild "
                size="lg"
                bg="gray.500"
                src={artistsbadge}
              />
            </WrapItem>
            <WrapItem>
              <Avatar
                name=" Fairies Guild "
                size="lg"
                bg="gray.500"
                src={fairiesbadge}
              />
            </WrapItem>
            <WrapItem>
              <Avatar
                name=" Shillers Guild "
                size="lg"
                bg="gray.500"
                src={shillersbadge}
              />
            </WrapItem>
            <WrapItem>
              <Avatar
                name=" Headhunters Guild "
                size="lg"
                bg="gray.500"
                src={headhuntersbadge}
              />
            </WrapItem>
            <WrapItem>
              <Avatar
                name=" Necromancers Guild "
                size="lg"
                bg="gray.500"
                src={necromancersbadge}
              />
            </WrapItem>
          </Wrap>
        </Center>

        <br />
        <List spacing={3}>
          <ListItem>
            <ListIcon as={WiAlien} w={8} h={8} color="blue.500" />
            LexDAO provides value and service supporting the fourth industrial
            revolution. Web3 is a set of technologies that publicly interoperate
            through blockchain and node based computing systems.
          </ListItem>
          <ListItem>
            <ListIcon as={WiBarometer} w={8} h={8} color="blue.300" />
          </ListItem>
          <ListItem>
            <ListIcon as={WiEarthquake} w={8} h={8} color="blue.300" />
            LexDAO provides value and service supporting the fourth industrial
            revolution. Web3 is a set of technologies that publicly interoperate
            through blockchain and node based computing systems.
          </ListItem>
          <ListItem>
            <ListIcon as={WiFire} w={8} h={8} color="blue.300" />
            LexDAO provides value and service supporting the fourth industrial
            revolution. Web3 is a set of technologies that publicly interoperate
            through blockchain and node based computing systems.
          </ListItem>
          <ListItem>
            <ListIcon as={WiHorizonAlt} w={8} h={8} color="blue.300" />
            LexDAO provides value and service supporting the fourth industrial
            revolution. Web3 is a set of technologies that publicly interoperate
            through blockchain and node based computing systems.
          </ListItem>
          <ListItem>
            <ListIcon as={WiHorizon} w={8} h={8} color="blue.300" />
          </ListItem>
          <ListItem>
            <ListIcon as={WiLightning} w={8} h={8} color="blue.300" />
            LexDAO provides value and service supporting the fourth industrial
            revolution. Web3 is a set of technologies that publicly interoperate
            through blockchain and node based computing systems.
          </ListItem>
          <ListItem>
            <ListIcon as={WiMoonAltFull} w={8} h={8} color="blue.300" />
            LexDAO provides value and service supporting the fourth industrial
            revolution. Web3 is a set of technologies that publicly interoperate
            through blockchain and node based computing systems.
          </ListItem>
          <ListItem>
            <ListIcon as={WiSolarEclipse} w={8} h={8} color="blue.300" />
            LexDAO provides value and service supporting the fourth industrial
            revolution. Web3 is a set of technologies that publicly interoperate
            through blockchain and node based computing systems.
          </ListItem>
          <ListItem>
            <ListIcon as={WiStars} w={8} h={8} color="blue.300" />
          </ListItem>
          <ListItem>
            <ListIcon as={WiTime6} w={8} h={8} color="blue.300" />
            LexDAO provides value and service supporting the fourth industrial
            revolution. Web3 is a set of technologies that publicly interoperate
            through blockchain and node based computing systems.
          </ListItem>
          <ListItem>
            <ListIcon as={WiWindDeg} w={8} h={8} color="blue.300" />
            LexDAO provides value and service supporting the fourth industrial
            revolution. Web3 is a set of technologies that publicly interoperate
            through blockchain and node based computing systems.
          </ListItem>
          <ListItem>
            <ListIcon as={FaBitcoin} w={6} h={6} color="blue.300" />
            LexDAO provides value and service supporting the fourth industrial
            revolution. Web3 is a set of technologies that publicly interoperate
            through blockchain and node based computing systems.
          </ListItem>
          <ListItem>
            <ListIcon as={FaEthereum} w={6} h={6} color="blue.300" />
          </ListItem>
        </List>
        <UnorderedList>
          <ListItem> LexDAO Lesson1 </ListItem>
          <ListItem> LexDAO Lesson2 </ListItem>
          <ListItem> LexDAO Lesson3 </ListItem>
          <ListItem> LexDAO Lesson4 </ListItem>
        </UnorderedList>
        <br />
        <OrderedList>
          <ListItem> LexDAO Lesson5 </ListItem>
          <ListItem> LexDAO Lesson6 </ListItem>
          <ListItem> LexDAO Lesson7 </ListItem>
          <ListItem> LexDAO Lesson8 </ListItem>
        </OrderedList>
        <br />
        <br />
        <Stat>
          <StatLabel> Collected Fees </StatLabel>
          <StatNumber> 200 </StatNumber>
          <StatHelpText> Feb 12 - Feb 28 </StatHelpText>
        </Stat>
        <br />
        <Stat>
          <StatLabel> Collected Fees </StatLabel>
          <StatNumber> 200 </StatNumber>
          <StatHelpText> Feb 12 - Feb 28 </StatHelpText>
        </Stat>
        <br />
        <StatGroup>
          <Stat>
            <StatLabel> Sent </StatLabel>
            <StatNumber> 200 </StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              0.2336
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel> Clicked </StatLabel>
            <StatNumber> 200 </StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              0.0905
            </StatHelpText>
          </Stat>
        </StatGroup>
        <br />
        <br />
        <br />
      </Box>
    </Box>
  );
}
export default ProfileLayout1;
