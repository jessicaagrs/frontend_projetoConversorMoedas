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
`;

export default function Body(props: { children: React.ReactNode; }) {
    const { data } = useCurrencyData();
    const { setUpdateDate, setExchangeRate } = useCurrency();

    useEffect(() => {
        if (data) {
            setUpdateDate(data.USDBRL.create_date);
            setExchangeRate(Number(data.USDBRL.ask));
        }
    }, [data]);

    return (
        <BodyBackground>
            {props.children}
        </BodyBackground>
    );
};