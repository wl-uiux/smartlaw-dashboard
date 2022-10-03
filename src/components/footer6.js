import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
const Logo = (props: any) => {
  return (
    <Image
      alt={" LexDAO "}
      fit={"cover"}
      align={"center"}
      w={"80%"}
      h={"100px"}
      src={
        " https://bafybeidmpeq6op634lbahmksakedv45w3c7t2dtx7bg2ojqsmhy253432q.ipfs.infura-ipfs.io "
      }
    />
  );
};
const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode,
  label: string,
  href: string,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text color={"white"} fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};
function Footer6() {
  return (
    <Box
      bg={useColorModeValue("gray.800", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.200", "white")} />
            </Box>
            <Text  fontSize={"sm"}></Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={" # "}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={" # "}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={" # "}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader> W3LE </ListHeader>
            <Link color={"white"} href={" # "}> About us </Link>
            <Link color={"white"} href={" # "}> Blog </Link>
            <Link color={"white"} href={" # "}> Contact us </Link>
            <Link color={"white"} href={" # "}> Pricing </Link>
            <Link color={"white"} href={" # "}> Testimonials </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader> LexDAO Support </ListHeader>
            <Link color={"white"} href={" # "}> Help Center </Link>
            <Link color={"white"} href={" # "}> Terms of Service </Link>
            <Link color={"white"} href={" # "}> Legal </Link>
            <Link color={"white"} href={" # "}> Privacy Policy </Link>
            <Link color={"white"} href={" # "}> Status </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader> LexDAO Calendar </ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={" Your email address "}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("green.400", "green.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "green.600",
                }}
                aria-label=" Join For Maximum Benefits "
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
export default Footer6;
