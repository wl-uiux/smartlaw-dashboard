import React from "react";            
import FocusLock from "react-focus-lock";            
import {            
 useDisclosure,           
 Box,           
 Popover,           
 PopoverTrigger,           
 PopoverContent,           
 PopoverArrow,           
 PopoverCloseButton,           
 Button,           
 ButtonGroup,           
 Stack,           
 FormControl,           
 FormLabel,           
 Input,           
IconButton,    
 EditIcon,           
} from "@chakra-ui/react";            
    const TextInput = React.forwardRef((props, ref) => {        
       return (     
        <FormControl>    
        <FormLabel htmlFor={props.id}>{props.label}</FormLabel>    
        <Input ref={ref} id={props.id} {...props} />    
        </FormControl>    
);
});
    const Form = ({ firstFieldRef, onCancel }) => {        
       return (     
        <Stack spacing={4}>    
<TextInput    
label=" First name "  
id="first-name"    
ref={firstFieldRef}    
defaultValue="John"    
/>
<TextInput label="Last name" id="last-name" defaultValue="Smith" />    
        <ButtonGroup d="flex" justifyContent="flex-end">    
        <Button variant="outline" onClick={onCancel}>    
Cancel   
        </Button>    
        <Button isDisabled colorScheme="teal">    
Save   
        </Button>    
        </ButtonGroup>    
        </Stack>    
);
};
    const PopoverForm = () => {        
   const { onOpen, onClose, isOpen } = useDisclosure();         
   const firstFieldRef = React.useRef(null);         
       return (     
        <>    
        <Box d="inline-block" mr={3}>    
Player One   
        </Box>    
        <Popover    
isOpen={isOpen}    
initialFocusRef={firstFieldRef}    
onOpen={onOpen}    
onClose={onClose}    
placement="right"    
closeOnBlur={false}    
>
        <PopoverTrigger>    
<IconButton size="sm" icon={< EditIcon  />} />  
        </PopoverTrigger>    
        <PopoverContent p={5}>    
        <FocusLock returnFocus persistentFocus={false}>    
        <PopoverArrow />    
        <PopoverCloseButton />    
        <Form firstFieldRef={firstFieldRef} onCancel={onClose} />    
        </FocusLock>    
        </PopoverContent>    
        </Popover>    
</>               
);
};
export default PopoverForm;              
