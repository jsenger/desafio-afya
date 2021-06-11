import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --main-color: #004aad;
    --secondary-color: #26b0baff;
    --background-color: #f3eff5ff;
    --secondary-bg-color: #e9ecef;
    --main-button-color: #fcbf49 ;
    --main-text-color: #191919ff;
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
    scroll-behavior: smooth;
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
