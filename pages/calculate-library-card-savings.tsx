import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { HiArrowRight } from "react-icons/hi";
import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <Box
        as="section"
        bg={mode("gray.50", "gray.800")}
        px={{ base: "6", lg: "12" }}
      >
        Coming soon
      </Box>
    </>
  );
}
