import React from "react";            
import {            
 Breadcrumb,           
 BreadcrumbItem,           
 BreadcrumbLink,           
} from "@chakra-ui/react";            
      function Breadcrumb3() {      
       return (     
        <Breadcrumb fontWeight="medium" fontSize="sm">    
        <BreadcrumbItem>    
        <BreadcrumbLink href=" # "> Home </BreadcrumbLink>
        </BreadcrumbItem>    
        <BreadcrumbItem>    
        <BreadcrumbLink href=" # "> About </BreadcrumbLink>
        </BreadcrumbItem>    
        <BreadcrumbItem isCurrentPage>    
        <BreadcrumbLink href=" # "> Current </BreadcrumbLink>
        </BreadcrumbItem>    
        </Breadcrumb>    
);
}
export default Breadcrumb3;              
