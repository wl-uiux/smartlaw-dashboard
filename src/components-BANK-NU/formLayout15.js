import React from "react";            
import {            
 Box,           
 Image,           
 Text,           
 Link,           
 Editable,           
 EditableInput,           
 EditablePreview,           
 Slider,           
 SliderTrack,           
 SliderFilledTrack,           
 SliderThumb,           
 MdGraphicEq,           
 Switch,           
 FormControl,           
 FormLabel,           
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



function FormLayout15() {
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
                Create a Private User Account
              </Text>
              <Editable defaultValue=" Type your unique passphrase here:">
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
                Slide the bars to create a unique keypair.
              </Link>
              <Slider aria-label="slider-ex-1" defaultValue={30}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <br />
              <Slider aria-label="slider-ex-1" defaultValue={30}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <br />
              <Slider aria-label="slider-ex-2" colorScheme="pink" defaultValue={30}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <br />
              <Slider aria-label="slider-ex-4" defaultValue={30}>
                <SliderTrack bg="red.100">
                  <SliderFilledTrack bg="tomato" />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                  <Box color="tomato" as={MdGraphicEq} />
                </SliderThumb>
              </Slider>
              <br />
              <Slider defaultValue={60} min={0} max={300} step={30}>
                <SliderTrack bg="red.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="tomato" />
                </SliderTrack>
                <SliderThumb boxSize={6} />
              </Slider>
              <br />
              <Slider defaultValue={60} min={0} max={300} step={30}>
                <SliderTrack bg="red.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="tomato" />
                </SliderTrack>
                <SliderThumb boxSize={6} />
              </Slider>
              <br />
              <Slider
                aria-label=" LexDAO Slider "
                onChangeEnd={(val) => console.log(val)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <br />
              <Link
                mt={1}
                display="block"
                fontSize="lg"
                lineHeight="normal"
                fontWeight="semibold"
                href=" # "
              >
                Create a SmartLaw Web3Sill account to keep track of your progress.
              </Link>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="email-alerts" mb="0">
                  Enable email alerts?
                </FormLabel>
                <Switch id="email-alerts" />
              </FormControl>
              <br />
              <Link
                mt={1}
                display="block"
                fontSize="lg"
                lineHeight="normal"
                fontWeight="semibold"
                href=" # "
              >
                Select which services you would like turned on.
              </Link>
              <Stack align="center" direction="row">
                <Switch size="sm" colorScheme="red" />
                <Switch size="md" colorScheme="orange" />
                <Switch size="lg" colorScheme="messenger" />
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
      export default FormLayout15;
      