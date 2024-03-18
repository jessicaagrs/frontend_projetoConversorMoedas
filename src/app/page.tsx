'use client';

import { ButtonConverterIcon } from "@/components/formDollar/converter-button-icon";
import FilterTypeBuy from "@/components/formDollar/filter-type-buy";
import InputValues from "@/components/formDollar/input-values";
import useCurrency from "@/hooks/useCurrency";
import { useCurrencyData } from "@/hooks/useCurrencyData";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const SectionInputValues = styled.section`
  display: flex;
  gap: 24px;
  margin-bottom: 2rem;
`;

export default function Home() {
  const router = useRouter();

  const handleConverterClick = () => {
    router.push("/result");
  };

  return (
    <main >
      <SectionInputValues>
        <InputValues textLabel={"Dólar"} enabled={false} />
        <InputValues textLabel={"Taxa de Câmbio"} enabled={true} />
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
