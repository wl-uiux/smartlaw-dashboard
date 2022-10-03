import React from "react";            
import {            
 Box,           
 Accordion,           
 AccordionItem,           
 AccordionButton,           
 AccordionPanel,           
 AccordionIcon,           
} from "@chakra-ui/react";            
      function Accordian4() {      
       return (     
        <Box p={4} display={{ md: "flex" }}>    
        <Box flexShrink={0}>    
        <Accordion>    
        <AccordionItem>    
        <h2>    
        <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>    
        <Box flex="1" textAlign="left">    
         Special LexDAO and Rewards Lookout  
        </Box>    
        <AccordionIcon />    
        </AccordionButton>    
        </h2>    
        <AccordionPanel>    
         LexDAO Accordian 4 provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.   
        </AccordionPanel>    
        </AccordionItem>    
        </Accordion>    
        </Box>    
        </Box>    
            );
            }
export default Accordian4;              
