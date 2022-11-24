import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {

}

* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html,
body,
button,
textarea,
input {
  font-family: 'Raleway', sans-serif;

  @media (max-width: 768px) {
    font-size: 93.75%;
  }

  @media (max-width: 425px) {
    font-size: 87.50%;
  }
}

`;

export default GlobalStyle;
