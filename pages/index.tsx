import {
  Badge,
  Box,
  Button,
  Center,
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
import { Footer } from "../components/Footer";
import CookieConsent from "react-cookie-consent";
import { InfoSection } from "../components/InfoSection";

export default function Home() {
  return (
    <>
      <Box
        as="section"
        bg={mode("gray.50", "gray.800")}
        pos="relative"
        px={{ base: "6", lg: "12" }}
      >
        <Box>
          <Box
            maxW={{ lg: "md", xl: "xl" }}
            pt={{ base: "20", lg: "40" }}
            pb={{ base: "16", lg: "24" }}
          >
            <Heading
              as="h1"
              size="3xl"
              lineHeight="1.2"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              Biggest black friday deal is{" "}
              <Box
                as="mark"
                color={mode("blue.500", "blue.300")}
                bg="transparent"
              >
                your free Library Card
              </Box>
            </Heading>
            <Text
              mt={4}
              fontSize="lg"
              fontWeight="medium"
              color={mode("gray.600", "gray.400")}
            >
              Ever wonder how much money you can save with your free public
              library card? Try our free saving calculator by answering a few
              simple questions! Its going to be your biggest holiday deal!!
            </Text>
            <Stack direction="row" spacing="4" mt="8">
              <NextLink href="/calculate-library-card-savings" passHref>
                <Button size="md" colorScheme="blue" height="14" fontSize="md">
                  Calculate Savings
                </Button>
              </NextLink>
              <NextLink
                href="https://www.vpl.ca/librarycard"
                target={"_blank"}
                passHref
              >
                <Button
                  size="md"
                  bg="white"
                  color="gray.800"
                  _hover={{ bg: "gray.50" }}
                  height="14"
                  shadow="base"
                  fontSize="md"
                >
                  Get library card
                </Button>
              </NextLink>
            </Stack>
          </Box>
        </Box>
        <Box
          pos={{ lg: "absolute" }}
          insetY={{ lg: "0" }}
          insetEnd={{ lg: "0" }}
          bg="gray.50"
          w={{ base: "full", lg: "50%" }}
          height={{ base: "96", lg: "full" }}
          sx={{
            clipPath: { lg: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)" },
          }}
        >
          <Img
            height="100%"
            width="100%"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1551836022-b06985bceb24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            alt="Lady working"
          />
        </Box>
      </Box>
      <Center px={{ base: "6", lg: "12" }} py={12}>
        <InfoSection />
      </Center>
      <Box as="section" px={{ base: "6", lg: "12" }} mt={24} bg="gray.50">
        <Footer />
      </Box>
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  );
}
