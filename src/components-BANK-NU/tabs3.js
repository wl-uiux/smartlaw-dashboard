import React from "react";            
import {            
 Box,           
 Tab,           
 Tabs,           
 TabList,           
 TabPanel,           
 TabPanels,           
} from "@chakra-ui/react";            
      function Tabs3() {      
       return (     
        <Box p={4} display={{ md: "flex" }}>    
        <Box flexShrink={0}>    
        <Tabs align="end" size="md" variant="enclosed-color" colorScheme="green">    
        <TabList>    
        <Tab> W3S 1 </Tab>  
        <Tab> W3S 2 </Tab>  
        </TabList>    
        <TabPanels>    
        <TabPanel>    
<p> Three LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems. </p>  
        </TabPanel>    
        <TabPanel>    
<p> Two LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems. </p>  
        </TabPanel>    
        <TabPanel>    
<p> Three LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems. </p>  
        </TabPanel>    
        <TabPanel>    
<p> four! </p>  
        </TabPanel>    
        </TabPanels>    
        </Tabs>    
        </Box>    
        </Box>    
);
}
export default Tabs3;              
