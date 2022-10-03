import React from "react";            
import {            
 Stack,           
 Spacer,           
 HStack,           
 Tooltip,           
 Button,           
 ButtonGroup,           
} from "@chakra-ui/react";            
import { MdBuild, MdCall } from "react-icons/md";            
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";            
      function ButtonsBar3() {      
       return (     
        <HStack>    
        <Spacer/>    
<br/>               
<hr/>               
<br/>               
        <Tooltip label=" LexDAO Phone number " fontSize="md">  
        <PhoneIcon />    
        </Tooltip>    
        <Tooltip hasArrow label=" Search places " bg="gray.300" color="black">  
        <SearchIcon />    
        </Tooltip>    
        <Tooltip hasArrow label=" Search places " bg="red.600">  
        <Button    
border="2px"    
borderColor="green.500"    
backgroundColor="orange.500"    
>
Button   
        </Button>    
        </Tooltip>    
        <HStack>    
        <Button    
size="md"    
height="48px"    
width="200px"    
border="2px"    
borderColor="green.500"    
backgroundColor="red.500"    
>
NewButton   
        </Button>    
        </HStack>    
        <HStack>    
        <Stack direction="row" spacing={4}>    
        <Button isLoading colorScheme="teal" variant="solid">    
Email   
        </Button>    
        <Button    
isLoading    
loadingText="Submitting"    
colorScheme="teal"    
variant="outline"    
>
Submit   
        </Button>    
        </Stack>    
        </HStack>    
        <Button    
isLoading    
colorScheme="blue"    
spinner={<MdBuild size={8} color="white" />}    
>
Click for ButtonsBar   
        </Button>    
        <HStack>    
        <Stack direction="row" spacing={4} align="center">    
        <Button    
isLoading    
loadingText="Loading"    
colorScheme="teal"    
variant="outline"    
spinnerPlacement="start"    
>
Submit   
        </Button>    
        <Button    
isLoading    
loadingText="Loading"    
colorScheme="teal"    
variant="outline"    
spinnerPlacement="end"    
>
Continue   
        </Button>    
        </Stack>    
        </HStack>    
        <HStack>    
        <ButtonGroup variant="outline" spacing="6">    
        <Button colorScheme="blue"> Save </Button>  
        <Button> Cancel </Button>  
        </ButtonGroup>    
        </HStack>    
        <HStack></HStack>    
        <Stack direction="row" spacing={4}>    
        <Button leftIcon={<MdBuild />} colorScheme="teal" variant="solid">    
Email   
        </Button>    
        <Button rightIcon={<MdCall />} colorScheme="teal" variant="outline">    
Call LexDAO   
        </Button>    
        </Stack>    
        <Stack direction="row" spacing={4}>    
        <Button leftIcon={<MdBuild />} colorScheme="pink" variant="solid">    
Web3 Settings   
        </Button>    
        <Button rightIcon={<MdCall />} colorScheme="blue" variant="outline">    
Call LexDAO   
        </Button>    
        </Stack>    
        </HStack>    
);
}
export default ButtonsBar3;              
