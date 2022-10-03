import React from "react";            
import {            
 Breadcrumb,           
 BreadcrumbItem,           
 BreadcrumbLink,           
} from "@chakra-ui/react";            
      function Breadcrumb1() {      
       return (     
        <Breadcrumb>    
        <BreadcrumbItem>    
        <BreadcrumbLink href=" # "> Home </BreadcrumbLink>
        </BreadcrumbItem>    
        <BreadcrumbItem>    
        <BreadcrumbLink href=" # "> Docs </BreadcrumbLink>
        </BreadcrumbItem>    
        <BreadcrumbItem isCurrentPage>    
        <BreadcrumbLink href=" # "> Breadcrumb </BreadcrumbLink>
        </BreadcrumbItem>    
        </Breadcrumb>    
);
}
export default Breadcrumb1;              
