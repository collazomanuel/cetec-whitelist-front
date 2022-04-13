import { css } from "lit";
export const WhitelistStyles = css`
  /* Side Navigation Menu V2, RWD
  ===================
  Author: https://github.com/pablorgarcia
  */
  @charset "UTF-8";
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);
  body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  line-height: 1.42em;
  color:#A7A1AE;
  background-color:#031926;
  }
  h1 {
  font-size:3em; 
  font-weight: 300;
  line-height:1em;
  text-align: center;
  color: #2f3e46;
  }
  h2 {
  font-size:1em; 
  font-weight: 300;
  text-align: center;
  display: block;
  line-height:1em;
  padding-bottom: 2em;
  color: #FB667A;
  }
  h2 a {
  font-weight: 700;
  text-transform: uppercase;
  color: #FB667A;
  text-decoration: none;
  }
  .blue { color: #2f3e46; }
  .yellow { color: #FFF842; }
  .container th h1 {
  font-weight: bold;
  font-size: 1em;
  text-align: left;
  color: #2f3e46;
  }
  .container td {
  font-weight: normal;
  font-size: 1em;
  -webkit-box-shadow: 0 2px 2px -2px #0E1119;
  -moz-box-shadow: 0 2px 2px -2px #0E1119;
  box-shadow: 0 2px 2px -2px #0E1119;
  }
  .container {
  text-align: left;
  overflow: hidden;
  width: 80%;
  margin: 0 auto;
  display: table;
  padding: 0 0 8em 0;
  }
  .container td, .container th {
  padding-bottom: 2%;
  padding-top: 2%;
  padding-left:2%;  
  }
  /* Background-color of the odd rows */
  .container tr:nth-child(odd) {
  background-color: #f9e7e7;
  }
  /* Background-color of the even rows */
  .container tr:nth-child(even) {
  background-color: #DED6D6;
  }

  .container th {
  background-color: #ada0a6;
  }
  .container td:first-child {
    color: #000000;
  }
  .container tr:hover {
  background-color: #d2cbcb;
  -webkit-box-shadow: 0 6px 6px -6px #0E1119;
  -moz-box-shadow: 0 6px 6px -6px #0E1119;
  box-shadow: 0 6px 6px -6px #0E1119;
  }
  .container td:hover {
  background-color: #7d938a;
  color: #d2cbcb;
  font-weight: bold;

  box-shadow: #d2cbcb -1px 1px, #d2cbcb -2px 2px, #d2cbcb -3px 3px, #d2cbcb -4px 4px, #d2cbcb -5px 5px, #7F7C21 -6px 6px;
  transform: translate3d(6px, -6px, 0);

  transition-delay: 0s;
  transition-duration: 0.4s;
  transition-property: all;
  transition-timing-function: line;
  }

  @media (max-width: 800px) {
  .container td:nth-child(4),
  .container th:nth-child(4) { display: none; }
  }
`;