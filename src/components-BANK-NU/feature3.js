import { ReactNode } from 'react';            
import {            
 Stack,           
 Container,           
 Box,           
 Flex,           
 Text,           
 Heading,           
 SimpleGrid,           
} from '@chakra-ui/react';            
      function Feature3() {      
       return (     
        <Box bg={'gray.800'} position={'relative'}>    
        <Flex    
flex={1}    
zIndex={0}    
display={{ base: 'none', lg: 'flex' }}    
backgroundImage="url('/templates/stats-grid-with-image.png')"    
backgroundSize={'cover'}    
backgroundPosition="center"    
backgroundRepeat="no-repeat"    
position={'absolute'}    
width={'50%'}    
insetY={0}    
right={0}>    
        <Flex    
bgGradient={'linear(to-r, gray.800 10%, transparent)'}    
w={'full'}    
h={'full'}    
/>
        </Flex>    
        <Container maxW={'7xl'} zIndex={10} position={'relative'}>    
        <Stack direction={{ base: 'column', lg: 'row' }}>    
        <Stack    
flex={1}    
color={'gray.400'}    
justify={{ lg: 'center' }}    
py={{ base: 4, md: 20, xl: 60 }}>    
        <Box mb={{ base: 8, md: 20 }}>    
<Text    
fontFamily={'heading'}    
fontWeight={700}    
textTransform={'uppercase'}    
mb={3}    
fontSize={'xl'}    
color={'gray.500'}>    
Web3 Technology   
        </Text>    
        <Heading    
color={'white'}    
mb={5}    
fontSize={{ base: '3xl', md: '5xl' }}>    
LexDAO Data Management   
        </Heading>    
<Text fontSize={'xl'} color={'gray.400'}>    
LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.   
        </Text>    
        </Box>    
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>    
{stats.map((stat) => (    
        <Box key={stat.title}>    
<Text    
fontFamily={'heading'}    
fontSize={'3xl'}    
color={'white'}    
mb={3}>    
{stat.title}    
        </Text>    
<Text fontSize={'xl'} color={'gray.400'}>    
{stat.content}    
        </Text>    
        </Box>    
))}
        </SimpleGrid>    
        </Stack>    
        <Flex flex={1} />    
        </Stack>    
        </Container>    
        </Box>    
);
}
    const StatsText = ({ children }: { children: ReactNode }) => (        
<Text as={'span'} fontWeight={700} color={'white'}>    
{children}    
        </Text>    
);
    const stats = [        
{                
     title: '10S+',       
     content: (       
        <>    
        <StatsText> Modules  </StatsText> for detailed monitoring and real-time analytics 
</>               
),
},
{                
     Title: '24/777',       
     content: (       
        <>    
        <StatsText> Analytics  </StatsText> enabled the dashboard without history limitations 
</>               
),
},
{                
     Title: '00%',       
     content: (       
        <>    
        <StatsText> LexDAO  </StatsText> in North America has chosen LexDAO for Competitive Analysis 
</>               
),
},
{                
     title: '250S+',       
     content: (       
        <>    
        <StatsText> LexDAO  </StatsText> currently connected and monitored by LexDAO Applications 
</>               
),
},
];
export default Feature3;              
