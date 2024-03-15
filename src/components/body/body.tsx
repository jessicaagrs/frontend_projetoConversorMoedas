'use client';
import styled from "styled-components";
import image from "../../../public/Mask.png";


const BodyBackground = styled.body`
    background-image: url(${image.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    overflow: hidden;
    margin-left: 5rem;
`;
export default function Body(props: { children: React.ReactNode }) {
    return (
        <BodyBackground>
            {props.children}
        </BodyBackground>
    );
};