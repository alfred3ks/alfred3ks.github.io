import executeChange from './hamburger.js';
import changeYear from './date.js';
import bars from './skills.js';

import changeDeveloper from './changeDeveloper.js';
import changeProjects from './changeProject.js';

// Traemos las variables del HTML:
const numberHtml = document.querySelector('#percent__html');
const circleHtml = document.querySelector('#circle__html');
const progressingHtml = document.querySelector('#progressing__html');

const numberCss = document.querySelector('#percent__css');
const circleCss = document.querySelector('#circle__css');
const progressingCss = document.querySelector('#progressing__css');

const numberJs = document.querySelector('#percent__js');
const circleJs = document.querySelector('#circle__js');
const progressingJs = document.querySelector('#progressing__js');

const numberRj = document.querySelector('#percent__rj');
const circleRj = document.querySelector('#circle__rj');
const progressingRj = document.querySelector('#progressing__rj');

// Ejecutamos las funciones:
executeChange();
changeYear();
bars(90, numberHtml, progressingHtml, circleHtml);
bars(85, numberCss, progressingCss, circleCss);
bars(70, numberJs, progressingJs, circleJs);
bars(65, numberRj, progressingRj, circleRj);

changeDeveloper();
changeProjects();
