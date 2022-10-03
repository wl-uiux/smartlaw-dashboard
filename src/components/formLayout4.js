import React from "react";
import {
  Box,
  Image,
  Text,
  Link,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
  FormHelperText,
  Stack,
  HStack,
  Radio,
  RadioGroup,
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


function FormLayout4() {
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
          color="teal.600"
        >
          LexDAO - Form4
        </Text>
        <FormControl id="email">
          <FormLabel> Email address XXXXXXX </FormLabel>
          <Input type="email" />
          <FormHelperText> We'll never share your email. </FormHelperText>
        </FormControl>
        <br />
        <FormControl as="fieldset">
          <FormLabel as="legend"> Select your starting level </FormLabel>
          <RadioGroup defaultValue="Itachi">
            <HStack spacing="24px">
              <Radio value="Value1"> Value1 </Radio>
              <Radio value="Value2"> Value2 </Radio>
              <Radio value="Value3"> Value3 </Radio>
              <Radio value="LexDAO"> LexDAO Wildcard </Radio>
            </HStack>
          </RadioGroup>
          <FormHelperText>
            No payment required until the course starts.
          </FormHelperText>
        </FormControl>
        <br />
        <FormControl id="first-name" isRequired>
          <FormLabel> First name </FormLabel>
          <Input placeholder="First name" />
        </FormControl>
        <br />
        <FormControl id="state">
          <FormLabel> State of Residence </FormLabel>
          <Select placeholder="Select state">
            <option> Alabama (AL) </option>
            <option> Alaska (AK) </option>
            <option> Arizona (AZ) </option>
            <option> Arkansas (AR) </option>
            <option> California (CA) </option>
            <option> Colorado (CO) </option>
            <option> Connecticut (CT) </option>
            <option> Delaware (DE) </option>
            <option> District of Columbia (DC) </option>
            <option> Florida (FL) </option>
            <option> Georgia (GA) </option>
            <option> Hawaii (HI) </option>
            <option> Idaho (ID) </option>
            <option> Illinois (IL) </option>
            <option> Indiana (IN) </option>
            <option> Iowa (IA) </option>
            <option> Kansas (KS) </option>
            <option> Kentucky (KY) </option>
            <option> Louisiana (LA) </option>
            <option> Maine (ME) </option>
            <option> Maryland (MD) </option>
            <option> Massachusetts (MA) </option>
            <option> Michigan (MI) </option>
            <option> Minnesota (MN) </option>
            <option> Mississippi (MS) </option>
            <option> Missouri (MO) </option>
            <option> Montana (MT) </option>
            <option> Nebraska (NE) </option>
            <option> Nevada (NV) </option>
            <option> New Hampshire (NH) </option>
            <option> New Jersey (NJ) </option>
            <option> New Mexico (NM) </option>
            <option> New York (NY) </option>
            <option> North Carolina (NC) </option>
            <option> North Dakota (ND) </option>
            <option> Ohio (OH) </option>
            <option> Oklahoma (OK) </option>
            <option> Oregon (OR) </option>
            <option> Pennsylvania (PA) </option>
            <option> Rhode Island (RI) </option>
            <option> South Carolina (SC) </option>
            <option> South Dakota (SD) </option>
            <option> Tennessee (TN) </option>
            <option> Texas (TX) </option>
            <option> Utah (UT) </option>
            <option> Vermont (VT) </option>
            <option> Virginia (VA) </option>
            <option> Washington (WA) </option>
            <option> West Virginia (WV) </option>
            <option> Wisconsin (WI) </option>
            <option> Wyoming (WY) </option>
            <option> American Samoa (AS) </option>
            <option> Guam (GU) </option>
            <option> Northern Mariana Islands (MP) </option>
            <option> Puerto Rico (PR) </option>
            <option> Virgin Islands (VI) </option>
            <option> Armed Forces Africa (AE) </option>
            <option> Armed Forces Americas (AA) </option>
            <option> Armed Forces Canada (AE) </option>
            <option> Armed Forces Europe (AE) </option>
            <option> Armed Forces Middle East (AE) </option>
            <option> Armed Forces Pacific (AP) </option>
          </Select>
        </FormControl>
        <br />
        <FormControl id="californiacounty">
          <FormLabel> County if in California </FormLabel>
          <Select placeholder="Select county in California">
            <option> Alameda County </option>
            <option> Alpine County </option>
            <option> Amador County </option>
            <option> Butte County </option>
            <option> Calaveras County </option>
            <option> Colusa County </option>
            <option> Contra Costa County </option>
            <option> Del Norte County </option>
            <option> El Dorado County </option>
            <option> Fresno County </option>
            <option> Glenn County </option>
            <option> Humboldt County </option>
            <option> Imperial County </option>
            <option> Inyo County </option>
            <option> Kern County </option>
            <option> Kings County </option>
            <option> Lake County </option>
            <option> Lassen County </option>
            <option> Los Angeles County </option>
            <option> Madera County </option>
            <option> Marin County </option>
            <option> Mariposa County </option>
            <option> Mendocino County </option>
            <option> Merced County </option>
            <option> Modoc County </option>
            <option> Mono County </option>
            <option> Monterey County </option>
            <option> Napa County </option>
            <option> Nevada County </option>
            <option> Orange County </option>
            <option> Placer County </option>
            <option> Plumas County </option>
            <option> Riverside County </option>
            <option> Sacramento County </option>
            <option> San Benito County </option>
            <option> San Bernardino County </option>
            <option> San Diego County </option>
            <option> San Francisco County </option>
            <option> San Joaquin County </option>
            <option> San Luis Obispo County </option>
            <option> San Mateo County </option>
            <option> Santa Barbara County </option>
            <option> Santa Clara County </option>
            <option> Santa Cruz County </option>
            <option> Shasta County </option>
            <option> Sierra County </option>
            <option> Siskiyou County </option>
            <option> Solano County </option>
            <option> Sonoma County </option>
            <option> Stanislaus County </option>
            <option> Sutter County </option>
            <option> Tehama County </option>
            <option> Trinity County </option>
            <option> Tulare County </option>
            <option> Tuolumne County </option>
            <option> Ventura County </option>
            <option> Yolo County </option>
            <option> Yuba County </option>
          </Select>
        </FormControl>
        <br />
        <FormControl id="amount">
          <FormLabel> Amount </FormLabel>
          <NumberInput max={50} min={10}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
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
          Finding Members and Patrons for LexDAO
        </Link>
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are
          some ways LexDAO members are found.
        </Text>
        <Stack spacing={3}>
          <Input variant="outline" placeholder="Outline" />
          <Input
            variant="filled"
            placeholder=" Filled "
            bg="yellow"
            color="red"
          />
          <Input variant="flushed" placeholder="Flushed" />
          <Input variant="unstyled" placeholder="Unstyled" />
        </Stack>
        <br />
        <Button colorScheme="messenger" size="md" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
export default FormLayout4;
