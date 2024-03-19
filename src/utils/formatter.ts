export function FormatterNumberInReal(value: number | undefined) {
  if (value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return "";
}

export const MaskCurrencyInDollar = (value: string, typeMask: string): string => {
  const numericValue = value.replace(/\D/g, "");

  const formattedValue =
    typeMask == "dollar" ? "$ " + numericValue : "R$ " + numericValue;

  if (numericValue.length > 2) {
    return formattedValue.replace(/(\d+)(\d{2})$/, "$1,$2");
  } else {
    return formattedValue;
  }
};
