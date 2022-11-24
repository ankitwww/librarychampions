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
export const LinkedInScreen = ({ handleClick }: any) => (
  <>
    <Heading
      my="4"
      fontSize="4xl"
      fontWeight="extrabold"
      letterSpacing="tight"
      lineHeight="1.2"
    >
      <Box
        as="mark"
        bg="unset"
        color={mode("blue.600", "blue.200")}
        whiteSpace="nowrap"
      >
        Wanna use LinkedIn Learning for free?
      </Box>{" "}
    </Heading>
    <Text fontSize="lg" maxW="xl" mx="auto">
      LinkedIn Learning catalogue offers video courses in business, computer
      technology, software, and creative skills, all conducted by experts in
      their fields. It contains over 16,000 courses with some also available in
      French, German, Japanese, Spanish, Mandarin and Portuguese.
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
        onClick={() => handleClick(2, 359.88)}
      >
        Yes
      </Button>
      <Button
        size="lg"
        h="16"
        px="10"
        fontWeight="bold"
        flex={{ md: "1" }}
        onClick={() => handleClick(2, 0)}
      >
        No
      </Button>
    </Stack>
  </>
);
