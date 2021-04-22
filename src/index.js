import React from 'react';
import ReactDOM from "react-dom";

import Game from "./Game/Game";
import Footer from "./Footer/Footer";

const $html = document.querySelector('html')
const $checkbox= document.querySelector('#switch')

$checkbox.addEventListener('change', function(){
  $html.classList.toggle('dark-mode')
})

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    
    <Game />
    <Footer /> 
  </React.StrictMode>,
  rootElement
);
