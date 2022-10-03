import React from "react";
import {
  useOutsideClick,
  Button,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
function HookModal() {
  const ref = React.useRef();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  useOutsideClick({
    ref: ref,
    handler: () => setIsModalOpen(false),
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
          Reference Modal
        </Text>

        <br />
        {isModalOpen ? (
          <div ref={ref}>
            <Text fontSize="24pt" color="yellow">
              {" "}
              👋 Smartlaw Web3Skills provides reference materials. Click
              anywhere outside of me to close.
            </Text>
          </div>
        ) : (
          <Button
            variant="outline"
            colorScheme="pink"
            onClick={() => setIsModalOpen(true)}
          >
            {" "}
            Open Reference Modal{" "}
          </Button>
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
export default HookModal;
