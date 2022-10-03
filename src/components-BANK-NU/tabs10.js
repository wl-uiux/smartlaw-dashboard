import React from "react";            
import {            
 chakra,           
 useTab,           
 useStyles,           
 Box,           
 Tabs,           
 TabList,           
 TabPanel,           
 TabPanels,           
} from "@chakra-ui/react";            
      function Tabs10() {      
   const StyledTab = chakra("button", { themeKey: "Tabs.Tab" })         
    const CustomTab = React.forwardRef((props, ref) => {        
   const tabProps = useTab(props)         
   const isSelected = !!tabProps["aria-selected"]         
   const styles = useStyles()         
       return (     
        <StyledTab __css={styles.tab} {...tabProps}>    
        <Box as="span" mr="2">    
{isSelected ? "😎" : "😐"}    
        </Box>    
{tabProps.children}    
        </StyledTab>    
)
})
       return (     
        <Tabs>    
        <TabList>    
        <CustomTab>One</CustomTab>    
        <CustomTab>Two</CustomTab>    
        </TabList>    
        <TabPanels>    
        <TabPanel> 1 </TabPanel>  
        <TabPanel> 2 </TabPanel>  
        </TabPanels>    
        </Tabs>    
)
}
export default Tabs10;              
