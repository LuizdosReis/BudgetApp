import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
  html {
    font-size: 62.5%;
    background: #eee;
  }

  body {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 1.6rem;
  }
`;

export default Base;
