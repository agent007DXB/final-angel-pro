// pages/split-screen.js
"use client";
import * as React from "react";
import {
  Image,
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  InputGroup,
  InputLeftAddon,
  useColorModeValue,
  useBreakpointValue,
  Icon,
  Divider,
  InputRightAddon,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Badge,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  Link,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";
import { signIn, signOut, useSession } from "next-auth/react";

const calculateInrAmount = (usdtVol) => {
  if (usdtVol > 0 && usdtVol < 500) {
    return usdtVol * 92;
  } else if (usdtVol >= 500 && usdtVol <= 1087) {
    return usdtVol * 92;
  } else if (usdtVol > 1087 && usdtVol <= 2151) {
    return usdtVol * 93;
  } else if (usdtVol > 2151 && usdtVol <= 10000) {
    return usdtVol * 94;
  } else {
    return usdtVol * 94;
  }
};

export default function SplitScreen() {
  const session = useSession();
  const primaryColor = "#fe5823";
  const secondaryColor = "white";
  const backgroundColor = "#222222";
  const textColor = "#bebebe";

  return (
    <div id="sell">
      <Container
        as={SimpleGrid}
        maxW={"10xl"}
        spacing={{ base: 10, lg: 32 }}
        p={0}
      >
        <Stack direction={{ base: "column", md: "row" }}>
          <Flex p={8} flex={1} align={"center"} justify={"center"} bg={backgroundColor}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Stack direction={"row"}>
                <Text
                  textTransform={"uppercase"}
                  color={"orange.200"}
                  fontWeight={600}
                  fontSize={"sm"}
                  bg={useColorModeValue("orange.500", "orange.900")}
                  p={2}
                  alignSelf={"flex-start"}
                  rounded={"md"}
                >
                  +32K Trades
                </Text>
                <Text
                  textTransform={"uppercase"}
                  fontWeight={600}
                  fontSize={"sm"}
                  bg="#0a0a0a"
                  p={2}
                  alignSelf={"flex-start"}
                  rounded={"md"}
                >
                   ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
                </Text>
              </Stack>

              <Heading fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}>
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: useBreakpointValue({ base: "20%", md: "30%" }),
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: primaryColor,
                    zIndex: -1,
                  }}
                  color={secondaryColor}
                >
                  AngelPro.Online
                </Text>
                <br />
                <Text color={primaryColor} as={"span"}>
                  Trade USDT
                </Text>
              </Heading>
              <Text fontSize={{ base: "3xl", lg: "2xl" }} color={textColor}>
                Angel pro is the #1 place to buy and sell USDT which is free,
                and safe with 24/7 support.
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Link href="#prices">
                  <Button
                    size="lg"
                    w={{ base: "full", md: "100%" }}
                    bg={primaryColor}
                    color={secondaryColor}
                  >
                    Price
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button
                    size="lg"
                    w={{ base: "full", md: "100%" }}
                    variant="outline"
                    color={secondaryColor}
                    _hover={{ color: "black" }}
                  >
                    Contact Us
                  </Button>
                </Link>
                <Button
                  as={Link}
                  href={"#"}
                  w={{ base: "full", md: "100%" }}
                  fontSize={"sm"}
                  size="lg"
                  fontWeight={600}
                  color={secondaryColor}
                  bg={"blue"}
                  _hover={{
                    bg: "red",
                  }}
                  onClick={() => signIn("google")}
                >
                  Sign In with Google
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </div>
  );
}
