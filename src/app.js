import executeChange from "./hamburger.js";
import changeYear from "./date.js";
import bars from "./skills.js";

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
executeChange();
changeYear();
bars(90, numberHtml, progressingHtml, circleHtml);
bars(85, numberCss, progressingCss, circleCss);
bars(70, numberJs, progressingJs, circleJs);
bars(65, numberRj, progressingRj, circleRj);
