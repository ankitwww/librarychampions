import {
  Box,
  Center,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Square,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import { features } from "./data";

export const InfoSection = () => (
  <Center as="section" bg="bg-surface" maxW="7xl">
    <Stack spacing={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "4", md: "5" }} align="center" textAlign="center">
        <Stack spacing="3">
          <Text
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="semibold"
            color="blue.600"
          >
            Benefits
          </Text>
          <Heading size={useBreakpointValue({ base: "lg", md: "xl" })}>
            What can you expect at public libraries?
          </Heading>
        </Stack>
        <Text color="muted" fontSize={{ base: "lg", md: "xl" }} maxW="3xl">
          Public Libraries have many resources for newcomers, job-seekers,
          seniors as well as general public.
        </Text>
      </Stack>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        columnGap={8}
        rowGap={{ base: 10, md: 16 }}
      >
        {features.map((feature) => (
          <Stack
            key={feature.name}
            spacing={{ base: "4", md: "5" }}
            align="center"
            textAlign="center"
          >
            <Square
              size={{ base: "10", md: "12" }}
              bg="blue.600"
              color="white"
              borderRadius="lg"
            >
              <Icon as={feature.icon} boxSize={{ base: "5", md: "6" }} />
            </Square>
            <Stack spacing={{ base: "1", md: "2" }}>
              <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
                {feature.name}
              </Text>
              <Text color="muted">{feature.description}</Text>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  </Center>
);
