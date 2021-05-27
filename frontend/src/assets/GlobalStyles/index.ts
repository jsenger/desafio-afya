import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --main-color: #004aad;
    --background-color: #ecebe4;
    --main-button-color: #fcbf49;
    --main-text-color: #212529;
    --danger-color: #ff312e;
    --warning-color: #ff8600;

    --main-font: 'Montserrat', sans-serif;
    --secondary-font: 'KoHo', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--main-font);
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background-color);
  }
`;
