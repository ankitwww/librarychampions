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
export const OreillyScreen = ({ handleClick }: any) => (
  <>
    <Heading
      my="4"
      fontSize="4xl"
      fontWeight="extrabold"
      letterSpacing="tight"
      lineHeight="1.2"
    >
      Need
      <Box
        as="mark"
        bg="unset"
        mx={2}
        color={mode("blue.600", "blue.200")}
        whiteSpace="nowrap"
      >
        O&apos;Reilly
      </Box>{" "}
      Books or Courses?
    </Heading>
    <Text fontSize="lg" maxW="xl" mx="auto">
      O&apos;Reilly for Public Libraries (formerly Safari Books Online) offers
      resources for learning about business, technology, design, science,
      engineering, travel, hobbies, health and more. O&apos;Reilly includes over
      50,000 books from top publishers (including pre-release titles for the
      most up-to-date information), more than 30,000 hours of video content,
      case studies from top companies, learning paths and expert playlists.
    </Text>
    <Stack
      direction={{ base: "column", sm: "row" }}
      mt="10"
      justify="center"
      spacing={{ base: "3", md: "5" }}
      maxW="md"
      mx="auto"
    >
      <Button
        size="lg"
        h="16"
        px="10"
        colorScheme="blue"
        fontWeight="bold"
        flex={{ md: "1" }}
        onClick={() => handleClick(3, 588)}
      >
        Yes
      </Button>
      <Button
        size="lg"
        h="16"
        px="10"
        fontWeight="bold"
        flex={{ md: "1" }}
        onClick={() => handleClick(3, 0)}
      >
        No
      </Button>
    </Stack>
  </>
);
