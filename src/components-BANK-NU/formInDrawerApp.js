import React from "react";            
import {            
 useDisclosure,           
 Input,           
 Button,           
 Center,           
 Drawer,           
 DrawerBody,           
 DrawerFooter,           
 DrawerHeader,           
 DrawerOverlay,           
 DrawerContent,           
DrawerCloseButton   
} from "@chakra-ui/react";            
    const FormInDrawerApp = () => {        
   const { isOpen, onOpen, onClose } = useDisclosure()         
       return (     
        <Center>    
        <Button onClick={onOpen} variant="outline" color="lime" size="lg" > Open a Player Account </Button>  
        <Drawer isOpen={isOpen} onClose={onClose}>    
        <DrawerOverlay />    
        <DrawerContent>    
        <DrawerCloseButton />    
        <DrawerHeader> Create your account </DrawerHeader>  
        <DrawerBody>    
        <form    
id="my-form"    
onSubmit={(e) => {    
e.preventDefault()    
console.log("submitted")    
}}
>
        <Input name="nickname" placeholder="Type here..." />    
        </form>    
        </DrawerBody>    
        <DrawerFooter>    
        <Button type="submit" form="my-form">    
Save   
        </Button>    
        </DrawerFooter>    
        </DrawerContent>    
        </Drawer>    
        </Center>    
)
}
export default FormInDrawerApp;              
