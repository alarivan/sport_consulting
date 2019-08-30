import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700&display=swap');

  * {
    scroll-behavior: smooth;
    box-sizing: border-box;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    margin: 0 auto;
    padding: 0;
    max-width: 1200px;
    color: ${props => props.theme.textColor};
  }
  
  a {
    text-decoration: none;
    color: ${props => props.theme.primaryColor};
    font-weight: bold;

    &:hover {
        color: ${props => props.theme.primaryColorHover};
    }
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;
