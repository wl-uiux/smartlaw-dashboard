import React from "react";            
import {            
 Box,           
 Tab,           
 Tabs,           
 TabList,           
 TabPanel,           
 TabPanels,           
} from "@chakra-ui/react";            
      function Tabs6() {      
       return (     
        <Box p={4} display={{ md: "flex" }}>    
        <Box flexShrink={0}>    
        <Tabs variant="unstyled">    
        <TabList>    
        <Tab _selected={{ color: "white", bg: "blue.500" }}> W3S 1 </Tab>  
        <Tab _selected={{ color: "white", bg: "green.400" }}> W3S 2 </Tab>  
        </TabList>    
        <TabPanels>    
        <TabPanel>    
<p> Six LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems. </p>  
        </TabPanel>    
        <TabPanel>    
<p> Two LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems. </p>  
        </TabPanel>    
        </TabPanels>    
        </Tabs>    
        </Box>    
        </Box>    
);
}
export default Tabs6;              
