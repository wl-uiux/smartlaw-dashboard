import React from "react";            
import {            
 Box,           
 Tab,           
 Tabs,           
 TabList,           
 TabPanel,           
 TabPanels,           
} from "@chakra-ui/react";            
      function Tabs7() {      
   const [setTabIndex] = React.useState(0)         
       return (     
        <Box p={4} display={{ md: "flex" }}>    
        <Box flexShrink={0}>    
        <Tabs onChange={(index) => setTabIndex(index)} bg="darkgray:900">    
        <TabList >    
        <Tab color="orange"> Reminder </Tab>  
        <Tab color="teal"> Queued-up next </Tab>  
        <Tab color="yellow"> LexDAOPresentation </Tab>  
        </TabList>    
        <TabPanels p="2rem">    
        <TabPanel> Upcoming Events </TabPanel>  
        <TabPanel> Event1, Event2, Event3 </TabPanel>  
        <TabPanel> Funday1, Funday2, Funday3 </TabPanel>  
        </TabPanels>    
        </Tabs>    
        </Box>    
        </Box>    
);
}
export default Tabs7;              
