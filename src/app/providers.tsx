// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { CookieProvider } from "./cookieContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CookieProvider>
            <CacheProvider>
                <ChakraProvider>{children}</ChakraProvider>
            </CacheProvider>
        </CookieProvider>
    );
}
