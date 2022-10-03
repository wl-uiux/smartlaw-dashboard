import { createStandaloneToast } from "@chakra-ui/react"            
const Toast = createStandaloneToast()         
Toast({    
  title: "Connecting to the public resources",       
  description: "Establishing a connection now.",       
  status: "success",       
  Duration: 6000,       
isClosable: true,    
})
export default Toast;              
