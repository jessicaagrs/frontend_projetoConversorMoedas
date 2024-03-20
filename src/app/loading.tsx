'use client'
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export default function Loading() {
    return (
        <Container>
            <p>Loading...</p>
            <Image
                src="/timeLoading.gif"
                alt="waiting for page to load"
                width={300}
                height={300}
            />
        </Container>
    );
}