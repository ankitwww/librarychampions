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
import { Footer } from "../components/Footer";
import { NavBar } from "../components/Navbar";
import { BorrowDeviceScreen } from "../components/calculator/BorrowDevice";
import { PressReaderScreen } from "../components/calculator/PressReader";
import { TumbleBookScreen } from "../components/calculator/TumbleBook";
import { CreativeBugScreen } from "../components/calculator/CreativeBug";
import { GenericBenefitScreen } from "../components/calculator/GenericBenefitScreen";
import { Benefit } from "../types/Benefit";

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
  const benefits: Benefit[] = [
    {
      savings: 119.88,
      screenNumber: 1,
      name: "Libby",
      titleText: "Do you like reading online?",
      preDescription:
        "Using your free Library Card, you can borrow ebooks, audiobooks,magazines, and more from your local library for free!",
      postDescription:
        "is the newer library reading app by OverDrive, loved by millions of readers worldwide.",
      blueText: "Libby",
    },
    {
      savings: 359.88,
      screenNumber: 2,
      name: "LinkedIn Learning",
      titleText: "Use LinkedIn Learning for free?",
      preDescription:
        "LinkedIn Learning catalogue offers video courses in business, computer technology, software, and creative skills, all conducted by experts in their fields. It contains over 16,000 courses with some also available in French, German, Japanese, Spanish, Mandarin and Portuguese.",
      postDescription: "",
      blueText: "",
    },
    {
      savings: 588,
      screenNumber: 3,
      name: "Oreilly",
      titleText: "Need O'Reilly books or courses?",
      preDescription:
        "O'Reilly for Public Libraries (formerly Safari Books Online) offers \
        resources for learning about business, technology, design, science,\
        engineering, travel, hobbies, health and more.  ",
      postDescription:
        "includes over\
      50,000 books from top publishers (including pre-release titles for the\
      most up-to-date information), more than 30,000 hours of video content,\
      case studies from top companies, learning paths and expert playlists.",
      blueText: "O'Reilly",
    },
    {
      savings: 215.88,
      screenNumber: 4,
      name: "Mango",
      titleText: "Learning a new language?",
      preDescription: "Use",
      postDescription:
        "for free! Over 70 self-paced language learning courses and dialects.\
      Learners are introduced to vocabulary, cultural insights, grammar and\
      more. The courses are delivered by native speakers. They include\
      critical-thinking and memory-building exercises.",
      blueText: "Mango Language App",
    },
    {
      savings: 468,
      screenNumber: 5,
      name: "Borrow Device",
      titleText: "Need iPad, kobo or Chromebook?",
      preDescription:
        "Our libraries has lendable tech, like Chromebooks and iPads, \
        that you can try out at your own pace, or birding backpacks to start your weekend adventure! ",
      postDescription:
        "This includes iPad, Kobo readers, Chromebooks, CD/DVD drives etc.",
      blueText: "",
    },
    {
      savings: 359.88,
      screenNumber: 6,
      name: "PressReader",
      titleText: "How about Newspapers & magazines?",
      preDescription:
        " gives you access to thousands of stories in newspapers and magazines throughout the world including local publications like The Vancouver Sun, The Province and National Post..",
      postDescription: "",
      blueText: "PressReader",
    },
    {
      savings: 119.88,
      screenNumber: 7,
      name: "TumbleBook",
      titleText: "TumbleBook  for kids?",
      preDescription: "",
      postDescription:
        " Library is a streaming ebook service for grades K-6 with animated picture books, chapter books and non-fiction books",
      blueText: "TumbleBook",
    },
    {
      savings: 94.5,
      screenNumber: 8,
      name: "CreativeBug",
      titleText: "Heard about CreativeBug?",
      preDescription:
        "Learn how to master jewellery making, knitting, crocheting, sewing, painting and more. Come discover how you're more creative than you think.",
      postDescription: "",
      blueText: "",
    },
  ];

  return (
    <>
      <NavBar />
      <Center justifyContent={"center"} as="section">
        <Box
          maxW="7xl"
          px={{ base: "6", lg: "8" }}
          py={{ base: "16", sm: "20" }}
          textAlign="center"
        >
          {screen == 0 && <StartScreen handleClick={handleClick} />}
          {screen > 0 && screen < 9 ? (
            <GenericBenefitScreen
              benefit={benefits[screen - 1]}
              handleClick={handleClick}
            />
          ) : null}
          {/* {screen == 1 && <LibbyScreen handleClick={handleClick} />}
          {screen == 2 && <LinkedInScreen handleClick={handleClick} />}
          {screen == 3 && <OreillyScreen handleClick={handleClick} />}
          {screen == 4 && <MangoScreen handleClick={handleClick} />}
          {screen == 5 && <BorrowDeviceScreen handleClick={handleClick} />}
          {screen == 6 && <PressReaderScreen handleClick={handleClick} />}
          {screen == 7 && <TumbleBookScreen handleClick={handleClick} />}
          {screen == 8 && <CreativeBugScreen handleClick={handleClick} />} */}
          {screen == 9 && (
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
      <Box as="section" px={{ base: "6", lg: "12" }} mt={24} bg="gray.50">
        <Footer />
      </Box>
    </>
  );
}
