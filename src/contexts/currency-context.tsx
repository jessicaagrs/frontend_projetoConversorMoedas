'use client';
import { TypeBuy } from "@/enums/type-buy";
import { createContext, useState } from "react";

export const CurrencyContext = createContext({
    updateDate: '',
    dollarValue: '',
    typeBuy: TypeBuy.MONEY,
    stateFee: 0,
    dollarRate: 0,
    setUpdateDate: (value: string) => { },
    setDollarValue: (value: string) => { },
    setTypeBuy: (value: TypeBuy) => { },
    setStateFee: (value: number) => { },
    setDollarRate: (value: number) => { }
});

interface ProviderProps {
    children: React.ReactNode;
}

export function CurrencyContextProvider({ children }: ProviderProps) {
    const [updateDate, setUpdateDate] = useState('');
    const [dollarValue, setDollarValue] = useState('');
    const [typeBuy, setTypeBuy] = useState(TypeBuy.MONEY);
    const [stateFee, setStateFee] = useState(8.19);
    const [dollarRate, setDollarRate] = useState(0);

    return (
        <CurrencyContext.Provider value={{
            updateDate,
            dollarValue,
            typeBuy,
            stateFee,
            dollarRate,
            setUpdateDate,
            setDollarValue,
            setTypeBuy,
            setStateFee,
            setDollarRate
        }}>
            {children}
        </CurrencyContext.Provider>
    );
}