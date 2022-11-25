import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title key="title">
          Biggest Black Friday deal is your free Library Card
        </title>
        <meta
          name="description"
          key="description"
          content="A fun project by North Shore Library Champions - Fall 2022 batch"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Biggest Black Friday deal is your free Library Card"
        />
        <meta
          property="og:description"
          key="og:description"
          content="Do you know how much you can save using a free public library card? A fun project by North Shore Library Champions - Fall 2022 batch"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://librarychampions.ankitwww.com/"
        />
        <meta
          property="og:image"
          key="og:image"
          content="https://librarychampions.ankitwww.com/deal.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
