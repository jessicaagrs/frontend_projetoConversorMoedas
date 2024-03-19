'use client';
import { TypeBuy } from "@/enums/type-buy";
import { createContext, useState } from "react";

export const CurrencyContext = createContext({
    exchangeRate: 0,
    updateDate: '',
    dollarValue: '',
    typeBuy: TypeBuy.MONEY,
    setExchangeRate: (value: number) => { },
    setUpdateDate: (value: string) => { },
    setDollarValue: (value: string) => { },
    setTypeBuy: (value: TypeBuy) => { }
});

interface ProviderProps {
    children: React.ReactNode;
}

export function CurrencyContextProvider({ children }: ProviderProps) {
    const [exchangeRate, setExchangeRate] = useState(0);
    const [updateDate, setUpdateDate] = useState('');
    const [dollarValue, setDollarValue] = useState('');
    const [typeBuy, setTypeBuy] = useState(TypeBuy.MONEY);

    return (
        <CurrencyContext.Provider value={{
            exchangeRate,
            updateDate,
            dollarValue,
            typeBuy,
            setExchangeRate,
            setUpdateDate,
            setDollarValue,
            setTypeBuy
        }}>
            {children}
        </CurrencyContext.Provider>
    );
}