import { createGlobalStyle } from "styled-components";
import 'antd/dist/antd.css';


const GlobalStyle = createGlobalStyle`
  html {
    background-color:  	#6A6A6A;
  }
  body {
    background-color: #783CB8;
    margin: 0 auto !important;
    box-sizing: border-box;
    max-width: 1200px;
    height: 1400px;
    color: white;
    padding: 0;
    position: relative;
  }
`;

export default GlobalStyle;
