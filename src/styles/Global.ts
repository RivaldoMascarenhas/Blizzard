import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{

    margin:0;

    padding: 0;

    box-sizing: border-box;

}


body{
    
    font-family: 'Poppins', sans-serif;

    background-color: ${(props) => props.theme["background"]};
    color: ${(props) => props.theme.white};

    -webkit-font-smoothing: antialiased;
        
}

body, input, textarea,button{

    font-family: 'Poppins', sans-serif;

    line-height: 130%;

    font-weight: 400;

    font-size: 1rem;

}
`;
