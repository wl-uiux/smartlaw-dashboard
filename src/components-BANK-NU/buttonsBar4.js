import React from "react";
import {
  Stack,
  Spacer,
  HStack,
  Tooltip,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
function ButtonsBar4() {
  return (
    <HStack>
      <Spacer />
      <br />
      <hr />
      <br />
      <HStack>
        <ButtonGroup variant="outline" spacing="6">
          <Button colorScheme="blue">Save</Button>
          <Button>Cancel</Button>
        </ButtonGroup>
      </HStack>
      <HStack></HStack>
      <Tooltip label=" LexDAO Phone number " fontSize="md">
        <PhoneIcon />
      </Tooltip>
      <Tooltip hasArrow label=" Search places " bg="gray.300" color="black">
        <SearchIcon />
      </Tooltip>
      <Tooltip hasArrow label=" Search places " bg="red.600">
        <Button
          border="2px"
          borderColor="green.500"
          backgroundColor="orange.500"
        >
          Button
        </Button>
      </Tooltip>
      <HStack>
        <Button
          size="md"
          height="48px"
          width="200px"
          border="2px"
          borderColor="green.500"
          backgroundColor="red.500"
        >
          NewButton
        </Button>
      </HStack>
      <HStack>
        <Button
          size="md"
          height="100px"
          width="200px"
          border="2px"
          borderColor="green.500"
          backgroundColor="orange.500"
        >
          NewButton
        </Button>
      </HStack>
      <Stack direction="row" spacing={4}>
        <Button leftIcon={<MdBuild />} colorScheme="teal" variant="solid">
          Email
        </Button>
        <Button rightIcon={<MdCall />} colorScheme="teal" variant="outline">
          Call LexDAO
        </Button>
      </Stack>
      <Stack direction="row" spacing={4}>
        <Button leftIcon={<MdBuild />} colorScheme="pink" variant="solid">
          Web3 Settings
        </Button>
        <Button rightIcon={<MdCall />} colorScheme="blue" variant="outline">
          Call LexDAO
        </Button>
      </Stack>
    </HStack>
  );
}
export default ButtonsBar4;
