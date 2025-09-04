"use client"

import { Provider } from 'urql';
import { client } from '@/libs/urql';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider value={client}>
      {children}
    </Provider>
  );
}
