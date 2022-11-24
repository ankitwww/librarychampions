import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title key="title">Library Champions OutReach - NewToBC</title>
        <meta
          name="description"
          key="description"
          content="A fun project by North Shore Library Champions - Fall 2022 batch"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Library Champions OutReach - NewToBC"
        />
        <meta
          property="og:description"
          key="og:description"
          content="A fun project by North Shore Library Champions - Fall 2022 batch"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://librarychampions.ankitwww.com/"
        />
        <meta
          property="og:image"
          key="og:image"
          content="https://newtobc.ca/wp-content/uploads/2021/03/Library-Champions-Project-Header.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
