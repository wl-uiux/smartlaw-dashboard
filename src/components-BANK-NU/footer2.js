import React from "react";            
import {            
 Stack,           
 Spacer,           
 HStack,           
 Tooltip,           
 Icon,           
 Button,           
 ButtonGroup,           
} from "@chakra-ui/react";            
import {            
  WiAlien,          
  WiBarometer,          
  WiEarthquake,          
  WiFire,          
  WiHorizonAlt,          
  WiHorizon,          
  WiLightning,          
  WiMoonAltFull,          
  WiSolarEclipse,          
  WiStars,          
  WiTime6,          
  WiWindDeg,          
} from "react-icons/wi";            
      function Footer2() {      
       return (     
        <HStack>    
        <Spacer/>    
        <div>    
        <Button colorScheme="blue"> Button </Button>  
        </div>    
        <div>    
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
        </div>    
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
        <div>    
<Icon as={ WiAlien } w={8} h={8} color="blue.500" />  
<Icon as={ WiBarometer } w={8} h={8} color="blue.500" />  
<Icon as={ WiEarthquake } w={8} h={8} color="blue.500" />  
<Icon as={ WiFire } w={8} h={8} color="blue.500" />  
<Icon as={ WiHorizonAlt } w={8} h={8} color="blue.500" />  
<Icon as={ WiHorizon } w={8} h={8} color="blue.500" />  
<Icon as={ WiLightning } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltFull } w={8} h={8} color="blue.500" />  
<Icon as={ WiSolarEclipse } w={8} h={8} color="blue.500" />  
<Icon as={ WiStars } w={8} h={8} color="blue.500" />  
<Icon as={ WiTime6 } w={8} h={8} color="blue.500" />  
<Icon as={ WiWindDeg } w={8} h={8} color="blue.500" />  
        </div>    
        <HStack>    
        <ButtonGroup variant="outline" spacing="6">    
        <Button colorScheme="blue"> Save </Button>  
        <Button> Cancel </Button>  
        </ButtonGroup>    
        </HStack>    
        <HStack></HStack>    
        <Stack spacing={4} direction="row" align="center">    
        <Button colorScheme="teal" size="xs">    
Button   
        </Button>    
        <Button colorScheme="teal" size="sm">    
Button   
        </Button>    
        <Button colorScheme="teal" size="md">    
Button   
        </Button>    
        <Button colorScheme="teal" size="lg">    
Button   
        </Button>    
        </Stack>    
        </HStack>    
);
}
export default Footer2;              
