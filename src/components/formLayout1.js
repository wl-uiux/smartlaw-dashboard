import React from "react";
import {
  Box,
  Image,
  Text,
  Link,
  Checkbox,
  CheckboxGroup,
  Stack,
  HStack,
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


function FormLayout1() {
  return (
    <Box p={4} display={{ md: "flex" }}>
      <Box flexShrink={0}>
        <Image
          borderRadius="lg"
          width={{ md: 40 }}
          src=" https://bafybeidmpeq6op634lbahmksakedv45w3c7t2dtx7bg2ojqsmhy253432q.ipfs.infura-ipfs.io
 "
          alt=" LexDAO "
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="white"
        >
          <Checkbox
            defaultIsChecked
            spacing="1rem"
            iconColor="blue.900"
            iconSize="1rem"
          >
            Checkbox FORM 1
          </Checkbox>
          <br />
          <br />
          <Stack spacing={10} direction="row">
            <Checkbox
              isDisabled
              spacing="1rem"
              iconColor="blue.900"
              iconSize="1rem"
            >
              Checkbox
            </Checkbox>
            <Checkbox
              isDisabled
              defaultIsChecked
              spacing="1rem"
              iconColor="blue.900"
              iconSize="1rem"
            >
              Checkbox
            </Checkbox>
          </Stack>
          <br />
          <Stack spacing={10} direction="row">
            <Checkbox
              colorScheme="blue"
              spacing="1rem"
              iconColor="blue.900"
              iconSize="1rem"
              defaultIsChecked
            >
              Checkbox
            </Checkbox>
            <Checkbox
              colorScheme="orange"
              spacing="1rem"
              iconColor="blue.900"
              iconSize="1rem"
              defaultIsChecked
            >
              Checkbox
            </Checkbox>
          </Stack>
          <br />
          <HStack spacing={10} direction="row">
            <Checkbox
              size="sm"
              colorScheme="red"
              spacing="1rem"
              iconColor="white"
              iconSize="1rem"
            >
              Checkbox
            </Checkbox>
            <Checkbox
              size="md"
              colorScheme="green"
              spacing="1rem"
              iconColor="blue.900"
              iconSize="1rem"
              defaultIsChecked
            >
              Checkbox
            </Checkbox>
            <Checkbox
              size="lg"
              colorScheme="orange"
              spacing="1rem"
              iconColor="blue.900"
              iconSize="1rem"
              defaultIsChecked
            >
              Checkbox
            </Checkbox>
          </HStack>
          <br />
          <CheckboxGroup
            colorScheme="orange"
            defaultValue={["option1", "option3"]}
          >
            <HStack>
              <Checkbox value="option1">Multi-Choice 1</Checkbox>
              <Checkbox value="option2">Multi-Choice 2</Checkbox>
              <Checkbox value="option3">Multi-Choice 3</Checkbox>
            </HStack>
          </CheckboxGroup>
          <br />
          <br />
          <br />
          <br />
        </Text>
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          Finding Members and Patrons for LexDAO
        </Link>
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are
          some ways LexDAO members are found.
        </Text>
      </Box>
    </Box>
  );
}
export default FormLayout1;
