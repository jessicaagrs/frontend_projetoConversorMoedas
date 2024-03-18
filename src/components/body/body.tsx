'use client';
import styled from "styled-components";
import image from "../../../public/Mask.png";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CurrencyContext } from "@/contexts/currency-context";


const BodyBackground = styled.body`
    background-image: url(${image.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    overflow: hidden;
    margin-left: 5rem;
`;

const client = new QueryClient();
export default function Body(props: { children: React.ReactNode; }) {
    return (
        <QueryClientProvider client={client}>
            <BodyBackground>
                {props.children}
            </BodyBackground>
        </QueryClientProvider>
    );
};