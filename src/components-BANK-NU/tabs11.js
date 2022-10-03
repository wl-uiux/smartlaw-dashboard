import React from "react";            
import {            
 Tab,           
 Tabs,           
 TabList,           
 TabPanel,           
 TabPanels,           
} from "@chakra-ui/react";            
      function Tabs11() {      
      function DataTabs({ data }) {      
       return (     
        <Tabs>    
        <TabList>    
{data.map((tab, index) => (    
        <Tab key={index}>{tab.label}</Tab>    
))}
        </TabList>    
        <TabPanels>    
{data.map((tab, index) => (    
        <TabPanel p={4} key={index}>    
{tab.content}    
        </TabPanel>    
))}
        </TabPanels>    
        </Tabs>    
)
}
    const tabData = [        
{                
     label: "    Player One ",  
     content: "LexDAO provides developer tools all along the stack.",       
},
{                
     label: "    LexDAO ",  
     content:       
"LexDAO 11 provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.",   
},
]
return <DataTabs data={tabData} />    
}
export default Tabs11;              
