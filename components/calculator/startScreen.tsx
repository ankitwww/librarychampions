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
export const StartScreen = ({ handleClick }: any) => (
  <>
    <Box>
      <Heading
        my="4"
        fontSize={{ base: "4xl", md: "6xl" }}
        fontWeight="extrabold"
        letterSpacing="tight"
        lineHeight="1.5"
      >
        How much you can save with{" "}
        <Box as="mark" bg="unset" color={mode("blue.600", "blue.200")}>
          your free Library card?
        </Box>{" "}
      </Heading>
      <Text fontSize="lg" maxW="xl" mx="auto">
        Just answer a few basic questions about your preferences, and we will
        calculate the potential savings for you with a free Library card
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
          onClick={() => handleClick(0)}
        >
          Start Now
        </Button>
      </Stack>
    </Box>
  </>
);
