import ejecutarCambio from "./hamburger.js";
import cambiarAnnio from "./fecha.js";
import barras from "./skills.js";

// Traemos las variables del HTML:
let numberHtml = document.querySelector('#percent__html');
let circleHtml = document.querySelector('#circle__html');
let progressingHtml = document.querySelector('#progressing__html');

let numberCss = document.querySelector('#percent__css');
let circleCss = document.querySelector('#circle__css');
let progressingCss = document.querySelector('#progressing__css');

let numberJs = document.querySelector('#percent__js');
let circleJs = document.querySelector('#circle__js');
let progressingJs = document.querySelector('#progressing__js');

let numberRj = document.querySelector('#percent__rj');
let circleRj = document.querySelector('#circle__rj');
let progressingRj = document.querySelector('#progressing__rj');

// Ejecutamos las funciones:
ejecutarCambio();
cambiarAnnio();
barras(90, numberHtml, progressingHtml, circleHtml);
barras(75, numberCss, progressingCss, circleCss);
barras(55, numberJs, progressingJs, circleJs);
barras(35, numberRj, progressingRj, circleRj);