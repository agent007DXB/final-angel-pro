// SplitScreen.js

"use client";
import React, { useEffect, useState } from "react";
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
  Divider,
  Alert,
  AlertIcon,
  Link,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from "next/navigation";
import { signOut } from 'next-auth/react'

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
  const [showModal, setShowModal] = useState(false);
  const [state] = useForm("mrbzgkjq");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const [usdtVol, setUsdtVol] = useState("");
  const [phone, setPhone] = useState("");
  const [txref, setTxref] = useState("");
  const [accnum, setAccnum] = useState("");
  const [accifsc, setAccifsc] = useState("");
  const [accname, setAccname] = useState("");

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!usdtVol || !phone || !txref || !accnum || !accifsc || !accname) {
      alert("All fields are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/sellusdts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ usdtVol, phone, txref, accnum, accifsc, accname }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="sell">
      <Container as={SimpleGrid} maxW={"10xl"} spacing={{ base: 10, lg: 32 }} p={0}>
        <Stack direction={{ base: "column", md: "row" }}>
          <Flex p={8} flex={1} align={"center"} justify={"center"} bg="#222222">
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              {/* Content for the left side of the split screen */}
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
                    bg: "#fe5823",
                    zIndex: -1,
                  }}
                  color="white"
                >
                  AngelPro.Online
                </Text>
                <br />{" "}
                <Text color={"#fe5823"} as={"span"}>
                  Trade USDT
                </Text>{" "}
              </Heading>
              <Text fontSize={{ base: "3xl", lg: "2xl" }} color="#bebebe">
                Angel pro is the #1 place to buy and sell USDT which is free,
                and safe with 24/7 support.
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Link href="#prices">
                  <Button
                    size="lg"
                    w={{ base: "full", md: "100%" }}
                    bg={"#fe5823"}
                    color={"white"}
                  >
                    Price
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button
                    size="lg"
                    w={{ base: "full", md: "100%" }}
                    variant="outline"
                    color="white"
                    hover={{ color: "black" }}
                  >
                    Contact Us
                  </Button>
                </Link>
                <Button
                  as={"a"}
                  w={{ base: "full", md: "100%" }}
                  fontSize={"sm"}
                  size="lg"
                  fontWeight={600}
                  href={"#"}
                  color={"white"}
                  bg={"red"}
                  _hover={{
                    bg: "black",
                  }}
                  onClick={()=>signOut()}
                >
                  Sign Out
                </Button>
              </Stack>
            </Stack>
          </Flex>
          {/* Content for the right side of the split screen */}
          <Flex flex={1} bg={"gray.50"}>
            <Stack p={{ base: 4, sm: 6, md: 8 }} spacing={{ base: 8 }} flex="1" width="100%">
              <Stack spacing={2} align="center">
                <Heading
                  color={"gray.800"}
                  lineHeight={1.1}
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                >
                  Sell&nbsp;
                  <Text
                    as={"span"}
                    bgGradient="linear(to-r, #fe5823, #fe5823)"
                    bgClip="text"
                  >
                    USDT
                  </Text>
                </Heading>
                <Link href="#prices">
                  <Button
                    size="lg"
                    w={{ base: "full", md: "100%" }}
                    bg={"#fe5823"}
                    color={"white"}
                    onClick={() => setShowModal(true)}
                  >
                    Deposit
                  </Button>
                </Link>
              </Stack>
              {/* Form for selling USDT */}
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <Box position="relative" padding="4">
                    <Divider />
                    <Text fontSize="lg">Order details</Text>
                  </Box>
                  <InputGroup>
                    <Input
                      type="number"
                      bg={"white"}
                      placeholder="USDT sell amount"
                      min="1"
                      id="usdt"
                      name="usdt"
                      required
                      value={usdtVol}
                      onChange={(e) => setUsdtVol(e.target.value)}
                    />
                    <InputRightAddon marginRight={3}>USDT</InputRightAddon>
                    <InputRightAddon>
                      = {calculateInrAmount(usdtVol)} INR
                    </InputRightAddon>
                  </InputGroup>
                  <ValidationError
                    prefix="USDT"
                    field="usdt"
                    errors={state.errors}
                 
