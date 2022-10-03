import React from "react";            
import {            
 Box,           
 Image,           
 Text,           
 Link,           
 Editable,           
 EditableInput,           
 EditablePreview,           
 Wrap,           
 WrapItem,           
 HStack,           
 VStack,           
 Tooltip,           
 Button,           
} from "@chakra-ui/react";            
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";            
      function ToolTips1() {      
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
color="yellow"    
>
Tooltips Click to edit   
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
        <HStack>    
        <Tooltip label=" LexDAO Tip and Hint " aria-label="A tooltip">  
StateChange   
        </Tooltip>    
<br/>               
        <Tooltip label=" LexDAO Phone number " fontSize="md">  
        <PhoneIcon />    
        </Tooltip>    
<br/>               
        <Tooltip hasArrow label=" Search places " bg="gray.300" color="black">  
        <SearchIcon />    
        </Tooltip>    
<br/>               
        <Tooltip hasArrow label=" Search places " bg="red.600">  
        <Button colorScheme="blue"> Button </Button>  
        </Tooltip>    
<br/>               
<br/>               
        <VStack color="blue" spacing={6}>    
        <HStack spacing={6}>    
        <Tooltip label=" LexDAO Auto-Start " placement="auto-start">  
        <Button> Auto-Start </Button>  
        </Tooltip>    
        <Tooltip label=" LexDAO Auto " placement="auto">  
        <Button> Auto </Button>  
        </Tooltip>    
        <Tooltip label=" LexDAO Auto-End " placement="auto-end">  
        <Button> Auto-End </Button>  
        </Tooltip>    
        </HStack>    
        <HStack spacing={6}>    
        <Tooltip label=" LexDAO Top start " placement="top-start">  
        <Button> Top-Start </Button>  
        </Tooltip>    
        <Tooltip label=" LexDAO Top " placement="top">  
        <Button> Top </Button>  
        </Tooltip>    
        <Tooltip label=" LexDAO Top end " placement="top-end">  
        <Button> Top-End </Button>  
        </Tooltip>    
        </HStack>    
        <HStack spacing={6}>    
        <Tooltip label=" LexDAO Right start " placement="right-start">  
        <Button> Right-Start </Button>  
        </Tooltip>    
        <Tooltip label=" LexDAO Right " placement="right">  
        <Button> Right </Button>  
        </Tooltip>    
        <Tooltip label=" LexDAO Right end " placement="right-end">  
        <Button> Right-End </Button>  
        </Tooltip>    
        </HStack>    
        <HStack spacing={6}>    
        <Tooltip label=" LexDAO Bottom-Start " placement="bottom-start">  
        <Button> Bottom Start </Button>  
        </Tooltip>    
        <Tooltip label=" LexDAO Bottom " placement="bottom">  
        <Button> Bottom </Button>  
        </Tooltip>    
        <Tooltip label=" LexDAO Bottom-End " placement="bottom-end">  
        <Button> Bottom End </Button>  
        </Tooltip>    
        </HStack>    
        <HStack spacing={6}>    
        <Tooltip label=" LexDAO Left-start " placement="left-start">  
        <Button> Left-Start </Button>  
        </Tooltip>    
        <Tooltip label=" LexDAO Left " placement="left">  
        <Button> Left </Button>  
        </Tooltip>    
        <Tooltip label=" LexDAO Left-end " placement="left-end">  
        <Button> Left-End </Button>  
        </Tooltip>    
        </HStack>    
        </VStack>    
<br/>               
<br/>               
        <Wrap color="blue" spacing={6}>    
        <WrapItem>    
        <Tooltip label=" Closable Reminder ">  
        <Button> Close on Click - true(default) </Button>  
        </Tooltip>    
        </WrapItem>    
        <WrapItem>    
        <Tooltip label=" Reminder " closeOnClick={false}>  
        <Button> Close on Click - false </Button>  
        </Tooltip>    
        </WrapItem>    
        <WrapItem>    
        <Tooltip label=" Always Visible " placement="top" isOpen>  
        <Button> Always Open </Button>  
        </Tooltip>    
        </WrapItem>    
        <WrapItem>    
        <Tooltip    
label=" LexDAO Default Open "  
placement="left"    
defaultIsOpen   
>
        <Button> Open on startup </Button>  
        </Tooltip>    
        </WrapItem>    
        <WrapItem>    
        <Tooltip label=" Opened after 500ms " openDelay={500}>  
        <Button> Delay Open - 500ms </Button>  
        </Tooltip>    
        </WrapItem>    
        <WrapItem>    
        <Tooltip label=" Closed 500ms " closeDelay={500}>  
        <Button> Delay Close - 500ms </Button>  
        </Tooltip>    
        </WrapItem>    
        <WrapItem>    
        <Tooltip label=" Arrow Note " hasArrow arrowSize={15}>  
        <Button> Arrow size - 15px </Button>  
        </Tooltip>    
        </WrapItem>    
        </Wrap>    
        </HStack>    
<br/>               
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways LexDAO participants are found.   
        </Text>    
        </Box>    
        </Box>    
);
}
export default ToolTips1;              
