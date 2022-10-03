import React from "react";
import {
  Box,
  Text,
  Link,
  Editable,
  EditableInput,
  EditablePreview,
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



function FormLayout17() {
  return (
    <Box p={4} display={{ md: "flex" }}>

      <Box mt={{ base: 4, md: 0 }} ml={{ md: 48 }}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="yellow.600"
        >
          Send a Transaction to a Blockchain
        </Text>
        <Editable defaultValue=" Type a test message to send with the transaction here:">
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
          Discover SmartLaw Web3Skills
        </Link>
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are
          some ways LexDAO members are found.
        </Text>
      </Box>
    </Box>
  );
}
export default FormLayout17;
