import React from "react";            
import {            
 Button,           
} from "@chakra-ui/react";            
import {CheckIcon} from '@chakra-ui/icons'            
      function VisuallyHidden() {      
       return (     
        <Button>    
        <VisuallyHidden>Checkmark</VisuallyHidden>    
        <CheckIcon />    
        </Button>    
)
}
export default VisuallyHidden;              
