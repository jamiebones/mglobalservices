import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
 
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  main {
    margin-top: 80px;
  }


  .card-component {
    width: 100%;
    padding: 20px;
    color: #000;
    background: #fff;
    margin-top: 20px;
    margin-bottom: 10px;

    min-height: 100%;

    p{
      line-height: 3rem;
    }
  }


  footer{
    margin-top: 30px;
  }

 


  small {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
`
