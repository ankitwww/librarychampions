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
      Use
      <Box
        as="mark"
        bg="unset"
        mx={2}
        color={mode("blue.600", "blue.200")}
        whiteSpace="nowrap"
      >
        LinkedIn Learning
      </Box>{" "}
      for free?
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
