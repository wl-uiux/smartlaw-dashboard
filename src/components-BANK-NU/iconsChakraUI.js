import React from "react";            
import {            
 Stack,           
 Spacer,           
 HStack,           
 Tooltip,           
 Icon,           
 Button,           
 ButtonGroup,           
} from "@chakra-ui/react";            
import { MdBuild, MdCall } from "react-icons/md";            
import {            
  AddIcon,          
  ArrowLeftIcon,          
  ArrowRightIcon,          
  ArrowUpDownIcon,          
  AtSignIcon,          
  AttachmentIcon,          
  BellIcon,          
  CalendarIcon,          
  ChatIcon,          
  CheckIcon,          
  CheckCircleIcon,          
  ChevronDownIcon,          
  ChevronLeftIcon,          
  ChevronRightIcon,          
  ChevronUpIcon,          
  CopyIcon,          
  DownloadIcon,          
  HamburgerIcon,          
  InfoIcon,          
  InfoOutlineIcon,          
  LinkIcon,          
  LockIcon,          
  PhoneIcon,          
  PlusSquareIcon,          
  QuestionIcon,          
  QuestionOutlineIcon,          
  RepeatIcon,          
  SearchIcon,          
  Search2Icon,          
  SettingsIcon,          
  SunIcon,          
  TriangleDownIcon,          
  TriangleUpIcon,          
  UnlockIcon,          
  UpDownIcon,          
  ViewIcon,          
  ViewOffIcon,          
  WarningIcon,          
  WarningTwoIcon,          
} from "@chakra-ui/icons";            
      function IconsChakraUI() {      
       return (     
        <HStack>    
        <Spacer/>    
        <HStack>    
        <ButtonGroup variant="outline" spacing="6">    
        <Button colorScheme="blue"> Save </Button>  
        <Button> Cancel </Button>  
        </ButtonGroup>    
<br/>               
<br/>               
<hr/>               
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
        </HStack>    
<br/>               
<br/>               
        <div>    
        <Tooltip    
label=" Click the LexDAO logo to zoom out of the donut. "  
aria-label=" LexDAO Hint and Tip "  
>
NavTip   
        </Tooltip>    
        </div>    
<br/>               
<hr/>               
<br/>               
        <div>    
<Icon as={ AddIcon } w={8} h={8} color="blue.500" />  
<Icon as={ ArrowLeftIcon } w={8} h={8} color="blue.500" />  
<Icon as={ ArrowRightIcon } w={8} h={8} color="blue.500" />  
<Icon as={ ArrowUpDownIcon } w={8} h={8} color="blue.500" />  
<Icon as={ AtSignIcon } w={8} h={8} color="blue.500" />  
<Icon as={ AttachmentIcon } w={8} h={8} color="blue.500" />  
<Icon as={ BellIcon } w={8} h={8} color="blue.500" />  
<Icon as={ CalendarIcon } w={8} h={8} color="blue.500" />  
<Icon as={ ChatIcon } w={8} h={8} color="blue.500" />  
<Icon as={ CheckIcon } w={8} h={8} color="blue.500" />  
<Icon as={ CheckCircleIcon } w={8} h={8} color="blue.500" />  
<Icon as={ ChevronDownIcon } w={8} h={8} color="blue.500" />  
<Icon as={ ChevronLeftIcon } w={8} h={8} color="blue.500" />  
<Icon as={ ChevronRightIcon } w={8} h={8} color="blue.500" />  
<Icon as={ ChevronUpIcon } w={8} h={8} color="blue.500" />  
<Icon as={ CopyIcon } w={8} h={8} color="blue.500" />  
<Icon as={ DownloadIcon } w={8} h={8} color="blue.500" />  
<Icon as={ HamburgerIcon } w={8} h={8} color="blue.500" />  
<Icon as={ InfoIcon } w={8} h={8} color="blue.500" />  
<Icon as={ InfoOutlineIcon } w={8} h={8} color="blue.500" />  
<Icon as={ LinkIcon } w={8} h={8} color="blue.500" />  
<Icon as={ LockIcon } w={8} h={8} color="blue.500" />  
<Icon as={ PhoneIcon } w={8} h={8} color="blue.500" />  
<Icon as={ PlusSquareIcon } w={8} h={8} color="blue.500" />  
<Icon as={ QuestionIcon } w={8} h={8} color="blue.500" />  
<Icon as={ QuestionOutlineIcon } w={8} h={8} color="blue.500" />  
<Icon as={ RepeatIcon } w={8} h={8} color="blue.500" />  
<Icon as={ SearchIcon } w={8} h={8} color="blue.500" />  
<Icon as={ Search2Icon } w={8} h={8} color="blue.500" />  
<Icon as={ SettingsIcon } w={8} h={8} color="blue.500" />  
<Icon as={ SunIcon } w={8} h={8} color="blue.500" />  
<Icon as={ TriangleDownIcon } w={8} h={8} color="blue.500" />  
<Icon as={ TriangleUpIcon } w={8} h={8} color="blue.500" />  
<Icon as={ UnlockIcon } w={8} h={8} color="blue.500" />  
<Icon as={ UpDownIcon } w={8} h={8} color="blue.500" />  
<Icon as={ ViewIcon } w={8} h={8} color="blue.500" />  
<Icon as={ ViewOffIcon } w={8} h={8} color="blue.500" />  
<Icon as={ WarningIcon } w={8} h={8} color="blue.500" />  
<Icon as={ WarningTwoIcon } w={8} h={8} color="blue.500" />  
        </div>    
        <Stack direction="row" spacing={4}>    
        <Button leftIcon={<MdBuild />} colorScheme="pink" variant="solid">    
Web3 Settings   
        </Button>    
        <Button rightIcon={<MdCall />} colorScheme="blue" variant="outline">    
Call LexDAO   
        </Button>    
        </Stack>    
        <HStack>    
        <ButtonGroup variant="outline" spacing="6">    
        <Button colorScheme="blue"> Save </Button>  
        <Button> Cancel </Button>  
        </ButtonGroup>    
        </HStack>    
        </HStack>    
);
}
export default IconsChakraUI;              
