'use client';
import LogoNavBar from "./navbar-logo";
import styled from "styled-components";
import { Colors } from "@/enums/colors";
import useCurrency from "@/hooks/useCurrency";
import { FormatData } from "@/utils/formatter";

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

const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export default function NavBar() {
    const {updateDate} = useCurrency();

    const currentDate = FormatData(updateDate)

    return (
        <Nav>
            <LogoNavBar />
            <NavContainer>
                <SpanDate>{currentDate}</SpanDate>
                <SpanMessage>Dados de câmbio disponibilizados pela Morningstar.</SpanMessage>
            </NavContainer>
        </Nav>
    );
}
