"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import theme from './theme/chakra';
const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </QueryClientProvider>
  );
}
