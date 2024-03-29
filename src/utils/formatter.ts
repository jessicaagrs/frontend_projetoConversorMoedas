export function FormatterNumberInPercentage(value: number | undefined) {
  if (value !== undefined && !isNaN(value)) {
    const formattedValue = ((value * 100) / 100).toLocaleString("pt-BR", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return `${formattedValue.replace(".", ",")} %`;
  }

  return "";
}

export const MaskCurrencyInDollar = (
  value: string,
  typeMask: string
): string => {
  const numericValue = value.replace(/\D/g, "");

  const formattedValue =
    typeMask == "dollar" ? "$ " + numericValue : "R$ " + numericValue;

  if (numericValue.length > 2) {
    return formattedValue.replace(/(\d+)(\d{2})$/, "$1,$2");
  } else {
    return formattedValue;
  }
};

export function FormatData(dateValue: string) {
  if (dateValue != "") {
    const meses = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];

    const data = new Date(dateValue);
    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();
    const horas = data.getHours();
    const minutos = data.getMinutes();

    const dataFormatada = `${dia} de ${mes} de ${ano} | ${horas}:${
      minutos < 10 ? "0" : ""
    }${minutos} UTC`;

    return dataFormatada;
  }

  return "";
}

export function FormatStringInNumber(value: string) {
  if (value != "") {
    const valueNumber = parseFloat(value.replace("$", "").replace(",", "."));

    return valueNumber;
  }

  return 0;
}

export function FormatterNumberInReal(value: number | undefined) {
  if (value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return "";
}