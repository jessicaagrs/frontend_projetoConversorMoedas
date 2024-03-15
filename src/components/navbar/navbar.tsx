'use client';
import { useEffect, useState } from "react";
import LogoNavBar from "./navbar-logo";
import styled from "styled-components";
import { Colors } from "@/enums/colors";

const SpanDate = styled.span`
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    color: ${Colors.TEXT};
`;

const SpanMessage = styled.span`
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    color: ${Colors.TEXT_MESSAGE};
`;

const Nav = styled.nav`
    display: flex;
    gap: 48px;
    align-items: center;
    margin: 3.5rem 0;
`;

const NavContainer  = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export default function NavBar() {
    const [date, setDate] = useState<string>("");
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const currentDate = new Date();

        const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: '2-digit' };
        const formattedDate = currentDate.toLocaleDateString('pt-BR', dateOptions);
        setDate(formattedDate);

        const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
        const formattedTime = currentDate.toLocaleTimeString('pt-BR', timeOptions);
        setTime(formattedTime);
    }, []);

    return (
        <Nav>
            <LogoNavBar />
            <NavContainer>
                <SpanDate>{date} | {time}</SpanDate>
                <SpanMessage>Dados de câmbio disponibilizados pela Morningstar.</SpanMessage>
            </NavContainer>
        </Nav>
    );
}
