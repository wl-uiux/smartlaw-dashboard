import React from "react";            
import {            
 Radio,           
 RadioGroup,           
 Stack,           
 Container,           
} from "@chakra-ui/react";            
      function ContentText4() {      
   const [value, setValue] = React.useState("1");         
       return (     
        <Container>    
        <div>    
        <RadioGroup onChange={setValue} value={value}>    
        <Stack direction="row">    
        <Radio value=" 1">First </Radio>  
        <Radio value=" 2">Second </Radio>  
        <Radio value=" 3">Third </Radio>  
        </Stack>    
        </RadioGroup>    
        <RadioGroup defaultValue="2">    
        <Stack spacing={5} direction="row">    
        <Radio colorScheme="red" value="1">    
Radio   
        </Radio>    
        <Radio colorScheme="green" value="2">    
Radio   
        </Radio>    
        </Stack>    
        </RadioGroup>    
        <Stack>    
        <Radio size="sm" name="1" colorScheme="red">    
Radio   
        </Radio>    
        <Radio size="md" name="1" colorScheme="green">    
Radio   
        </Radio>    
        <Radio size="lg" name="1" colorScheme="orange" defaultChecked>    
Radio   
        </Radio>    
        </Stack>    
        <RadioGroup defaultValue="1">    
        <Stack>    
        <Radio value="1" isDisabled>    
Checked   
        </Radio>    
        <Radio value=" 2">Unchecked </Radio>  
        <Radio value=" 3">Unchecked </Radio>  
        </Stack>    
        </RadioGroup>    
        <RadioGroup defaultValue="1">    
        <Stack spacing={4} direction="row">    
        <Radio value="1" isDisabled>    
Radio 1   
        </Radio>    
        <Radio value=" 2">Radio 2 </Radio>  
        <Radio value=" 3">Radio 3 </Radio>  
        </Stack>    
        </RadioGroup>    
        </div>    
        </Container>    
);
}
export default ContentText4;              
