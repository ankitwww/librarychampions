import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Divider,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { links } from "./_data";

export const Footer = () => (
  <>
    <Center>
      <Box as="footer" role="contentinfo">
        <Stack
          justify="center"
          align="center"
          direction={{ base: "column", lg: "row" }}
          py="4"
          spacing="8"
        >
          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            gap="8"
            width={{ base: "full", lg: "auto" }}
          >
            {links.map((group, idx) => (
              <Stack key={idx} spacing="4" minW={{ lg: "40" }}>
                <Stack spacing="3" shouldWrapChildren>
                  {group.links.map((link, idx) => (
                    <Button
                      key={idx}
                      as="a"
                      variant="link"
                      href={link.href}
                      target="_blank"
                    >
                      {link.label}
                    </Button>
                  ))}
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>

        <Stack
          pt="4"
          pb="4"
          maxW="4xl"
          justify="space-between"
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
        >
          <Text fontSize="sm" color="subtle">
            We are grateful for the opportunity to stay, learn and grow on the
            traditional, ancestral and unceded lands of the Skwxwú7mesh Úxwumixw
            (Squamish Nation) and səl̓ílwətaʔɬ (Tsleil-Waututh) Nations.
          </Text>
        </Stack>
        <Divider />
        <Stack
          pt="8"
          pb="12"
          justify="space-between"
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
        >
          <Text fontSize="sm" color="subtle">
            Made with 💖 in Beautiful British Columbia
          </Text>
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="https://www.youtube.com/vancouverlibrary"
              aria-label="Youtube"
              icon={<FaYoutube fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://www.facebook.com/NewToBC"
              aria-label="Facebook"
              icon={<FaFacebookF fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://twitter.com/NewToBC"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
      </Box>
    </Center>
  </>
);
