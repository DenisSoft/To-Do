import { injectGlobal } from 'styled-components';
import webfont from './fonts/fontawesome-webfont.woff2';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: webfont;
    src: url('${webfont}') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  
html{
    height: 100%;
}

body{
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: 30px;
    color: black;
    font-family: cursive;
}
.Header{
    flex: 0 0 auto;
}

.Content{
    flex: 1 0 auto;
}

.Footer{
    flex: 0 0 auto;
}

progress{
    width: 97.9%;
    height: 10px;
    margin: 0 20px 0 20px;
}
.ButtonInForm {
    display: block;
    width: 30px;
    height: 30px;
    margin: 4px;
    font-size: 30px; 
    cursor: pointer;
}
a{
    text-decoration: none;
}
.InputForm {
    background-color: transparent;
    font-family: cursive;
    font-size: 18px;
    border: 1px solid black;
    color: inherit;
    font-size: 0,6em;
    margin: 0;
    border-radius: 3px 0 0 3px;
    height: 35px;
    padding: 0 5px 7px 5px;
}

input[type="search"] {
    border: none; 
    outline: none;
    -webkit-appearance: none; 
    width: 274px; 
    vertical-align: middle; 
}

:before{
    font-family: "webfont";
    font-size: 18px;    
    margin: 0px 0 1px 6px;
    display: block;
    }
}
`;
