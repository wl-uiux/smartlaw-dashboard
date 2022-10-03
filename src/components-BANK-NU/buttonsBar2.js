import React from "react";            
import {            
 Box,           
 Stack,           
 Spacer,           
 HStack,           
 Tooltip,           
 Button,           
 ButtonGroup,           
} from "@chakra-ui/react";            
import { MdBuild, MdCall } from "react-icons/md";            
import { FaFacebook, FaTwitter } from "react-icons/fa";            
      function ButtonsBar2() {      
       return (     
        <HStack>    
        <Spacer/>    
<br/>               
<br/>               
<hr/>               
<br/>               
<br/>               
        <div>    
        <Tooltip    
label=" Click the LexDAO logo to zoom out of the donut. "  
aria-label=" LexDAO Hint and Tip "  
>
NavTip   
        </Tooltip>    
        </div>    
<br/>               
<hr/>               
<br/>               
        <HStack>    
        <Box    
as="button"    
height="24px"    
lineHeight="1.2"    
transition="all 0.2s cubic-bezier(.08,.52,.52,1)"    
border="1px"    
px="8px"    
borderRadius="2px"    
fontSize="14px"    
fontWeight="semibold"    
bg="#f5f6f7"    
borderColor="#ccd0d5"    
color="#4b4f56"    
_hover={{ bg: "#ebedf0" }}    
_active={{    
     bg: "#dddfe2",       
     transform: "scale(0.98)",       
     borderColor: "#bec3c9",       
}}
_focus={{    
     boxShadow:       
"0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",    
}}
>
Join Group   
        </Box>    
        </HStack>    
        <HStack>    
        <Button colorScheme="facebook" leftIcon={<FaFacebook />}>    
Facebook   
        </Button>    
        <Button colorScheme="twitter" leftIcon={<FaTwitter />}>    
Twitter   
        </Button>    
        </HStack>    
        <HStack>    
        <ButtonGroup variant="outline" spacing="6">    
        <Button colorScheme="blue"> Save </Button>  
        <Button> Cancel </Button>  
        </ButtonGroup>    
        </HStack>    
        <HStack>    
        <Button    
size="md"    
height="48px"    
width="200px"    
border="2px"    
borderColor="green.500"    
backgroundColor="red.500"    
>
NewButton   
        </Button>    
        </HStack>    
        <HStack>    
        <Button    
size="md"    
height="100px"    
width="200px"    
border="2px"    
borderColor="green.500"    
backgroundColor="orange.500"    
>
NewButton   
        </Button>    
        </HStack>    
        <Stack direction="row" spacing={4}>    
        <Button leftIcon={<MdBuild />} colorScheme="teal" variant="solid">    
Email   
        </Button>    
        <Button rightIcon={<MdCall />} colorScheme="teal" variant="outline">    
Call LexDAO   
        </Button>    
        </Stack>    
        <Stack direction="row" spacing={4}>    
        <Button leftIcon={<MdBuild />} colorScheme="pink" variant="solid">    
Web3 Settings   
        </Button>    
        <Button rightIcon={<MdCall />} colorScheme="blue" variant="outline">    
Call LexDAO   
        </Button>    
        </Stack>    
        </HStack>    
);
}
export default ButtonsBar2;              
