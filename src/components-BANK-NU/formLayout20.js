import React from "react";
import {
  useDisclosure,
  Box,
  Text,
  Link,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
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



function FormLayout20() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
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
          Content Staging
        </Text>

        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          SmartLaw Web3Skills Content Staging
        </Link>
        <br />
        <Button onClick={onOpen} variant="solid" color="red">
          Discard Staged Content
        </Button>
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Are you sure you want to discard all of your staged content? Words will be
              deleted.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button colorScheme="red" ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <br />
        <br />
        <Button onClick={onOpen} variant="outline" color="lime">
          Open Staged Content and Cancel
        </Button>
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px"> Basic Drawer </DrawerHeader>
            <DrawerBody>
              <p>
                {" "}
                LexDAO provides value and service supporting the fourth
                industrial revolution. Web3 is a set of technologies that
                publicly interoperate through blockchain and node based
                computing systems.{" "}
              </p>
              <p>
                {" "}
                LexDAO provides value and service supporting the fourth
                industrial revolution. Web3 is a set of technologies that
                publicly interoperate through blockchain and node based
                computing systems.{" "}
              </p>
              <p>
                {" "}
                LexDAO provides value and service supporting the fourth
                industrial revolution. Web3 is a set of technologies that
                publicly interoperate through blockchain and node based
                computing systems.{" "}
              </p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <br />
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are
          some ways LexDAO members are found.
        </Text>
      </Box>
    </Box>
  );
}
export default FormLayout20;
