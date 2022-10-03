import { ReactElement } from 'react';            
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';            
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';            
interface FeatureProps {            
     title: string;       
     text: string;       
icon: ReactElement;    
}
    const Feature = ({ title, text, icon }: FeatureProps) => {        
       return (     
        <Stack>    
        <Flex    
w={16}    
h={16}    
align={'center'}    
justify={'center'}    
color={'white'}    
rounded={'full'}    
bg={'gray.100'}    
mb={1}>    
{icon}    
        </Flex>    
<Text fontWeight={600}>{title}</Text>    
<Text color={'gray.600'}>{text}</Text>    
        </Stack>    
);
};
      function Feature2() {      
       return (     
        <Box p={4}>    
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>    
        <Feature    
icon={<Icon as={ FcAssistant} w={10} h={10} />}  
title={' Live Support '}  
text={    
'LexDAO 5 provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.'   
}
/>
        <Feature    
icon={<Icon as={ FcDonate} w={10} h={10} />}  
title={' Unlimited Donations '}  
text={    
'LexDAO 6 provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.'   
}
/>
        <Feature    
icon={<Icon as={ FcInTransit} w={10} h={10} />}  
title={' 34/7/365 Performance '}  
text={    
'LexDAO 7 provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.'   
}
/>
        </SimpleGrid>    
        </Box>    
);
}
export default Feature2;              
