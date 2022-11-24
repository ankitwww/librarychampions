import * as React from "react";
import { Box, Flex, HStack, useColorModeValue as mode } from "@chakra-ui/react";
import Logo from "../../public/logo.jpg";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <Box>
      <Box as="header" bg="white" borderBottomWidth="1px">
        <Box maxW="7xl" mx="auto" py="4" px={{ base: "6", md: "8" }}>
          <Flex as="nav" justify="space-between">
            <HStack spacing="8">
              <Box as="a" href="#" rel="home">
                <Link passHref href="/">
                  <div>
                    <Image
                      src={Logo}
                      style={{ borderRadius: "16px" }}
                      alt="Library Champions Logo"
                    />
                  </div>
                </Link>
              </Box>
            </HStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
