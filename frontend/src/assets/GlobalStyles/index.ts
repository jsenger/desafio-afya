import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --main-color: #D40054;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body { 
    background: #f3eff5ff;
  }
`;
