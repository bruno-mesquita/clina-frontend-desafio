import type { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';

export const StylesProvider: FC = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
