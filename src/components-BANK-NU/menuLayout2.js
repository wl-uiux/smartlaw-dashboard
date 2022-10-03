import React from "react";
import {
  Box,
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
  HStack,
  Button,
} from "@chakra-ui/react";
function MenuLayout2() {
  return (
    <Box p={4} display={{ md: "flex" }}>
      <Box flexShrink={0}>
        <Image
          borderRadius="lg"
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
          SmartLaw Web3Skills
        </Text>
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          Profile Setup and Starter Lessons
        </Link>
        <br />
        <HStack>
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
              Go to Web3Skills Lessons
            </MenuButton>
            <MenuList minWidth="240px" color="blue">
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
        </HStack>
        <br />
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are
          some ways LexDAO members are found.
        </Text>
      </Box>
    </Box>
  );
}
export default MenuLayout2;
