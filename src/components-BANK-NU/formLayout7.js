import React from "react";            
import { useFormik } from "formik";            
import {            
 Input,           
 Button,           
} from "@chakra-ui/react";            
    const validate = (values) => {        
   const errors = {};         
if (!values.firstName) {    
errors.firstName = "Required";    
} else if (values.firstName.length > 15) {    
errors.firstName = "Must be 15 characters or less";    
}
if (!values.lastName) {    
errors.lastName = "Required";    
} else if (values.lastName.length > 20) {    
errors.lastName = "Must be 20 characters or less";    
}
if (!values.email) {    
errors.email = "Required";    
} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {    
errors.email = "Invalid email address";    
}
return errors;    
};

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


    const FormLayout7 = () => {        
    const formik = useFormik({        
     initialValues: {       
     firstName: "",       
     lastName: "",       
     email: "",       
},
validate,    
onSubmit: (values) => {    
alert(JSON.stringify(values, null, 2));    
},
});
       return (     
        <form onSubmit={formik.handleSubmit}>    
<label htmlFor="firstName"> First Name{ } </label>  
        <Input placeholder="extra small size" size="xs"    
w="200px"    
id="firstName"    
name=" firstName "  
type="text"    
onChange={formik.handleChange}    
value={formik.values.firstName}    
/>
{formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}    
<label htmlFor="lastName"> Last Name </label>  
        <Input placeholder="extra small size" size="xs"    
w="200px"    
id="lastName"    
name=" lastName "  
type="text"    
onChange={formik.handleChange}    
value={formik.values.lastName}    
/>
{formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}    
<label htmlFor="email"> Email Address </label>  
        <Input placeholder="extra small size" size="xs"    
w="200px"    
id="email"    
name=" email "  
type="email"    
onChange={formik.handleChange}    
value={formik.values.email}    
/>
{formik.errors.email ? <div>{formik.errors.email}</div> : null}    
        <Button colorScheme="blue" size="sm">    
Submit   
        </Button>    
        </form>    
);
};
export default FormLayout7;              
