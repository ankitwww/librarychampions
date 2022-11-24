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
import { StartScreen } from "../components/calculator/startScreen";
import { useState } from "react";
import { LibbyScreen } from "../components/calculator/libby";
import { LinkedInScreen } from "../components/calculator/linkedin";
import { OreillyScreen } from "../components/calculator/oreilly";
import { MangoScreen } from "../components/calculator/mango";
import { SavingScreen } from "../components/calculator/savingScreen";

export default function Home() {
  const [screen, setScreen] = useState<number>(0);
  const [totalSavings, setTotalSavings] = useState<number>(0);

  const handleClick = (screenNumber: number, savings: number) => {
    setScreen(screenNumber + 1);
    if (savings && savings > 0) {
      setTotalSavings(totalSavings + savings);
    }
    if (savings == -1) {
      setTotalSavings(0);
    }
  };
  return (
    <>
      <Center justifyContent={"center"} as="section">
        <Box
          maxW="7xl"
          px={{ base: "6", lg: "8" }}
          py={{ base: "16", sm: "20" }}
          textAlign="center"
        >
          {screen == 0 && <StartScreen handleClick={handleClick} />}
          {screen == 1 && <LibbyScreen handleClick={handleClick} />}
          {screen == 2 && <LinkedInScreen handleClick={handleClick} />}
          {screen == 3 && <OreillyScreen handleClick={handleClick} />}
          {screen == 4 && <MangoScreen handleClick={handleClick} />}
          {screen == 5 && (
            <Box>
              {totalSavings > 0 ? (
                <Heading
                  my="4"
                  fontSize="4xl"
                  fontWeight="extrabold"
                  letterSpacing="tight"
                  lineHeight="1.5"
                >
                  Your potential savings are
                  <Box
                    as="mark"
                    bg="unset"
                    ml={2}
                    color={mode("blue.600", "blue.200")}
                    whiteSpace="nowrap"
                  >
                    ${totalSavings.toFixed(0)}
                  </Box>{" "}
                </Heading>
              ) : null}
              <Text fontSize="lg" maxW="xl" mx="auto">
                Get a free library Today from your nearest public library!
              </Text>
              <Stack
                direction={{ base: "column", sm: "row" }}
                mt="10"
                justify="center"
                spacing={{ base: "3", md: "5" }}
                maxW="md"
                mx="auto"
              >
                <NextLink
                  href="https://www.vpl.ca/librarycard"
                  target={"_blank"}
                  passHref
                >
                  <Button
                    size="lg"
                    colorScheme="blue"
                    height="14"
                    fontSize="md"
                  >
                    Get library card
                  </Button>
                </NextLink>
              </Stack>
            </Box>
          )}

          <Box mt="12">
            <NextLink
              href="#"
              style={{ textDecoration: "underline" }}
              onClick={() => handleClick(-1, -1)}
              passHref
            >
              Start over again
            </NextLink>
          </Box>
        </Box>
      </Center>
    </>
  );
}
