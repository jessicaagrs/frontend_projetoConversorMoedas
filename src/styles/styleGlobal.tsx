'use client';
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    background-image: url("/Mask.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    overflow: hidden;
    margin-left: 5rem;

    @media (max-width: 415px) {
        margin-left: 1rem;
    }
}
  
`;

export default GlobalStyles;
