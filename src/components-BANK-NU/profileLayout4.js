import React from "react";            
import {            
 Box,           
 Image,           
 Text,           
 Link,           
 Editable,           
 EditableInput,           
 EditablePreview,           
 AlertDialog,           
 AlertDialogBody,           
 AlertDialogFooter,           
 AlertDialogHeader,           
 AlertDialogContent,           
 AlertDialogOverlay,           
 Button,           
} from "@chakra-ui/react";            
      function ProfileLayout4() {      
   const [isOpen, setIsOpen] = React.useState(false);         
   const onClose = () => setIsOpen(false);         
   const cancelRef = React.useRef();         
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
        <Button colorScheme="red" onClick={() => setIsOpen(true)}>    
Delete Customer   
        </Button>    
        <AlertDialog    
isOpen={isOpen}    
leastDestructiveRef={cancelRef}    
onClose={onClose}    
>
        <AlertDialogOverlay>    
        <AlertDialogContent>    
        <AlertDialogHeader fontSize="lg" fontWeight="bold">    
Delete Customer   
        </AlertDialogHeader>    
        <AlertDialogBody>    
Are you sure? You can't undo this action.   
        </AlertDialogBody>    
        <AlertDialogFooter>    
        <Button ref={cancelRef} onClick={onClose}>    
Cancel   
        </Button>    
        <Button colorScheme="red" onClick={onClose} ml={3}>    
Delete   
        </Button>    
        </AlertDialogFooter>    
        </AlertDialogContent>    
        </AlertDialogOverlay>    
        </AlertDialog>    
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
        </Box>    
        </Box>    
);
}
export default ProfileLayout4;              
