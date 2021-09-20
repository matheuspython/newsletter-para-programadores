import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,700&display=swap');
:root {
    --primary-color: #fd951f;
    --bg-color: #130f0d;
    --text-color: #f0f0f5;
    --light-color: rgba(255, 255, 255, 0.04);
}  
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,body{
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }
  body{
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    transition:.4s;
  }
  .container{
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2%;
  }
`