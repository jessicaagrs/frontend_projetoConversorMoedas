import { CurrencyContext } from "@/contexts/currency-context";
import { useContext } from "react";

export default function useCurrency() {
    return useContext(CurrencyContext);
}