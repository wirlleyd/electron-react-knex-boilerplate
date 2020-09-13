import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--black);
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100vw;
  }

  *, button, input{
    border: 0;
    background: none;
    font-family: --"Montserrat", 'Segoe UI', Roboto, Ubuntu, Arial, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  html {
    color: black;
  }

  :root {
    --primary: white
  }
`;
