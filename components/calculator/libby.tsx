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
export const LibbyScreen = ({ handleClick }: any) => (
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
        Do you like reading?
      </Box>{" "}
    </Heading>
    <Text fontSize="lg" maxW="xl" mx="auto">
      Using your free Library Card, you can borrow ebooks, audiobooks,
      magazines, and more from your local library for free!{" "}
      <Box
        as="mark"
        fontWeight={"extrabold"}
        mr={1}
        color={mode("blue.500", "blue.300")}
        bg="transparent"
      >
        Libby
      </Box>
      is the newer library reading app by OverDrive, loved by millions of
      readers worldwide.
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
        onClick={() => handleClick(1, 119.88)}
      >
        Yes
      </Button>
      <Button
        size="lg"
        h="16"
        px="10"
        fontWeight="bold"
        flex={{ md: "1" }}
        onClick={() => handleClick(1, 0)}
      >
        No
      </Button>
    </Stack>
  </>
);
