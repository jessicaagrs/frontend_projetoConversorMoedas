'use client';

import { ButtonConverterIcon } from "@/components/formDollar/converter-button-icon";
import FilterTypeBuy from "@/components/formDollar/filter-type-buy";
import { Colors } from "@/enums/colors";
import useCurrency from "@/hooks/useCurrency";
import { FormatterNumberInPercentage, MaskCurrencyInDollar } from "@/utils/formatter";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const SectionInputValues = styled.section`
  display: flex;
  gap: 24px;
  margin-bottom: 2rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
    color: ${Colors.TEXT_LABEL_INPUT};

    @media (max-width: 415px) {
        font-size: 16px;
        line-height: 20px;
    }
`;

const Input = styled.input`
    width: 160px;
    height: 36px;
    border: 1px solid ${Colors.BORDER};
    margin-top: 0.5rem;
    box-shadow: 4px 4px 8px 1px ${Colors.SHADOW};
    border-radius: 2px;
    font-size: 16px;
    color: ${Colors.TEXT_VALUE_INPUT};
    line-height: 24px;
    padding: 1.2rem;
    &:focus {
        outline: none;
    }

    ${(props) =>
    props.name === 'textInputDollar' &&
    `
        border: 1px solid ${Colors.BORDER};
        &:focus {
            border: 3px solid ${Colors.BORDER};
            outline: none;
            color: ${Colors.TEXT_LABEL_INPUT};
        }
    `}

    @media (max-width: 415px) {
        width: 140px;
        height: 36px;
        font-size: 14px;
        line-height: 20px;
        padding: 0.8rem;
    }
`;

const Button = styled.button`
    width: 150px;
    height: 45px;
    margin-top: 2rem;
    color: #fff;
    background-color: ${Colors.BACKGROUND_BUTTON};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid ${Colors.BORDER_BUTTON};

    &:hover {
      background-color: ${Colors.TEXT_VALUE_INPUT};
      border: 1px solid ${Colors.BACKGROUND_BUTTON};
    }

    @media (max-width: 320px) {
        height: 35px;
        width: 110px;
        font-size: 12px;
        margin-top: 1rem;
    }
`;

export default function Home() {
  const router = useRouter();
  const { dollarValue, setDollarValue, stateFee } = useCurrency();

  const handleConverterClick = () => {
    try {
      if (dollarValue === '') throw new Error('Por favor, informe o valor em dólar para converter.');

      router.push("/result");

    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <main>
      <SectionInputValues>
        <Container>
          <Label htmlFor="textInputDollar">Dólar</Label>
          <Input type="text" name="textInputDollar" readOnly={false} value={dollarValue} onChange={(e) => setDollarValue(MaskCurrencyInDollar(e.target.value, "dollar"))} />
        </Container>
        <Container>
          <Label htmlFor="textInputTax">Taxa do Estado</Label>
          <Input type="text" name="textInputTax" readOnly={true} value={FormatterNumberInPercentage(stateFee)} />
        </Container>
      </SectionInputValues>
      <section>
        <FilterTypeBuy />
      </section>
      <Button onClick={handleConverterClick}>
        <ButtonConverterIcon />
        Converter
      </Button>
    </main>
  );
}
