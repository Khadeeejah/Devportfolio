import '@fontsource/figtree/700.css';
import '@fontsource/figtree/400.css';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Head from 'next/head';

const theme = extendTheme({
  fonts: {
    heading: `'Figtree', sans-serif`,
    body: `'Figtree', sans-serif`,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Joke Bisman - Full Stack Developer</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
