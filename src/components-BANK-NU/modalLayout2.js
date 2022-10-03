import React from "react";            
import {            
 useDisclosure,           
 Button,           
 Lorem,           
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
} from "@chakra-ui/react";            
      function ModalLayout3() {      
   const { isOpen, onOpen, onClose } = useDisclosure();         
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
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>    
        <ModalOverlay />    
        <ModalContent>    
        <ModalHeader> Modal Title </ModalHeader>  
        <ModalCloseButton />    
        <ModalBody>    
<Text fontWeight="bold" mb="1rem">    
LexDAO Scrolling Module   
        </Text>    
        <Lorem count={2} />    
        </ModalBody>    
        <ModalFooter>    
        <Button colorScheme="blue" mr={3} onClick={onClose}>    
Close   
        </Button>    
        <Button variant="ghost"> Secondary Action </Button>  
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
export default ModalLayout3;              
