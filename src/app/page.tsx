'use client'
import styled from "styled-components";
import image from "../../public/Mask.png"

const Body = styled.body`
background-image: url(${image.src});
background-size: cover;
background-repeat: no-repeat;
`;

export default function Home() {
  return (
    <Body >
    </Body>
  );
}
