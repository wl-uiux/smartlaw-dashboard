import React from "react";
import {
  useDisclosure,
  usePopper,
  useOutsideClick,
  Button,
  Box,
  Image,
  useMergeRefs,
  Text,
} from "@chakra-ui/react";
function HookMergeRef({ ref, ...props }) {
  const outsideRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { popperRef, referenceRef } = usePopper();
  useOutsideClick({
    ref: outsideRef,
    handler: () => isOpen && onClose(),
  });
  const buttonEl = useMergeRefs(outsideRef, referenceRef);
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
          Merge Reference Popper
        </Text>

        <br />
        <Button
          variant="solid"
          colorScheme="blue"
          ref={buttonEl}
          onClick={onOpen}
        >
          Click to Merge Reference
        </Button>
        {isOpen && (
          <Box fontSize="18pt" borderRadius="lg" ref={popperRef} bg="green">
            <Text ml="2px"> Popper Reference Goes Here </Text>
          </Box>
        )}
        <br />
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are a
          few ways LexDAO members are found.
        </Text>
      </Box>
    </Box>
  );
}
export default HookMergeRef;
