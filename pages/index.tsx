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
import { HiArrowRight } from "react-icons/hi";
import NextLink from "next/link";

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
            <HStack
              className="group"
              as="a"
              href="#"
              px="2"
              py="1"
              bg={mode("gray.200", "gray.700")}
              rounded="full"
              fontSize="sm"
              mb="8"
              display="inline-flex"
              minW="18rem"
            >
              <Badge
                px="2"
                variant="solid"
                colorScheme="green"
                rounded="full"
                textTransform="capitalize"
              >
                New
              </Badge>
              <Box fontWeight="medium">Learn more about Library Champions</Box>
              <Box
                aria-hidden
                transition="0.2s all"
                _groupHover={{ transform: "translateX(2px)" }}
                as={HiArrowRight}
                display="inline-block"
              />
            </HStack>
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
            <Stack direction={{ base: "column", sm: "row" }} spacing="4" mt="8">
              <NextLink href="/calculate-library-card-savings" passHref>
                <Button
                  size="lg"
                  colorScheme="blue"
                  height="14"
                  px="8"
                  fontSize="md"
                >
                  Calculate Savings
                </Button>
              </NextLink>
              <NextLink
                href="https://www.vpl.ca/librarycard"
                target={"_blank"}
                passHref
              >
                <Button
                  size="lg"
                  bg="white"
                  color="gray.800"
                  _hover={{ bg: "gray.50" }}
                  height="14"
                  px="8"
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
    </>
  );
}
