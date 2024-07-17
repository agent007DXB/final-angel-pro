"use client";
import * as React from "react";
import {
  ChakraProvider,
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
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  Divider,
  AbsoluteCenter,
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
} from "@chakra-ui/react";

import { useForm, ValidationError } from "@formspree/react";
import { useSession } from "next-auth/react";
import { Header } from "@/app/header";
import Footer from "@/app/footer";
import Features from "@/app/features";
import Testimonials from "@/app/testimonials";
import Prices from "@/app/pricing";
import Contact from "@/app/contact";
import Sell from "@/app/sell";
import Home from "@/app/home";
import Admin from "@/app/admin";

function App() {
  const { status } = useSession();
  return (
    <ChakraProvider>
      <Header />
      {status === "authenticated" ? <Sell /> : <Home />}
      <Divider />
      <Prices />
      <Divider />
      <Features />
      <Divider />
      <Testimonials />
      <Divider />
      <Contact />
      <Footer />
      <Admin />
    </ChakraProvider>
  );
}

export default App;
