import React from "react";            
import {            
 Input,           
 InputGroup,           
 InputRightElement,           
 Button,           
} from "@chakra-ui/react";            
      function FormPasswordInput() {      
   const [show, setShow] = React.useState(false)         
   const handleClick = () => setShow(!show)         
       return (     
        <InputGroup size="md" w="400px">    
        <Input    
pr="4.5rem"    
type={show ? "text" : "password"}    
placeholder=" Enter password "  
/>
        <InputRightElement width="4.5rem">    
        <Button h="1.75rem" colorScheme="messenger" size="sm" onClick={handleClick}>    
{show ? "Hide" : "Show"}    
        </Button>    
        </InputRightElement>    
        </InputGroup>    
)
}
export default FormPasswordInput;              
