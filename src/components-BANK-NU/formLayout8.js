import React from "react";            
import { useFormik } from "formik";            
import {            
 Input,           
 Button,           
} from "@chakra-ui/react";            
    const FormLayout8 = () => {        
    const formik = useFormik({        
     initialValues: {       
     firstName: "",       
     lastName: "",       
     email: "",       
},
onSubmit: (values) => {    
alert(JSON.stringify(values, null, 2));    
},
});

// FORM DATA AND SENT TO DISCORD WEBHOOK
// Use the webhook id and token, to get these informations go to Server Settings>Integrations>Webhooks and click on the pretended webhook and copy the webhook URL. Paste the URL on google to see the webhook's ID and Token.

// const id = '';
// const token = '';
// const webhook = new Discord.WebhookClient(id, token);
// webhook.send('Your message');



// form = document.getElementById("submit-form");
// sucessMsg = document.getElementById("success");

// function sucess(event) {
// sucessMsg.style.display = "inline"
// event.preventDefault()
// console.log("form data:", getData())


// }

// function getData()
// {
// const formData = new FormData(form),
// ret = {};

// for(let [name, value] of formData.entries())
// ret[name] = value;

//  return ret;
//  } 


// form.addEventListener("submit" , sucess )


       return (     
        <form onSubmit={formik.handleSubmit}>    
<label htmlFor="firstName"> First Name{ } </label>  
        <Input placeholder="extra small size" size="xs"    
w="200px" id="firstName"    
name=" firstName "  
type="text"    
onChange={formik.handleChange}    
value={formik.values.firstName}    
/>
<label htmlFor="lastName"> Last Name </label>  
        <Input placeholder="extra small size" size="xs"    
w="200px"    
id="lastName"    
name=" lastName "  
type="text"    
onChange={formik.handleChange}    
value={formik.values.lastName}    
/>
<label htmlFor="email"> Email Address </label>  
        <Input placeholder="extra small size" size="xs"    
w="200px"    
id="email"    
name=" email "  
type="email"    
onChange={formik.handleChange}    
value={formik.values.email}    
/>
        <Button colorScheme="blue" size="sm">    
Submit   
        </Button>    
        </form>    
);
};
export default FormLayout8;              
