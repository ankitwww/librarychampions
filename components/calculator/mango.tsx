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
export const MangoScreen = ({ handleClick }: any) => (
  <>
    <Heading
      my="4"
      fontSize="4xl"
      fontWeight="extrabold"
      letterSpacing="tight"
      lineHeight="1.2"
    >
      Learning new
      <Box
        as="mark"
        bg="unset"
        ml={2}
        color={mode("blue.600", "blue.200")}
        whiteSpace="nowrap"
      >
        Language?
      </Box>
    </Heading>
    <Text fontSize="lg" maxW="xl" mx="auto">
      Use
      <Box
        as="mark"
        fontWeight={"extrabold"}
        mx={1}
        color={mode("blue.500", "blue.300")}
        bg="transparent"
      >
        Mango Language App
      </Box>{" "}
      for free! Over 70 self-paced language learning courses and dialects.
      Learners are introduced to vocabulary, cultural insights, grammar and
      more. The courses are delivered by native speakers. They include
      critical-thinking and memory-building exercises.
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
        onClick={() => handleClick(4, 215.88)}
      >
        Yes
      </Button>
      <Button
        size="lg"
        h="16"
        px="10"
        fontWeight="bold"
        flex={{ md: "1" }}
        onClick={() => handleClick(4, 0)}
      >
        No
      </Button>
    </Stack>
  </>
);
