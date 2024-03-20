'use client';

import styled from "styled-components";
import ButtonPreviewIcon from "./button-preview-icon";
import { Colors } from "@/enums/colors";
import { useRouter } from "next/navigation";
import useCurrency from "@/hooks/useCurrency";
import { TypeBuy } from "@/enums/type-buy";

const Button = styled.button`
    width: 130px;
    height: 56px;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid ${Colors.BORDER};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    box-shadow: 4px 4px 8px 1px ${Colors.SHADOW};
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    color: ${Colors.TEXT_LABEL_INPUT};
    margin-bottom: 2rem;

    &:hover {
        background-color: ${Colors.BORDER};
    }

    @media (max-width: 384px) {
        width: 110px;
        height: 36px;
        font-size: 12px;
        line-height: 20px;
    }
`;

export default function ButtonPreview() {
    const router = useRouter();
    const { setDollarValue, setTypeBuy } = useCurrency();

    const handlePreviewPage = () => {
        setTypeBuy(TypeBuy.MONEY);
        setDollarValue('');
        router.push("/");
    };

    return (
        <Button onClick={handlePreviewPage}>
            <ButtonPreviewIcon />
            Voltar
        </Button>
    );
};