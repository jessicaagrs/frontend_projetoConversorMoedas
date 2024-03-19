'use client';

import { Colors } from "@/enums/colors";
import { TypeBuy } from "@/enums/type-buy";
import useCurrency from "@/hooks/useCurrency";
import { useState } from "react";
import styled from "styled-components";

const Span = styled.span`
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
    color: ${Colors.TEXT_LABEL_INPUT};
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ContainerRadios = styled.div`
    display: flex;
    align-items: center;
`;

const InputRadio = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 100%;
    margin-right: 5px;
    cursor: pointer;
`;

const LabelRadio = styled.label`
    color: ${Colors.TEXT_LABEL_INPUT};
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    margin-right: 15px;
`;

export default function FilterTypeBuy() {
    const [checkedMoney, setCheckedMoney] = useState(false);
    const [checkedCard, setCheckedCard] = useState(false);
    const { setTypeBuy } = useCurrency();


    const handleClick = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const radioButtonOrigin = ev.currentTarget.ariaLabel;

        if (radioButtonOrigin === 'Radio Money') {
            setCheckedMoney(true);
            setCheckedCard(false);
            setTypeBuy(TypeBuy.MONEY);
        } else {
            setCheckedMoney(false);
            setCheckedCard(true);
            setTypeBuy(TypeBuy.CARD);
        }
    };

    return (
        <Container>
            <Span>Tipo de Compra</Span>
            <ContainerRadios>
                <InputRadio
                    aria-label="Radio Money"
                    onClick={handleClick}
                    style={{
                        backgroundColor: checkedMoney ? Colors.BACKGROUND_RADIO_BUTTON : '#fff',
                        border: checkedMoney ? '2px solid' + Colors.TEXT_MESSAGE : '2px solid ' + Colors.BACKGROUND_RADIO_BUTTON
                    }} />
                <LabelRadio>Dinheiro</LabelRadio>
                <InputRadio
                    aria-label="Radio Card"
                    onClick={handleClick}
                    style={{
                        backgroundColor: checkedCard ? Colors.BACKGROUND_RADIO_BUTTON : '#fff',
                        border: checkedCard ? '2px solid' + Colors.TEXT_MESSAGE : '2px solid ' + Colors.BACKGROUND_RADIO_BUTTON
                    }} />
                <LabelRadio>Cartão</LabelRadio>
            </ContainerRadios>
        </Container>
    );
};