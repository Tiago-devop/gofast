import { createGlobalStyle } from "styled-components";
import 'antd/dist/antd.css';


const GlobalStyle = createGlobalStyle`
  html {
    background-color:  	#F0F8FF;
  }
  body {
    margin: 0 auto !important;
    padding: 0;
    box-sizing: border-box;
    height: 1200px;
    max-width: 1200px;
    background-color: #783CB8;
  }
`;

export default GlobalStyle;
