import React from "react";            
import {            
 useDisclosure,           
 Button,           
 Box,           
 Image,           
 Text,           
 Link,           
 Editable,           
 EditableInput,           
 EditablePreview,           
 Modal,           
 ModalOverlay,           
 ModalContent,           
 ModalHeader,           
 ModalFooter,           
 ModalBody,           
 ModalCloseButton,           
 FormControl,           
 FormLabel,           
 Input,           
} from "@chakra-ui/react";            
      function ModalLayout4() {      
   const { isOpen, onOpen, onClose } = useDisclosure();         
   const initialRef = React.useRef();         
   const finalRef = React.useRef();         
       return (     
        <Box p={4} display={{ md: "flex" }}>    
        <Box flexShrink={0}>    
<Image    
borderRadius="lg"    
width={{ md: 40 }}    
src=" https://bafybeibbsjwphabvlxbodddrtxo4mb7unoyrkx5swstlgqx563jv2sgwku.ipfs.infura-ipfs.io/ "  
alt=" LexDAO "  
/>
        </Box>    
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>    
<Text    
fontWeight="bold"    
textTransform="uppercase"    
fontSize="sm"    
letterSpacing="wide"    
color="yellow.600"    
>
Click to Edit    
        </Text>    
        <Editable defaultValue=" Type your message here:">   
        <EditablePreview />    
        <EditableInput />    
        </Editable>    
<Link    
mt={1}    
display="block"    
fontSize="lg"    
lineHeight="normal"    
fontWeight="semibold"    
href=" # "  
>
Finding Players and Patrons for LexDAO   
        </Link>    
<br/>               
        <Button onClick={onOpen}> Open Modal </Button>  
        <Button ml={4} ref={finalRef}>    
Temporary Reminder   
        </Button>    
        <Modal    
initialFocusRef={initialRef}    
finalFocusRef={finalRef}    
isOpen={isOpen}    
onClose={onClose}    
>
        <ModalOverlay />    
        <ModalContent>    
        <ModalHeader> Create your account </ModalHeader>  
        <ModalCloseButton />    
        <ModalBody pb={6}>    
        <FormControl>    
        <FormLabel> First name </FormLabel>  
        <Input ref={initialRef} placeholder="First name" />    
        </FormControl>    
        <FormControl mt={4}>    
        <FormLabel> Last name </FormLabel>  
        <Input placeholder="Last name" />    
        </FormControl>    
        </ModalBody>    
        <ModalFooter>    
        <Button colorScheme="blue" mr={3}>    
Save   
        </Button>    
        <Button onClick={onClose}> Cancel </Button>  
        </ModalFooter>    
        </ModalContent>    
        </Modal>    
<br/>               
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
        </Box>    
        </Box>    
);
}
export default ModalLayout4;              
