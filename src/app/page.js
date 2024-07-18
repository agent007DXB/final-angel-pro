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
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Prices from "@/components/Prices";
import Contact from "@/components/Contact";
import Sell from "@/components/Sell";
import Home from "@/components/Home";
import Admin from "@/components/Admin";

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
