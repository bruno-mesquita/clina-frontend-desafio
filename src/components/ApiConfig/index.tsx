import type { FC } from 'react';
import { SWRConfig } from 'swr';

import { fetcher } from '@services/api';

export const ApiConfig: FC = ({ children }) => (
  <SWRConfig value={{ fetcher }}>{children}</SWRConfig>
);
