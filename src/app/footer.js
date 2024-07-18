// pages/footer.js
"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";

const Logo = (props) => {
  return (
    <Image
      src="/logo-no-text.png"
      width={100}
      height={100}
      alt="AngelPro logo"
    />
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6} alignItems="center">
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Box align="center">
              <Text fontSize={"sm"}>
                © 2024 AngelPro Online Trading Limited
              </Text>
              <Text fontSize="sm"> All rights reserved</Text>
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Product</ListHeader>
            <Link href={"#sell"}>Sell</Link>
            <Link href={"#features"}>Features</Link>
            <Link href={"#prices"}>Prices</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link
              href={
                "https://docs.google.com/document/d/1B9NNZfpTVAnmRdvexPzmEAgJe9nWCmMwrp0blFBLpqs/edit?usp=sharing"
              }
              isExternal
            >
              Terms
