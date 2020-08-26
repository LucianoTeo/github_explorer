import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/background-github.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5;
    -webkit-font-smoothing: antialised;
    background-image: url('${githubBackground}');
    background-repeat: no-repeat;
    background-position: 70% top;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button:hover {
    cursor: pointer;
  }
`;