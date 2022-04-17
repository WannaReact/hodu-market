import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Spoqa Han Sans';
    src: url('/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.otf');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Spoqa Han Sans';
    src: url('/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.otf');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Spoqa Han Sans';
    src: url('/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.otf');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Spoqa Han Sans';
    src: url('/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.otf');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Spoqa Han Sans';
    src: url('/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.otf');
    font-weight: 100;
  }

  html {
    font-size: 62.5%;
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Spoqa Han Sans, sans-serif;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    cursor: pointer;
  }

  button:disabled {
    cursor: default;
  }

  input {
    padding: 0;
    margin: 0;
    border: none;
    background: none;
  }
  
  input:focus {
    outline: none;
  }

  * {
    box-sizing: border-box;
    font-family: Spoqa Han Sans, sans-serif;
  }

  .sr-only {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
    clip: rect(0, 0, 0, 0);
  }

  .ellipsis-single {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .ellipsis-double {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export default GlobalStyle;
