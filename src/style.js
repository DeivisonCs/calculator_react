
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(45deg, #96EFFF, #5FBDFF, #7B66FF);
`;

export const CalculatorBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 50%;
    max-width: 450px;
    min-width: 270px;
    height: fit-content;
    padding: 40px 20px;
    border-radius: 20px;
    box-shadow: 0px 0px 2px #00000059;
    background-color: #ffffffad;
`

export const ButtonsArea = styled.div`
    display: grid;
    gap: 5px;

    grid-template-areas:
    'clear clear open_paren close_paren'
    'erase pot raiz divisor'
    'seven eight nine times'
    'four five six minus'
    'one two three plus'
    'zero dot equal plus'
    ;
`