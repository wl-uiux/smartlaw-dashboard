import React from "react";
import {
  useMediaQuery,
  Box,
  Image,
  Link,
  HStack,
  Text,
} from "@chakra-ui/react";
function HookScreenSizeQuery() {
  const [isLargerThan640] = useMediaQuery("(min-width: 640px)");
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  // const [isLargerThanHD, isDisplayingInBrowser] = useMediaQuery([
  //   "(min-width: 1920px)",
  //   "(display-mode: browser)",
  // ]);
  // function determineText() {
  //   if (isLargerThanHD) {
  //     return `high resolution you got there ${
  //       isDisplayingInBrowser ? "in your browser" : "on your screen"
  //     }`;
  //   }
  //   return isDisplayingInBrowser
  //     ? "rendering in a browser"
  //     : "rendering on something else, e.g. PWA";
  // }
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
          Screen Size Query
        </Text>
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          Screensize Check for Mobile Displays
        </Link>
        <br />
        <Box>
          <HStack>
            <Text color="cyan" fontSize="18pt">
              {isLargerThan640 ? "larger than 640px" : "smaller than 640px"}
            </Text>
            <Text color="cyan" fontSize="18pt">
              {isLargerThan1280 ? "larger than 1280px" : "smaller than 1280px"}
            </Text>
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
export default HookScreenSizeQuery;
