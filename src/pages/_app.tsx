import type { AppProps } from 'next/app';

import { ApiConfig } from '@components';
import { StylesProvider } from '@styles/Provider';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <StylesProvider>
    <ApiConfig>
      <Component {...pageProps} />
    </ApiConfig>
  </StylesProvider>
);

export default MyApp;
