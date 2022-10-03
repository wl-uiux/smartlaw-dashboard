import React from "react";            
import {            
 usePrefersReducedMotion,           
props,    
keyframes,    
 Box,           
 Image,           
 Link,           
 Editable,           
 EditableInput,           
 EditablePreview,           
 CircularProgress,           
 CircularProgressLabel,           
 Wrap,           
 HStack,           
 Text,           
} from "@chakra-ui/react";            
import logo1 from "../images/050-donut-1.svg"            
import logo2 from "../images/050-donut-2.svg"            
import logo3 from "../images/051-donut.svg"            
import logo4 from "../images/052-donut-1.svg"            
import logo5 from "../images/053-donut-2.svg"            
import logo6 from "../images/054-donut-3.svg"            
import logo7 from "../images/055-doughnut.svg"            
import logo8 from "../images/056-donut-4.svg"            
import logo9 from "../images/057-donut-5.svg"            
import logo10 from "../images/058-donut-6.svg"            
import logo11 from "../images/059-donut-7.svg"            
import logo12 from "../images/060-doughnut-1.svg"            
import logo13 from "../images/061-octopus.svg"            
import logo14 from "../images/062-octopus-1.svg"            
import logo15 from "../images/063-octopus-2.svg"            
import logo16 from "../images/064-octopus-3.svg"            
import logo17 from "../images/065-octopus-4.svg"            
import logo18 from "../images/066-octopus-5.svg"            
import logo19 from "../images/067-octopus-6.svg"            
import logo20 from "../images/068-kraken.svg"            
import logo21 from "../images/069-octopus-7.svg"            
import logo22 from "../images/070-octopus-8.svg"            
import logo23 from "../images/071-kraken-1.svg"            
import logo24 from "../images/074-danger.svg"            
import logo25 from "../images/076-skull-1.svg"            
import logo26 from "../images/081-pallete.svg"            
import logo27 from "../images/083-pallete-2.svg"            
import logo28 from "../images/087-architect.svg"            
import logo29 from "../images/090-builder-2.svg"            
import logo30 from "../images/092-builder-4.svg"            
import logo31 from "../images/094-writing.svg"            
import logo32 from "../images/095-scroll.svg"            
import logo33 from "../images/096-scroll-1.svg"            
import logo34 from "../images/099-magic-wand-1.svg"            
import logo35 from "../images/100-magic-wand-2.svg"            
import logo36 from "../images/102-bartender.svg"            
import logo37 from "../images/104-support.svg"            
import logo38 from "../images/107-support-1.svg"            
import logo39 from "../images/109-headhunter.svg"            
import logo40 from "../images/110-headhunter-1.svg"            
import logo41 from "../images/111-headhunter-2.svg"            
import logo42 from "../images/114-promotion.svg"            
import logo43 from "../images/115-megaphone.svg"            
import logo44 from "../images/116-megaphone-1.svg"            
import logo45 from "../images/117-megaphone-2.svg"            
import logo46 from "../images/118-bullhorn.svg"            
import logo47 from "../images/119-graphic-designer.svg"            
import logo48 from "../images/120-graphic-designer-1.svg"            
import logo50 from "../images/123-graphic-designer-3.svg"            
import logo51 from "../images/124-designer.svg"            
import logo52 from "../images/130-grim-reaper-2.svg"            
import logo53 from "../images/131-grim-reaper-3.svg"            
import logo54 from "../images/134-reaper.svg"            
import logo55 from "../images/138-wings.svg"            
import logo56 from "../images/139-wings-1.svg"            
import logo57 from "../images/140-fairy.svg"            
import logo58 from "../images/141-fairy-1.svg"            
import logo59 from "../images/142-fairy-2.svg"            
import logo60 from "../images/143-fairy-3.svg"            
import logo62 from "../images/145-fairy-5.svg"            
import logo63 from "../images/166-kraken-2.svg"            
import logo64 from "../images/167-octopus-9.svg"            
import logo65 from "../images/168-octopus-10.svg"            
import logo66 from "../images/169-kraken-3.svg"            
import logo67 from "../images/170-octopus-11.svg"            
import logo68 from "../images/171-octopus-12.svg"            
import logo69 from "../images/172-octopus-13.svg"            
import logo70 from "../images/173-octopus-14.svg"            
import logo71 from "../images/174-octopus-15.svg"            
import logo72 from "../images/175-megaphone-3.svg"            
import logo73 from "../images/176-wings-2.svg"            
import logo74 from "../images/177-trident-1.svg"            
import logo75 from "../images/178-plus-2.svg"            
import logo76 from "../images/179-equal-1.svg"            
import logo77 from "../images/180-parenthesis-2.svg"            
import logo78 from "../images/181-parenthesis-3.svg"            
import logo79 from "../images/182-tree-shape-with-leaves-1.svg"            
import logo80 from "../images/183-branch-2.svg"            
import logo81 from "../images/184-fairy-6.svg"            
import logo82 from "../images/185-grim-reaper-6.svg"            
import logo83 from "../images/186-graphic-designer-4.svg"            
import logo84 from "../images/187-megaphone-4.svg"            
import logo85 from "../images/188-headhunter-4.svg"            
import logo86 from "../images/189-call-center-agent-1.svg"            
import logo87 from "../images/190-support-2.svg"            
import logo88 from "../images/191-writing-1.svg"            
import logo89 from "../images/192-builder-5.svg"            
import logo90 from "../images/193-worker-1.svg"            
import logo91 from "../images/194-plumber-1.svg"            
import logo92 from "../images/195-pallete-3.svg"            
import logo96 from "../images/199-skull-4.svg"            
import logo97 from "../images/200-devil.svg"            
import logo101 from "../images/204-skull-7.svg"            
import logo102 from "../images/205-danger-1.svg"            
import logo104 from "../images/207-octopus-16.svg"            
import logo105 from "../images/208-octopus-17.svg"            
import logo106 from "../images/designer.png"            
import logo107 from "../images/expert-cover@2x.png"            
import logo108 from "../images/expert-cover.png"            
import logo109 from "../images/logo.svg"            
import logo110 from "../images/mimc@2x.jpg"            
import logo111 from "../images/mimc.jpg"            
import logo112 from "../images/parenthesis-l1.svg"            
import logo113 from "../images/parenthesis-l2.svg"            
import logo114 from "../images/parenthesis-l3.svg"            
import logo115 from "../images/parenthesis-r1.svg"            
import logo116 from "../images/parenthesis-r2.svg"            
import logo117 from "../images/parenthesis-r3.svg"            
import logo118 from "../images/plus1.svg"            
import logo119 from "../images/plus2.svg"            
import logo120 from "../images/plus3.svg"            
import logo121 from "../images/scst@2x.jpg"            
import logo122 from "../images/scst@2x.png"            
import logo126 from "../images/ss-200x-aj.jpg"            
import logo127 from "../images/ss-200x-js.jpg"            
import logo128 from "../images/ss-200x-js.png"            
import logo129 from "../images/ss-200x-ks.png"            
import logo130 from "../images/ss-400x-aj.jpg"            
import logo131 from "../images/ss-400x-js@2x.jpg"            
import logo132 from "../images/ss-400x-js@2x.png"            
import logo133 from "../images/ss-400x-js.jpg"            
import logo134 from "../images/ss-400x-ks.png"            
import logo135 from "../images/tree1.svg"            
import logo136 from "../images/tree2.svg"            
import logo137 from "../images/tree3.svg"            
import logo138 from "../images/Web3bits-05-blue.png"            
import logo139 from "../images/Web3bits-05-cyan.png"            
import logo140 from "../images/Web3bits-05-drkblue.png"            
import logo141 from "../images/Web3bits-05-drkgreen.png"            
import logo142 from "../images/Web3bits-05-gray.png"            
import logo143 from "../images/Web3bits-05-green.png"            
import logo144 from "../images/Web3bits-05-ltgreen.png"            
import logo145 from "../images/Web3bits-05-orange.png"            
import logo146 from "../images/Web3bits-05-paleblue.png"            
import logo147 from "../images/Web3bits-05-red2.png"            
import logo148 from "../images/Web3bits-05-red.png"            
import logo151 from "../images/zeus1.svg"            
import logo152 from "../images/zeus2.svg"            
import logo153 from "../images/zeus3.svg"            
import logo154 from "../images/zeus4.svg"            
import logo155 from "../images/zeus5.svg"            
import logo156 from "../images/zeus6.svg"            
import logo157 from "../images/zeus.svg"            
   const spin = keyframes`         
from { transform: rotate(0deg); }    
to { transform: rotate(360deg); }    
`    
      function HookMotionPref() {      
   const prefersReducedMotion = usePrefersReducedMotion()         
   const animation = prefersReducedMotion         
? undefined    
: `${spin} infinite 20s linear`    
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
HookMergeRef Click to edit   
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
        <Box>    
        <HStack>    
        <Wrap maxWidth="1600">    
<Image maxWidth="200px" animation={animation} src={logo1} {...props} />    
<Image maxWidth="200px" animation={animation} src={logo2} {...props} />    
<Image maxWidth="200px" animation={animation} src={logo3} {...props} />    
<Image maxWidth="200px" animation={animation} src={logo4} {...props} />    
<Image maxWidth="200px" animation={animation} src={logo5} {...props} />    
<Image maxWidth="200px" animation={animation} src={logo6} {...props} />    
<Image maxWidth="200px" animation={animation} src={logo7} {...props} />    
<Image maxWidth="200px" animation={animation} src={logo8} {...props} />    
<Image maxWidth="200px" animation={animation} src={logo9} {...props} />    
<Image maxWidth="200px" animation={animation} src={logo10} {...props} />    
        </Wrap>    
        </HStack>    
        </Box>    
<br/>               
<hr/>               
<br/>               
        <Box>    
        <HStack>    
        <Wrap maxWidth="1600">    
<Image maxWidth="200px" animation={animation} src={logo11} {...props} />    
<Image maxWidth="200px" animation={animation} src={logo12} {...props} />    
<Image maxWidth="200px" animation={animation} src={logo13} {...props} />    
<Image maxWidth="200px" animation={animation} src={logo14} {...props} />    
<Image maxWidth="200px" animation={animation} src={logo15} {...props} />    
<Image maxWidth="200px" animation={animation} src={logo16} {...props} />    
<Image maxWidth="200px" animation={animation} src={logo17} {...props} />    
<Image maxWidth="200px" animation={animation} src={logo18} {...props} />    
<Image maxWidth="200px" animation={animation} src={logo19} {...props} />    
<Image maxWidth="200px" animation={animation} src={logo20} {...props} />    
        </Wrap>    
        </HStack>    
        </Box>    
<br/>               
<br/>               
<hr/>               
<br/>               
        <Box>    
        <HStack>    
        <Wrap maxWidth="1600">    
<Image maxWidth="180px" animation={animation} src={logo51} {...props} />    
<Image maxWidth="180px" animation={animation} src={logo52} {...props} />    
<Image maxWidth="180px" animation={animation} src={logo53} {...props} />    
<Image maxWidth="180px" animation={animation} src={logo54} {...props} />    
<Image maxWidth="180px" animation={animation} src={logo55} {...props} />    
<Image maxWidth="180px" animation={animation} src={logo56} {...props} />    
<Image maxWidth="180px" animation={animation} src={logo57} {...props} />    
<Image maxWidth="180px" animation={animation} src={logo58} {...props} />    
<Image maxWidth="180px" animation={animation} src={logo59} {...props} />    
<Image maxWidth="180px" animation={animation} src={logo60} {...props} />    
        </Wrap>    
        </HStack>    
        </Box>    
<br/>               
<hr/>               
<br/>               
        <Box>    
        <HStack>    
        <Wrap maxWidth="1600">    
<Image maxWidth="80px" animation={animation} src={logo1} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo2} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo3} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo4} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo5} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo6} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo7} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo8} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo9} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo10} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo11} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo12} {...props} />    
        </Wrap>    
        </HStack>    
        </Box>    
<br/>               
<br/>               
        <Box>    
        <HStack>    
        <Wrap maxWidth="1600">    
<Image maxWidth="80px" animation={animation} src={logo13} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo14} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo15} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo16} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo17} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo18} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo19} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo20} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo21} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo22} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo23} {...props} />    
        </Wrap>    
        </HStack>    
        </Box>    
<br/>               
<br/>               
        <Box>    
        <HStack>    
        <Wrap maxWidth="1600">    
<Image maxWidth="80px" animation={animation} src={logo63} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo64} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo65} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo66} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo67} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo68} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo69} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo70} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo71} {...props} />    
        </Wrap>    
        </HStack>    
        </Box>    
<br/>               
<br/>               
        <Box>    
        <HStack>    
        <Wrap maxWidth="1600">    
<Image maxWidth="80px" animation={animation} src={logo24} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo26} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo28} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo29} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo33} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo35} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo36} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo38} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo40} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo45} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo46} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo47} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo96} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo97} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo102} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo152} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo154} {...props} />    
        </Wrap>    
        </HStack>    
        </Box>    
<br/>               
<br/>               
        <Box>    
        <HStack>    
        <Wrap maxWidth="1600">    
<Image maxWidth="80px" animation={animation} src={logo15} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo18} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo25} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo27} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo30} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo31} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo32} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo34} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo37} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo39} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo42} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo43} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo44} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo48} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo52} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo54} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo55} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo56} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo57} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo58} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo60} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo62} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo151} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo153} {...props} />    
        </Wrap>    
        </HStack>    
        </Box>    
<br/>               
<br/>               
        <Box>    
        <HStack>    
        <Wrap maxWidth="1600">    
<Image maxWidth="80px" animation={animation} src={logo72} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo73} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo74} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo75} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo76} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo77} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo78} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo79} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo80} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo81} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo82} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo83} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo84} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo85} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo86} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo87} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo88} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo89} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo90} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo91} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo92} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo101} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo104} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo105} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo155} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo156} {...props} />    
        </Wrap>    
        </HStack>    
        </Box>    
<br/>               
<br/>               
        <Box>    
        <HStack>    
        <Wrap maxWidth="1600">    
<Image maxWidth="80px" animation={animation} src={logo106} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo107} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo108} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo109} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo110} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo111} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo121} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo122} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo126} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo127} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo128} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo129} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo130} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo131} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo132} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo133} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo134} {...props} />    
        </Wrap>    
        </HStack>    
        </Box>    
<br/>               
<br/>               
        <Box>    
        <HStack>    
        <Wrap maxWidth="1600">    
<Image maxWidth="80px" animation={animation} src={logo72} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo73} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo74} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo75} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo76} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo77} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo78} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo79} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo80} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo81} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo82} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo83} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo84} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo85} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo86} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo87} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo88} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo89} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo90} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo91} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo92} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo101} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo104} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo105} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo112} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo113} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo114} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo115} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo116} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo117} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo118} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo119} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo120} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo135} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo136} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo151} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo152} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo153} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo154} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo155} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo156} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo157} {...props} />    
        </Wrap>    
        </HStack>    
        </Box>    
<br/>               
<br/>               
        <Box>    
        <HStack>    
        <Wrap maxWidth="1600">    
<Image maxWidth="80px" animation={animation} src={logo138} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo139} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo140} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo141} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo142} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo143} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo144} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo145} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo146} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo147} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo148} {...props} />    
        </Wrap>    
        </HStack>    
        </Box>    
<br/>               
<br/>               
<br/>               
<hr/>               
<br/>               
        <Box>    
        <HStack maxWidth="1600">    
<Image maxWidth="80px" animation={animation} src={logo113} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo3} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo75} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo137} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo116} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo70} {...props} />    
<Image maxWidth="60px" animation={animation} src={logo76} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo152} {...props} />    
        </HStack>    
        </Box>    
<br/>               
<hr/>               
<br/>               
        <Box>    
        <HStack maxWidth="1600">    
<Image maxWidth="80px" animation={animation} src={logo77} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo7} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo75} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo80} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo78} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo105} {...props} />    
<Image maxWidth="60px" animation={animation} src={logo76} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo155} {...props} />    
        </HStack>    
        </Box>    
<br/>               
<hr/>               
<br/>               
        <Box>    
        <HStack maxWidth="1600">    
<Image maxWidth="80px" animation={animation} src={logo70} {...props} />    
<Text fontSize="20pt"> LexDAO is {">>>>>>>>>"} </Text>  
<Image maxWidth="80px" animation={animation} src={logo29} {...props} />    
<Image maxWidth="70px" animation={animation} src={logo47} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo33} {...props} />    
<Image maxWidth="70px" animation={animation} src={logo26} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo38} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo45} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo59} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo40} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo97} {...props} />    
        </HStack>    
        </Box>    
<br/>               
<hr/>               
<br/>               
        <Box>    
        <HStack>    
        <Wrap maxWidth="1600">    
<Image maxWidth="80px" animation={animation} src={logo70} {...props} />    
<Text color="white" fontSize="20pt" > LexDAO {">>>"} </Text>  
<Image maxWidth="80px" animation={animation} src={logo30} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo48} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo27} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo32} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo37} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo39} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo42} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo34} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo54} {...props} />    
<Text color="green" fontSize="20pt" > results in {">>>"} </Text>  
<Image maxWidth="80px" animation={animation} src={logo152} {...props} />    
        </Wrap>    
        </HStack>    
        </Box>    
<br/>               
<hr/>               
<br/>               
        <Box>    
        <HStack>    
        <Wrap maxWidth="1600">    
<Image maxWidth="80px" animation={animation} src={logo70} {...props} />    
<Text color="white" fontSize="20pt" > LexDAO {">>>"} </Text>  
<Image maxWidth="80px" animation={animation} src={logo91} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo83} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo88} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo92} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo87} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo72} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo81} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo85} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo82} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo118} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo80} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo74} {...props} />    
<Text color="green" fontSize="20pt" > results in {">>>"} </Text>  
<Image maxWidth="80px" animation={animation} src={logo152} {...props} />    
        </Wrap>    
        </HStack>    
        </Box>    
<br/>               
<hr/>               
<br/>               
        <Box>    
        <HStack>    
        <Wrap maxWidth="1600">    
<Image maxWidth="80px" animation={animation} src={logo1} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo2} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo3} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo4} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo5} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo6} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo7} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo8} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo9} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo10} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo11} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo13} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo14} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo18} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo19} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo26} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo29} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo33} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo35} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo36} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo38} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo40} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo41} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo45} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo46} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo47} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo50} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo51} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo59} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo66} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo70} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo127} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo129} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo137} {...props} />    
<Image maxWidth="80px" animation={animation} src={logo152} {...props} />    
        </Wrap>    
        </HStack>    
        </Box>    
<br/>               
<br/>               
        <HStack>    
        <CircularProgress value={59} size="100px" thickness="4px" />    
        <CircularProgress value={30} color="orange.400" thickness="12px" />    
        <CircularProgress isIndeterminate color="green.300" />    
        <CircularProgress value={40} color="green.400">    
        <CircularProgressLabel>40%</CircularProgressLabel>    
        </CircularProgress>    
        </HStack>    
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are a few ways LexDAO participants are found.   
        </Text>    
        </Box>    
        </Box>    
);
}
export default HookMotionPref;              
