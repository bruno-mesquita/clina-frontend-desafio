import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { ApiConfig } from '@components';
import theme from '@styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <ApiConfig>
      <Component {...pageProps} />
    </ApiConfig>
  </ChakraProvider>
);

export default MyApp;
