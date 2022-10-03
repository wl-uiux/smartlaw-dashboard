import React from "react";            
import {            
 Box,           
 Tab,           
 Tabs,           
 TabList,           
 TabPanel,           
 TabPanels,           
} from "@chakra-ui/react";            
      function Tabs9() {      
   const [tabIndex, setTabIndex] = React.useState(0)         
    const handleSliderChange = (event) => {        
setTabIndex(parseInt(event.target.value, 10))    
}
    const handleTabsChange = (index) => {        
setTabIndex(index)    
}
       return (     
        <Box>    
        <input    
type="range"    
min="0"    
max="2"    
value={tabIndex}    
onChange={handleSliderChange}    
/>
        <Tabs index={tabIndex} onChange={handleTabsChange}>    
        <TabList>    
        <Tab> One </Tab>  
        <Tab> Two </Tab>  
        <Tab> Three </Tab>  
        </TabList>    
        <TabPanels>    
        <TabPanel>    
<p> Click the tabs or pull the slider around </p>  
        </TabPanel>    
        <TabPanel>    
<p> LexDAO Breakthrough </p>  
        </TabPanel>    
        <TabPanel>    
<p> Nine LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems. </p>  
        </TabPanel>    
        </TabPanels>    
        </Tabs>    
        </Box>    
)
}
export default Tabs9;              
