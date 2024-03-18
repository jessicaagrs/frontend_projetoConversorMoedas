'use client';
import { Colors } from "@/enums/colors";
import { useCurrencyData } from "@/hooks/useCurrencyData";
import styled from "styled-components";

type InputValuesProps = {
    textLabel: string;
    enabled: boolean;
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
    color: ${Colors.TEXT_LABEL_INPUT};
`;

const Input = styled.input`
    width: 160px;
    height: 36px;
    border: 1px solid ${Colors.BORDER};
    margin-top: 0.5rem;
    box-shadow: 4px 4px 8px 1px ${Colors.SHADOW};
    border-radius: 2px;
    &:focus {
        border: 3px solid ${Colors.BORDER};
        outline: none;
    }
`;

export default function InputValues({ textLabel, enabled }: InputValuesProps) {
    // const {data} = useCurrencyData();

    // if (!data) {
    //     // Se os dados ainda não estiverem disponíveis, retorne null ou um indicador de carregamento
    //     return null; // ou um indicador de carregamento
    // }

    return (
        <Container>
            <Label htmlFor="textInput">{textLabel}</Label>
            <Input type="text" name="textInput" readOnly={enabled} />
        </Container>
    );
};