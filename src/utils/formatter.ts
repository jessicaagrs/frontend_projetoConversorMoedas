export default function FormatterNumber(value: number | undefined) {
  if (value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return "";
}
