import React from "react";
import {
  useToken,
  Box,
  } from "@chakra-ui/react";
function HookDesignToken() {
  const [red100, blue200] = useToken("colors", ["pink.500", "purple.500"]);
  return (
    <Box p={4} display={{ md: "flex" }}>
      <Box flexShrink={0}>
        {/* <Image    
borderRadius="lg"    
width={{ md: 40 }}    
src=" https://bafybeidmpeq6op634lbahmksakedv45w3c7t2dtx7bg2ojqsmhy253432q.ipfs.infura-ipfs.io
 "  
alt=" LexDAO "  
/> */}
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Box p={4} boxShadow={`inset 0 4px 0 ${red100}, 0 0 8px ${blue200}`}>
        LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.
        </Box>

      </Box>
    </Box>
  );
}
export default HookDesignToken;
