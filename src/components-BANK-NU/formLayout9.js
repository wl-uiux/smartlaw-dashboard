import React from "react";
import { Formik, Form } from "formik";
import { Input, Center, Box, Button, Text } from "@chakra-ui/react";

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



const FormLayout9 = () => (
  <Box>
    <Center>
        <Text fontSize={"lg"} color="yellow" > Email and Password Update </Text>
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
        {({ isSubmitting }) => (
          <Form>
            <Input
                ml="2"
                placeholder="email"
              size="sm"
              w="200px"
              type="email"
              colorScheme="orange"
              name="email"
            />

            <Input
              placeholder="confirm-email"
              size="sm"
              w="200px"
              type="email"
              name="email2"
              component="div"
            />

            <Input
              ml="2"
              placeholder="password"
              size="sm"
              w="200px"
              type="password"
              name="password"
            />

            <Input
              placeholder="confirm password"
              size="sm"
              w="200px"
              type="password"
              name="password2"
              component="div"
            />

            <Button
              ml="2"
              colorScheme="messenger"
              size="sm"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Center>
  </Box>
);
export default FormLayout9;
