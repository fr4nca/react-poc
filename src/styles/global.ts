import styled, { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 14px 'Lato', sans-serif;
  }

  a {
    text-decoration: none
  }

  ul {
    list-style: none
  }

  button {
    cursor: pointer;
  }

`;

export const Button = styled.button`
  margin: 5px 0 0;
  height: 44px;
  background: #fff;
  font-weight: bold;
  color: #551792;
  border: 0;
  width: 315px;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.1, '#fff')};
  }
`;
