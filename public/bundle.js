'use strict';

// Obtenemos boton y lista
const button = document.querySelector("#button");
const list = document.querySelector("#list");
const ul = document.querySelector("#list__hide");

// Creamos la funcion para el menu hamburguesa
const change = () => {
  button.classList.toggle("change");
  list.classList.toggle("change__menu");
};

const executeChange = () => {
  button.addEventListener("click", change);
  ul.addEventListener("click", change);
};

// Traemos desde el HTMl es selector
const date = document.querySelector("#year");

const dateNow = new Date();
const now = dateNow.getFullYear();

const changeYear = () => {
  date.textContent = now;
};

// Funcion para mostrar barrar de skill:
const bars = (percentage, number, progressing, circle) => {
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
const numberHtml = document.querySelector("#percent__html");
const circleHtml = document.querySelector("#circle__html");
const progressingHtml = document.querySelector("#progressing__html");

const numberCss = document.querySelector("#percent__css");
const circleCss = document.querySelector("#circle__css");
const progressingCss = document.querySelector("#progressing__css");

const numberJs = document.querySelector("#percent__js");
const circleJs = document.querySelector("#circle__js");
const progressingJs = document.querySelector("#progressing__js");

const numberRj = document.querySelector("#percent__rj");
const circleRj = document.querySelector("#circle__rj");
const progressingRj = document.querySelector("#progressing__rj");

// Ejecutamos las funciones:
executeChange();
changeYear();
bars(90, numberHtml, progressingHtml, circleHtml);
bars(85, numberCss, progressingCss, circleCss);
bars(70, numberJs, progressingJs, circleJs);
bars(65, numberRj, progressingRj, circleRj);
