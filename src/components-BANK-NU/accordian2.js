import React from "react";            
import {            
 Box,           
 Accordion,           
 AccordionItem,           
 AccordionButton,           
 AccordionPanel,           
 AccordionIcon,           
} from "@chakra-ui/react";            
      function Accordian2() {      
       return (     
        <Box p={4} display={{ md: "flex" }}>    
        <Box flexShrink={0}>    
        <Accordion defaultIndex={[0]} allowMultiple>    
        <AccordionItem>    
        <h2>    
        <AccordionButton>    
        <Box flex="1" textAlign="left">    
         Section 1 LexDAO   
        </Box>    
        <AccordionIcon />    
        </AccordionButton>    
        </h2>    
        <AccordionPanel pb={4}>    
         LexDAO Accordian 2a provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.   
        </AccordionPanel>    
        </AccordionItem>    
        <AccordionItem>    
        <h2>    
        <AccordionButton>    
        <Box flex="1" textAlign="left">    
         Section 2 LexDAO   
        </Box>    
        <AccordionIcon />    
        </AccordionButton>    
        </h2>    
        <AccordionPanel pb={4}>    
         LexDAO Accordian 2b provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.   
        </AccordionPanel>    
        </AccordionItem>    
        </Accordion>    
        </Box>    
        </Box>    
            );
            }
export default Accordian2;              
