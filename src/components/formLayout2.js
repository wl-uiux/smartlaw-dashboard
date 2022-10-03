import React from "react";
import { Box, Image, Text, Link, Checkbox, Stack } from "@chakra-ui/react";
function FormLayout2() {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

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
          color="yellow"
        >
          LexDAO Membership Application - FORM2
        </Text>
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          Please provide the following information.
        </Link>
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are
          some ways LexDAO members are found.
        </Text>
        <Checkbox
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) =>
            setCheckedItems([e.target.checked, e.target.checked])
          }
        >
          Parent Checkbox
        </Checkbox>
        <Stack pl={6} mt={1} spacing={1}>
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) =>
              setCheckedItems([e.target.checked, checkedItems[1]])
            }
          >
            LexDAO Checkbox1
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) =>
              setCheckedItems([checkedItems[0], e.target.checked])
            }
          >
            LexDAO Checkbox2
          </Checkbox>
        </Stack>
      </Box>
    </Box>
  );
}
export default FormLayout2;
