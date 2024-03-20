'use client';

import ButtonPreview from "@/components/result/button-preview";
import { Colors } from "@/enums/colors";
import useCalculateResult from "@/hooks/useCalculateResult";
import useCurrency from "@/hooks/useCurrency";
import { FormatterNumberInPercentage, FormatterNumberInReal } from "@/utils/formatter";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 20px;
    line-height: 32px;
    font-weight: 600;
    color: ${Colors.TEXT};
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 2rem;
`;

const TextResult = styled.p`
    font-size: 64px;
    font-weight: 600;
    line-height: 80px;
    color: ${Colors.BORDER_BUTTON};
`;

const TextDescriptionResult = styled.span`
    font-size: 14px;
    line-height: 32px;
    font-weight: 500;
    color: ${Colors.TEXT_DESCRIPTION};
`;

const TextDetailDescriptionResult = styled.span`
    font-size: 14px;
    line-height: 32px;
    font-weight: 400;
    color: ${Colors.TEXT_VALUE_INPUT};
`;



export default function Result() {
    const { stateFee, dollarRate, typeBuy } = useCurrency();
    const { result } = useCalculateResult();

    return (
        <main>
            <ButtonPreview />
            <Container>
                <Title>O resultado do cálculo é</Title>
                <TextResult>{FormatterNumberInReal(result)}</TextResult>
            </Container>
            <Container>
                <TextDescriptionResult>
                    Compra no {typeBuy.toString()} e taxa de
                    <TextDetailDescriptionResult> {FormatterNumberInPercentage(stateFee)}</TextDetailDescriptionResult>
                </TextDescriptionResult>
                <TextDescriptionResult>
                    Cotação em real sem taxas:
                    <TextDetailDescriptionResult> $ 1,00 = {FormatterNumberInReal(dollarRate)}</TextDetailDescriptionResult>
                </TextDescriptionResult>
            </Container>
        </main>
    );
};