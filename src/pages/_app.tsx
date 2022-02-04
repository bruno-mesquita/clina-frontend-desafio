import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { ApiConfig } from '@components';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <ApiConfig>
      <Component {...pageProps} />
    </ApiConfig>
  </ChakraProvider>
);

export default MyApp;
