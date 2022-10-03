import React from "react";            
import {            
 Breadcrumb,           
 BreadcrumbItem,           
 BreadcrumbLink,           
} from "@chakra-ui/react";            
import { ChevronRightIcon } from "@chakra-ui/icons";            
      function Breadcrumb5() {      
       return (     
        <Breadcrumb    
fontWeight="medium"    
fontSize="lg"    
spacing="8px"    
separator={<ChevronRightIcon color="gray.500" />}    
>
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
export default Breadcrumb5;              
