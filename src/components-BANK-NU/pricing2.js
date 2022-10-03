import { ReactNode } from 'react';            
import {            
 Box,           
 Stack,           
 HStack,           
 Heading,           
 Text,           
 VStack,           
 useColorModeValue,           
 List,           
 ListItem,           
 ListIcon,           
 Button,           
} from '@chakra-ui/react';            
import { FaCheckCircle } from 'react-icons/fa';            
      function PriceWrapper({ children }: { children: ReactNode }) {      
       return (     
        <Box    
mb={4}    
shadow="base"    
borderWidth="1px"    
alignSelf={{ base: 'center', lg: 'flex-start' }}    
borderColor={useColorModeValue('gray.200', 'gray.500')}    
borderRadius={'xl'}>    
{children}    
        </Box>    
);
}
      function Pricing2() {      
       return (     
        <Box py={12}>    
        <VStack spacing={2} textAlign="center">    
        <Heading as="h1" fontSize="4xl">    
LexDAO Service Plans that fit a full-stack developer needs.   
        </Heading>    
<Text fontSize="lg" color={'gray.500'}>    
Start with free trial. No credit card needed. Connect your address now.   
        </Text>    
        </VStack>    
        <Stack    
direction={{ base: 'column', md: 'row' }}    
textAlign="center"    
justify="center"    
spacing={{ base: 4, lg: 10 }}    
py={10}>    
        <PriceWrapper>    
        <Box py={4} px={12}>    
<Text fontWeight="500" fontSize="2xl">    
Strategic Initiatives   
        </Text>    
        <HStack justifyContent="center">    
<Text fontSize="3xl" fontWeight="600">    
$   
        </Text>    
<Text fontSize="5xl" fontWeight="900">    
79   
        </Text>    
<Text fontSize="3xl" color="gray.500">    
/time_period   
        </Text>    
        </HStack>    
        </Box>    
        <VStack    
bg={useColorModeValue('gray.50', 'gray.700')}    
py={4}    
borderBottomRadius={'xl'}>    
        <List spacing={3} textAlign="start" px={12}>    
        <ListItem>    
<ListIcon as={ FaCheckCircle } color="green.500" />  
Unlimited Blockchain Interactions   
        </ListItem>    
        <ListItem>    
<ListIcon as={ FaCheckCircle } color="green.500" />  
LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.   
        </ListItem>    
        <ListItem>    
<ListIcon as={ FaCheckCircle } color="green.500" />  
LexDAO Pricing Matrix   
        </ListItem>    
        </List>    
        <Box w="80%" pt={7}>    
        <Button w="full" colorScheme="red" variant="outline">    
Interact with LexDAO Now   
        </Button>    
        </Box>    
        </VStack>    
        </PriceWrapper>    
        <PriceWrapper>    
        <Box position="relative">    
        <Box    
position="absolute"    
top="-16px"    
left="50%"    
style={{ transform: 'translate(-50%)' }}>    
<Text    
textTransform="uppercase"    
bg={useColorModeValue('red.300', 'red.700')}    
px={3}    
py={1}    
color={useColorModeValue('gray.900', 'gray.300')}    
fontSize="sm"    
fontWeight="600"    
rounded="xl">    
Most Popular   
        </Text>    
        </Box>    
        <Box py={4} px={12}>    
<Text fontWeight="500" fontSize="2xl">    
Growth   
        </Text>    
        <HStack justifyContent="center">    
<Text fontSize="3xl" fontWeight="600">    
$   
        </Text>    
<Text fontSize="5xl" fontWeight="900">    
149   
        </Text>    
<Text fontSize="3xl" color="gray.500">    
/time_period   
        </Text>    
        </HStack>    
        </Box>    
        <VStack    
bg={useColorModeValue('gray.50', 'gray.700')}    
py={4}    
borderBottomRadius={'xl'}>    
        <List spacing={3} textAlign="start" px={12}>    
        <ListItem>    
<ListIcon as={ FaCheckCircle } color="green.500" />  
Unlimited Blockchain Interactions   
        </ListItem>    
        <ListItem>    
<ListIcon as={ FaCheckCircle } color="green.500" />  
LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.   
        </ListItem>    
        <ListItem>    
<ListIcon as={ FaCheckCircle } color="green.500" />  
LexDAO Pricing Matrix   
        </ListItem>    
        <ListItem>    
<ListIcon as={ FaCheckCircle } color="green.500" />  
LexDAO Pricing Matrix   
        </ListItem>    
        <ListItem>    
<ListIcon as={ FaCheckCircle } color="green.500" />  
LexDAO Pricing Matrix   
        </ListItem>    
        </List>    
        <Box w="80%" pt={7}>    
        <Button w="full" colorScheme="red">    
Interact with LexDAO Now   
        </Button>    
        </Box>    
        </VStack>    
        </Box>    
        </PriceWrapper>    
        <PriceWrapper>    
        <Box py={4} px={12}>    
<Text fontWeight="500" fontSize="2xl">    
Scale   
        </Text>    
        <HStack justifyContent="center">    
<Text fontSize="3xl" fontWeight="600">    
$   
        </Text>    
<Text fontSize="5xl" fontWeight="900">    
349   
        </Text>    
<Text fontSize="3xl" color="gray.500">    
/time_period   
        </Text>    
        </HStack>    
        </Box>    
        <VStack    
bg={useColorModeValue('gray.50', 'gray.700')}    
py={4}    
borderBottomRadius={'xl'}>    
        <List spacing={3} textAlign="start" px={12}>    
        <ListItem>    
<ListIcon as={ FaCheckCircle } color="green.500" />  
Unlimited Blockchain Interactions   
        </ListItem>    
        <ListItem>    
<ListIcon as={ FaCheckCircle } color="green.500" />  
LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.   
        </ListItem>    
        <ListItem>    
<ListIcon as={ FaCheckCircle } color="green.500" />  
LexDAO Pricing Matrix   
        </ListItem>    
        </List>    
        <Box w="80%" pt={7}>    
        <Button w="full" colorScheme="red" variant="outline">    
Interact with LexDAO Now   
        </Button>    
        </Box>    
        </VStack>    
        </PriceWrapper>    
        </Stack>    
        </Box>    
);
}
export default Pricing2;              
