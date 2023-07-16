"use strict";

// Obtenemos boton y lista
const button = document.querySelector("#button");
const list = document.querySelector("#list");
const ul = document.querySelector("#list__hide");

// Creamos la funcion para el menu hamburguesa
const change = () => {
  button.classList.toggle("change");
  list.classList.toggle("change__menu");
};

// button.addEventListener('click', change);
// ul.addEventListener('click', change);

let ejecutarCambio = () => {
  button.addEventListener("click", change);
  ul.addEventListener("click", change);
};

const dato = document.querySelector("#fecha");

let fecha = new Date();
let actual = fecha.getFullYear();

let cambiarAnnio = () => {
  dato.textContent = actual;
};

// Funcion para mostrar barrar de skill:
let barras = (percentage, number, progressing, circle) => {
  let counter = 0;
  setInterval(() => {
    if (counter === percentage) {
      clearInterval();
    } else {
      counter += 1;
      number.innerHTML = counter + "%";
      progressing.style.width = counter + "%";
      circle.style.left = counter + "%";
    }
  }, 30);
};

// Traemos las variables del HTML:
let numberHtml = document.querySelector("#percent__html");
let circleHtml = document.querySelector("#circle__html");
let progressingHtml = document.querySelector("#progressing__html");

let numberCss = document.querySelector("#percent__css");
let circleCss = document.querySelector("#circle__css");
let progressingCss = document.querySelector("#progressing__css");

let numberJs = document.querySelector("#percent__js");
let circleJs = document.querySelector("#circle__js");
let progressingJs = document.querySelector("#progressing__js");

let numberRj = document.querySelector("#percent__rj");
let circleRj = document.querySelector("#circle__rj");
let progressingRj = document.querySelector("#progressing__rj");

// Ejecutamos las funciones:
ejecutarCambio();
cambiarAnnio();
barras(90, numberHtml, progressingHtml, circleHtml);
barras(85, numberCss, progressingCss, circleCss);
barras(70, numberJs, progressingJs, circleJs);
barras(65, numberRj, progressingRj, circleRj);
