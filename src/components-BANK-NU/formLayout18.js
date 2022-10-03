import React from "react";
import {
  useDisclosure,
  Input,
  Button,
  Box,
  Image,
  Link,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
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



function FormLayout18() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          Web3Skills Customized Content
        </Text>

        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          SmartLaw Web3Skills Content Curriculum Customization
        </Link>
        <br />
        <Button
          onClick={onOpen}
          variant="solid"
          colorScheme="green"
          color="white"
        >
          {" "}
          Customize Curriculum Content{" "}
        </Button>
        <Drawer isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader> Create your account </DrawerHeader>
            <DrawerBody>
              <form
                id="my-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("submitted");
                }}
              >
                <Input name="nickname" placeholder="Type here..." />
              </form>
            </DrawerBody>
            <DrawerFooter>
              <Button type="submit" form="my-form">
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <br />
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are a
          few ways ways LexDAO members are found.
        </Text>
      </Box>
    </Box>
  );
}
export default FormLayout18;
