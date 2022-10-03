import React from "react";
import {
  Box,
  Image,
  Text,
  Link,
  Editable,
  EditableInput,
  EditablePreview,
  Radio,
  RadioGroup,
  Select,
  Stack,
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



function FormLayout14() {
  const [value, setValue] = React.useState("1");
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
          color="yellow.600"
        >
          SmartLaw Web3 Skills Membership Questionnaire - Form14
        </Text>
        <Editable defaultValue=" Type your message here:">
          <EditablePreview />
          <EditableInput />
        </Editable>
        <br />
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          Question R1
        </Link>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value=" 1">First </Radio>
            <Radio value=" 2">Second </Radio>
            <Radio value=" 3">Third </Radio>
          </Stack>
        </RadioGroup>
        <br />
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          Question R2
        </Link>
        <RadioGroup defaultValue="2">
          <Stack spacing={5} direction="row">
            <Radio colorScheme="red" value="1">
              Radio
            </Radio>
            <Radio colorScheme="green" value="2">
              Radio
            </Radio>
          </Stack>
        </RadioGroup>
        <br />
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          Question R3
        </Link>
        <Stack>
          <Radio size="md" name="1" colorScheme="green">
            Radio
          </Radio>
        </Stack>
        <br />
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          Question R4
        </Link>
        <RadioGroup defaultValue="1">
          <Stack spacing={4} direction="row">
            <Radio value="1" isDisabled>
              Radio 1
            </Radio>
            <Radio value=" 2">Radio 2 </Radio>
            <Radio value=" 3">Radio 3 </Radio>
          </Stack>
        </RadioGroup>
        <br />
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          Question R5
        </Link>
        <Select placeholder="Select option" w="200px">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <br />
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          Question R6
        </Link>
        <Stack spacing={3}>
          <Select placeholder="medium size" size="md" w="200px" />
        </Stack>
        <br />
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          Question R7
        </Link>
        <Stack spacing={3}>
          <Select variant="outline" placeholder="Outline" />
          <Select
            variant="filled"
            placeholder=" Filled "
            bg="yellow"
            color="red"
          />
          <Select variant="flushed" placeholder="Flushed" />
          <Select variant="unstyled" placeholder="Unstyled" />
        </Stack>
        <br />
        <br />
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are
          some ways LexDAO members are found.
        </Text>
      </Box>
    </Box>
  );
}
export default FormLayout14;
