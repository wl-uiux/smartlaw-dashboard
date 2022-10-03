import React from "react";            
import {            
 Stack,           
 Spacer,           
 HStack,           
 Tooltip,           
 Button,           
 ButtonGroup,           
} from "@chakra-ui/react";            
import { MdBuild, MdCall } from "react-icons/md";            
      function ButtonsBar1() {      
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
        <Stack spacing={4} direction="row" align="center">    
        <Button colorScheme="gray" variant="outline" size="xs">    
Button   
        </Button>    
        <Button colorScheme="teal" size="sm">    
Button   
        </Button>    
        <Button colorScheme="blue" size="sm">    
Button   
        </Button>    
        <Button colorScheme="cyan" size="md">    
Button   
        </Button>    
        <Button colorScheme="purple" size="lg">    
Button   
        </Button>    
        <Button colorScheme="yellow" size="xs">    
Button   
        </Button>    
        <Button colorScheme="whiteAlpha" size="xs">    
Button   
        </Button>    
        <Button colorScheme="blackAlpha" size="xs">    
Button   
        </Button>    
        <Button colorScheme="linkedin" size="xs">    
Button   
        </Button>    
        <Button colorScheme="facebook" size="xs">    
Button   
        </Button>    
        <Button colorScheme="messenger" size="xs">    
Button   
        </Button>    
        <Button colorScheme="whatsapp" size="xs">    
Button   
        </Button>    
        <Button colorScheme="twitter" size="xs">    
Button   
        </Button>    
        <Button colorScheme="telegram" size="xs">    
Button   
        </Button>    
        </Stack>    
        </HStack>    
        <HStack>    
        <ButtonGroup variant="outline" spacing="6">    
        <Button colorScheme="blue"> Save </Button>  
        <Button> Cancel </Button>  
        </ButtonGroup>    
        </HStack>    
        <HStack></HStack>    
        <HStack></HStack>    
        <HStack></HStack>    
        <Stack direction="row" spacing={4} align="center">    
        <Button colorScheme="teal" variant="solid">    
Button   
        </Button>    
        <Button colorScheme="teal" variant="outline">    
Button   
        </Button>    
        <Button colorScheme="teal" variant="ghost">    
Button   
        </Button>    
        <Button colorScheme="teal" variant="link">    
Button   
        </Button>    
        </Stack>    
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
export default ButtonsBar1;              
