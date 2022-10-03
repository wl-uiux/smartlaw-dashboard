import React from "react";
import {
  Box,
  Image,
  Text,
  Link,
  Textarea,
  RadioGroup,
  Radio,
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



function FormLayout16() {
  const [resize, setResize] = React.useState("horizontal");
  let [value, setValue] = React.useState("");
  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
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
          SmartLaw Web3Skills Questionnaire - Form16
        </Text>
        <br />
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          Question 1 - Situation Analysis
        </Link>
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are
          some ways LexDAO members are found.
        </Text>
        <Textarea placeholder=" Enter the answer here" />
        <br />
        <br />
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          Question 2 - Current Skills Set 
        </Link>
        <Text color="yellow" mb="8px"> {value} </Text>
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder=" Type or paste skills here: "
          size="sm"
        />
        <br />
        <br />
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          Question 3 - Preferred Reward System
        </Link>
        <RadioGroup defaultValue={resize} onChange={setResize} mb={6}>
          <Stack direction="row" spacing={5}>
            <Radio value="horizontal"> DAI Stable Token </Radio>
            <Radio value="vertical"> Ethereum </Radio>
            <Radio value="none"> US Currency </Radio>
          </Stack>
        </RadioGroup>
        <Textarea
          placeholder=" Enter the answer here "
          size="sm"
          resize={resize}
        />
        <br />
        <br />
        <br />
        <br />
      </Box>
    </Box>
  );
}
export default FormLayout16;
