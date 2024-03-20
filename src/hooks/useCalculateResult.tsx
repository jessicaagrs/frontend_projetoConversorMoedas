import { FormatStringInNumber } from "@/utils/formatter";
import useCurrency from "./useCurrency";
import { TypeBuy } from "@/enums/type-buy";

const calculateResult = (valueDollar: number, stateFee: number, type: TypeBuy) => {
    const IOFMoney = 1.1;
    const IOFCard = 6.4;

    if (type === TypeBuy.MONEY) {
        return (valueDollar + ((valueDollar * stateFee) / 100)) * (valueDollar + ((valueDollar * IOFMoney) / 100));
    } else {
        return (valueDollar + ((valueDollar * stateFee) / 100)) + (valueDollar * ((valueDollar * IOFCard) / 100));
    }
};

export default function useCalculateResult() {
    const { dollarValue, stateFee, typeBuy } = useCurrency();

    const dollarValueNumber = FormatStringInNumber(dollarValue);

    const result = calculateResult(dollarValueNumber, stateFee, typeBuy);


    return {
        result
    };

};