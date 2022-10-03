import React from "react";            
import { Formik } from "formik";            
import {            
 Container,           
 Input,           
 Button,           
} from "@chakra-ui/react";    

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



    const FormLayout10 = () => (        
        <Container>    
        <div>    
        <h1> FormLayout10 Custom Form Submission </h1>  
        <Formik    
     initialValues={{ email: "", password: "" }}       
validate={(values) => {    
   const errors = {};         
if (!values.email) {    
errors.email = "Required";    
} else if (    
!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)    
) {    
errors.email = "Invalid email address";    
}
return errors;    
}}
onSubmit={(values, { setSubmitting }) => {    
setTimeout(() => {    
alert(JSON.stringify(values, null, 2));    
setSubmitting(false);    
}, 400);    
}}
>
{({                
values,    
     errors,       
touched,    
 handleChange,           
 handleBlur,           
 handleSubmit,           
isSubmitting,    
}) => (    
        <form onSubmit={handleSubmit}>    
        <Input placeholder="extra small size" size="sm"    
w="200px"    
type="email"    
name=" email "  
onChange={handleChange}    
onBlur={handleBlur}    
value={values.email}    
/>
{errors.email && touched.email && errors.email}    
        <Input placeholder="extra small size" size="sm"    
w="200px"    
type="password"    
name=" password "  
onChange={handleChange}    
onBlur={handleBlur}    
value={values.password}    
/>
{errors.password && touched.password && errors.password}    
<br/>               
<br/>               
        <Button    
colorScheme="messenger"    
size="sm"    
type="submit"    
disabled={isSubmitting}    
>
Submit   
        </Button>    
        </form>    
)}
        </Formik>    
        </div>    
        </Container>    
);
export default FormLayout10;              
