import React from "react";            
import {            
 Spacer,           
 HStack,           
 Tooltip,           
 Icon,           
 Button,           
ButtonGroup   
} from "@chakra-ui/react";            
import {            
  FaAddressBook,          
  FaAddressCard,          
  FaAdjust,          
  FaBalanceScaleLeft,          
  FaBalanceScaleRight,          
  FaBalanceScale,          
  FaBullhorn,          
  FaBullseye,          
  FaCircleNotch,          
  FaCircle,          
  FaCog,          
  FaCogs,          
  FaCompass,          
  FaFingerprint,          
  FaGasPump,          
  FaGem,          
  FaGlobeAfrica,          
  FaGlobeAmericas,          
  FaGlobeAsia,          
  FaGlobeEurope,          
  FaIcons,          
  FaIdBadge,          
  FaIdCardAlt,          
  FaIdCard,          
  FaImage,          
  FaImages,          
} from "react-icons/fa";            
      function IconsFontAwesome2() {      
       return (     
        <HStack>    
        <Spacer/>    
        <div>    
        <Tooltip hasArrow label=" Search places " bg="red.600">  
        <Button> Button  </Button>  
        </Tooltip>    
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
<Icon as={ FaAddressBook } w={8} h={8} color="blue.500" />  
<Icon as={ FaAddressCard } w={8} h={8} color="blue.500" />  
<Icon as={ FaAdjust } w={8} h={8} color="blue.500" />  
<Icon as={ FaBalanceScaleLeft } w={8} h={8} color="blue.500" />  
<Icon as={ FaBalanceScaleRight } w={8} h={8} color="blue.500" />  
<Icon as={ FaBalanceScale } w={8} h={8} color="blue.500" />  
<Icon as={ FaBullhorn } w={8} h={8} color="blue.500" />  
<Icon as={ FaBullseye } w={8} h={8} color="blue.500" />  
<Icon as={ FaCircleNotch } w={8} h={8} color="blue.500" />  
<Icon as={ FaCircle } w={8} h={8} color="blue.500" />  
<Icon as={ FaCog } w={8} h={8} color="blue.500" />  
<Icon as={ FaCogs } w={8} h={8} color="blue.500" />  
<Icon as={ FaCompass } w={8} h={8} color="blue.500" />  
<Icon as={ FaFingerprint } w={8} h={8} color="blue.500" />  
<Icon as={ FaGasPump } w={8} h={8} color="blue.500" />  
<Icon as={ FaGem } w={8} h={8} color="blue.500" />  
<Icon as={ FaGlobeAfrica } w={8} h={8} color="blue.500" />  
<Icon as={ FaGlobeAmericas } w={8} h={8} color="blue.500" />  
<Icon as={ FaGlobeAsia } w={8} h={8} color="blue.500" />  
<Icon as={ FaGlobeEurope } w={8} h={8} color="blue.500" />  
<Icon as={ FaIcons } w={8} h={8} color="blue.500" />  
<Icon as={ FaIdBadge } w={8} h={8} color="blue.500" />  
<Icon as={ FaIdCardAlt } w={8} h={8} color="blue.500" />  
<Icon as={ FaIdCard } w={8} h={8} color="blue.500" />  
<Icon as={ FaImage } w={8} h={8} color="blue.500" />  
<Icon as={ FaImages } w={8} h={8} color="blue.500" />  
        </div>    
        <HStack>    
        <ButtonGroup variant="outline" spacing="6">    
        <Button colorScheme="blue"> Save </Button>  
        <Button> Cancel </Button>  
        </ButtonGroup>    
        </HStack>    
        <HStack>    
        </HStack>    
        </HStack>    
);
}
export default IconsFontAwesome2;              
