import React from "react";            
import {            
 Link,           
 Breadcrumb,           
 BreadcrumbItem,           
 BreadcrumbLink,           
} from "@chakra-ui/react";            
      function Breadcrumb4() {      
       return (     
        <Breadcrumb>    
        <BreadcrumbItem>    
        <BreadcrumbLink as={Link} to=" # ">  
Home   
        </BreadcrumbLink>    
        </BreadcrumbItem>    
        <BreadcrumbItem>    
        <BreadcrumbLink as={Link} to=" # ">  
About LexDAO   
        </BreadcrumbLink>    
        </BreadcrumbItem>    
        <BreadcrumbItem isCurrentPage>    
        <BreadcrumbLink>Contact</BreadcrumbLink>    
        </BreadcrumbItem>    
        </Breadcrumb>    
);
}
export default Breadcrumb4;              
