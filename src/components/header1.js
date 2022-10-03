import { React } from "react";
import {
  Avatar,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

function Header1() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Flex
        bg={useColorModeValue("gray.900", "gray.800")}
        color={useColorModeValue("gray.900", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            fontWeight="semibold"
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.100", "white")}
          >
            LexDAO
          </Text>
          <Avatar
                  ml={"2"}
                  size={"lg"}
                  src={
                    "https://bafybeihtn7pmrkicwrx7z6ldwfrv2ynqlze2ykj2m5x6awyodftjs75vxm.ipfs.infura-ipfs.io/"
                  }
                />
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav  />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}

            fontSize={"sm"}
            fontWeight={600}
            color={"yellow"}
            variant={"link"}
            href={" # "}
          >
            Sign In
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            size={"sm"}

            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"green.500"}
            href={" # "}
            _hover={{
              bg: "green.800",
            }}
          >
            Sign Up
          </Button>


            <Button
              variant={"solid"}
              colorScheme={"blue"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
            >
              LexDAO Action
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    " https://bafkreihpob65rfthwbxx3xvuk6rj4r564qqx6irpjcuktuojkny3nglsqu.ipfs.infura-ipfs.io/ "
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








        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
          <Box p={4}>
          LexDAO provides value and service supporting the fourth industrial
          revolution. Web3 is a set of technologies that publicly interoperate
          through blockchain and node based computing systems.
        </Box>
    </Box>
  );
}
const DesktopNav = () => {
  // const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("blue.200", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? " # "}
                fontSize={"sm"}
                fontWeight={700}
                color={"white"}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={" group "}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon as={ChevronRightIcon} w={5} h={5} color="pink.400" />
        </Flex>
      </Stack>
    </Link>
  );
};
const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};
const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? " # "}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
    
  );
};
interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}
const NAV_ITEMS: Array <NavItem> = [
  {
    label: "    LexDAO Inspiration ",
    children: [
      {
        label: "    Explore LexDAO Developer Tools ",
        subLabel: "Choose your own Web3 adventure",
        href: " # ",
      },
      {
        label: "    LexDAO News ",
        subLabel: "Up-and-coming Developers choose Web3",
        href: " # ",
      },
    ],
  },
  {
    label: "    LexDAO Developer Jobs ",
    children: [
      {
        label: "    LexDAO JobBoard ",
        subLabel: "Find your Web3 path",
        href: " # ",
      },
      {
        label: "    LexDAO Developer Gigs ",
        subLabel: "Exclusive Web3 Resources",
        href: " # ",
      },
    ],
  },
  {
    label: "    Learn LexDAO ",
    href: " # ",
  },
  {
    label: "    LexDAO Design Jobs ",
    href: " # ",
  },
];
export default Header1;
