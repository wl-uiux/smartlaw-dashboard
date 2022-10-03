import React from "react";
import {
  useControllableState,
  Button,
  Box,
  Image,
  Link,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  Text,
} from "@chakra-ui/react";
function HookControllable() {
  const [value, setValue] = useControllableState({ defaultValue: 40 });
  const [internalValue, setInternalValue] = useControllableState({
    value,
    onChange: setValue,
  });
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
          Controllable Click to Edit
        </Text>
        <Editable
          color="white"
          defaultValue=" Type the transactions description here:"
        >
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
          Unontrolled State Change on LexDAO Tungsten
        </Link>
        <br />
        <Box>
          <div>
            <Button colorScheme="blue" onClick={() => setValue(value - 1)}>
              -
            </Button>
            <Box as="span" w="200px" mx="24px">
              {value}
            </Box>
            <Button colorScheme="green" onClick={() => setValue(value + 1)}>
              +
            </Button>
          </div>
        </Box>
        <br />
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          Controlled State Change on LexDAO Tungsten
        </Link>
        <br />
        <Box>
          <HStack>
            <div>
              <Button
                colorScheme="pink"
                onClick={() => setInternalValue(value - 1)}
              >
                -
              </Button>
              <Box as="span" w="200px" mx="24px">
                {internalValue}
              </Box>
              <Button
                colorScheme="purple"
                onClick={() => setInternalValue(value + 1)}
              >
                +
              </Button>
            </div>
          </HStack>
        </Box>
        <br />
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are a
          few ways LexDAO members are found.
        </Text>
      </Box>
    </Box>
  );
}
export default HookControllable;
