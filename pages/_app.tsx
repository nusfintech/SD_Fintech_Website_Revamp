import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@components/layout/Layout';
import theme from 'theme';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://cdn.tailwindcss.com" />
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" />
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
