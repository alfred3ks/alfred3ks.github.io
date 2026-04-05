import initMenu from './modules/menu.js';
import changeYear from './modules/changeYear.js';
import barSkill from './modules/barSkill.js';

import renderDeveloper from './modules/renderDeveloper.js';
import renderProjects from './modules/renderProjects.js';

// Traemos las variables del HTML para las skills:
const numberHtml = document.querySelector('#percent__html');
const circleHtml = document.querySelector('#circle__html');
const progressingHtml = document.querySelector('#progressing__html');

const numberCss = document.querySelector('#percent__css');
const circleCss = document.querySelector('#circle__css');
const progressingCss = document.querySelector('#progressing__css');

const numberJs = document.querySelector('#percent__js');
const circleJs = document.querySelector('#circle__js');
const progressingJs = document.querySelector('#progressing__js');

const numberReact = document.querySelector('#percent__rj');
const circleReact = document.querySelector('#circle__rj');
const progressingReact = document.querySelector('#progressing__rj');

// Ejecutamos las funciones:
initMenu();
changeYear();
barSkill(90, numberHtml, progressingHtml, circleHtml);
barSkill(85, numberCss, progressingCss, circleCss);
barSkill(80, numberJs, progressingJs, circleJs);
barSkill(75, numberReact, progressingReact, circleReact);

renderDeveloper();
renderProjects();
