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
import { Benefit } from "../../types/Benefit";
type GenericBenefitScreenProp = {
  benefit: Benefit;
  handleClick: any;
};

export const GenericBenefitScreen = (props: GenericBenefitScreenProp) => {
  const { benefit, handleClick } = props;
  return (
    <>
      <Box>
        <Heading
          my="4"
          fontSize="4xl"
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="1.2"
        >
          <Box as="mark" bg="unset" color={mode("blue.600", "blue.200")}>
            {benefit.titleText}
          </Box>{" "}
        </Heading>
        <Text fontSize="lg" maxW="xl" mx="auto" textAlign={"justify"}>
          {benefit.preDescription}
          <Box
            as="mark"
            fontWeight={"extrabold"}
            mx={1}
            color={mode("blue.500", "blue.300")}
            bg="transparent"
          >
            {benefit.blueText}
          </Box>
          {benefit.postDescription}
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
            onClick={() => handleClick(benefit.screenNumber, benefit.savings)}
          >
            Yes
          </Button>
          <Button
            size="lg"
            h="16"
            px="10"
            fontWeight="bold"
            flex={{ md: "1" }}
            onClick={() => handleClick(benefit.screenNumber, 0)}
          >
            No
          </Button>
        </Stack>
      </Box>
    </>
  );
};
