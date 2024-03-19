'use client';

import { ButtonConverterIcon } from "@/components/formDollar/converter-button-icon";
import FilterTypeBuy from "@/components/formDollar/filter-type-buy";
import { Colors } from "@/enums/colors";
import useCurrency from "@/hooks/useCurrency";
import { FormatterNumberInReal, MaskCurrencyInDollar } from "@/utils/formatter";
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
`;

export default function Home() {
  const router = useRouter();
  const { exchangeRate, dollarValue, setDollarValue, setExchangeRate } = useCurrency();

  const handleConverterClick = () => {
    router.push("/result");
  };

  return (
    <main>
      <SectionInputValues>
        <Container>
          <Label htmlFor="textInputDollar">Dólar</Label>
          <Input type="text" name="textInputDollar" readOnly={false} value={dollarValue} onChange={(e) => setDollarValue(MaskCurrencyInDollar(e.target.value, "dollar"))} />
        </Container>
        <Container>
          <Label htmlFor="textInputTax">Taxa de Câmbio</Label>
          <Input type="text" name="textInputTax" readOnly={true} value={FormatterNumberInReal(exchangeRate)} />
        </Container>
      </SectionInputValues>
      <section>
        <FilterTypeBuy />
      </section>
      <button onClick={handleConverterClick}>
        <ButtonConverterIcon />
        Converter
      </button>
    </main>
  );
}
