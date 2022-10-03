import React from "react";            
import {            
 Box,           
 Image,           
 Text,           
 Link,           
 Editable,           
 EditableInput,           
 EditablePreview,           
 Table,           
 Thead,           
 Tbody,           
 Tfoot,           
 Tr,           
 Th,           
 Td,           
 TableCaption,           
} from "@chakra-ui/react";            
      function ProfileLayout2() {      
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
<br/>               
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
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
        <Table variant="simple">    
        <TableCaption> Imperial to metric conversion factors </TableCaption>  
        <Thead>    
        <Tr>    
        <Th> To convert </Th>  
        <Th> into </Th>  
        <Th isNumeric> multiply by </Th>  
        </Tr>    
        </Thead>    
        <Tbody>    
        <Tr>    
        <Td> units </Td>  
        <Td> units (u) </Td>  
        <Td isNumeric> 400 </Td>  
        </Tr>    
        <Tr>    
        <Td> units </Td>  
        <Td> units (u) </Td>  
        <Td isNumeric> 400 </Td>  
        </Tr>    
        <Tr>    
        <Td> units </Td>  
        <Td> units (u) </Td>  
        <Td isNumeric> 400 </Td>  
        </Tr>    
        </Tbody>    
        <Tfoot>    
        <Tr>    
        <Th> To convert </Th>  
        <Th> into </Th>  
        <Th isNumeric> multiply by </Th>  
        </Tr>    
        </Tfoot>    
        </Table>    
<br/>               
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
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
        <Table variant="striped" color="gray" colorScheme="blue">    
        <TableCaption> Imperial to metric conversion factors </TableCaption>  
        <Thead>    
        <Tr>    
        <Th> To convert </Th>  
        <Th> into </Th>  
        <Th isNumeric> multiply by </Th>  
        </Tr>    
        </Thead>    
        <Tbody>    
        <Tr>    
        <Td> units </Td>  
        <Td> units (u) </Td>  
        <Td isNumeric> 400 </Td>  
        </Tr>    
        <Tr>    
        <Td> units </Td>  
        <Td> units (u) </Td>  
        <Td isNumeric> 400 </Td>  
        </Tr>    
        <Tr>    
        <Td> units </Td>  
        <Td> units (u) </Td>  
        <Td isNumeric> 400 </Td>  
        </Tr>    
        </Tbody>    
        <Tfoot>    
        <Tr>    
        <Th> To convert </Th>  
        <Th> into </Th>  
        <Th isNumeric> multiply by </Th>  
        </Tr>    
        </Tfoot>    
        </Table>    
<br/>               
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
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
        <Table size="sm">    
        <Thead>    
        <Tr>    
        <Th> To convert </Th>  
        <Th> into </Th>  
        <Th isNumeric> multiply by </Th>  
        </Tr>    
        </Thead>    
        <Tbody>    
        <Tr>    
        <Td> units </Td>  
        <Td> units (u) </Td>  
        <Td isNumeric> 400 </Td>  
        </Tr>    
        <Tr>    
        <Td> units </Td>  
        <Td> units (u) </Td>  
        <Td isNumeric> 400 </Td>  
        </Tr>    
        <Tr>    
        <Td> units </Td>  
        <Td> units (u) </Td>  
        <Td isNumeric> 400 </Td>  
        </Tr>    
        </Tbody>    
        <Tfoot>    
        <Tr>    
        <Th> To convert </Th>  
        <Th> into </Th>  
        <Th isNumeric> multiply by </Th>  
        </Tr>    
        </Tfoot>    
        </Table>    
<br/>               
<br/>               
<br/>               
        </Box>    
        </Box>    
);
}
export default ProfileLayout2;              
