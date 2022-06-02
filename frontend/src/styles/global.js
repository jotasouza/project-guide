import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: 0;
}

:root{
    --background-color: #F0F0F5;
    --font-color: #6C6C80;
    --title-color: #10002b;
    --primary-color: #3a0ca3;
    --secondary-color: #3f37c9;
    --tertiary-color:#ffffff;
}

body{
    background-color: var(--background-color);
    color: var(--font-color)
}

body, input, button{
    font-family: 'Roboto Mono', monospace;
    font-size: 1rem;
}

h1, h2, h3, h4, h5, h6{
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
}

button{
    cursor: pointer;
}

button:hover{
    filter: brightness(90%);
}

`;
