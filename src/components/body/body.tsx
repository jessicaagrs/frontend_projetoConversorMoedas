'use client';

import styled from "styled-components";
import image from "../../../public/Mask.png";
import { useCurrencyData } from "@/hooks/useCurrencyData";
import { useEffect } from "react";
import useCurrency from "@/hooks/useCurrency";

const BodyBackground = styled.body`
    background-image: url(${image.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    overflow: hidden;
    margin-left: 5rem;

    @media (max-width: 415px) {
        margin-left: 1rem;
    }
`;

export default function Body(props: { children: React.ReactNode; }) {
    const { data, isError } = useCurrencyData();
    const { setUpdateDate, setDollarRate } = useCurrency();

    useEffect(() => {
        if (data) {
            setUpdateDate(data.USDBRL.create_date);
            setDollarRate(Number(data.USDBRL.ask));
        }
    }, [data]);

    try {
        if (isError) throw new Error("Houve uma falha ao buscar os dados. Entre em contato com suporte ou tente novamente mais tarde.");
    } catch (error: any) {
        alert(error.message);
    }

    return (
        <BodyBackground>
            {props.children}
        </BodyBackground>
    );
};