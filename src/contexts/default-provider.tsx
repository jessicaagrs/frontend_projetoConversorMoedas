'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CurrencyContextProvider } from "./currency-context";

type DefaultProviderProps = {
    children: React.ReactNode;
};
export default function DefaultProvider(props: DefaultProviderProps) {
    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <CurrencyContextProvider>
                {props.children}
            </CurrencyContextProvider>
        </QueryClientProvider>
    );
}