'use strict';

// Obtenemos boton y lista
const menuButton = document.querySelector('#toggle');
const menuList = document.querySelector('#list');
const navLinks = document.querySelector('#list__hide');

// Creamos la funcion para el menu hamburguesa
const toggleMenu = () => {
  menuButton.classList.toggle('change');
  menuList.classList.toggle('change__menu');
};

const initMenu = () => {
  menuButton.addEventListener('click', toggleMenu);
  navLinks.addEventListener('click', toggleMenu);
};

// Traemos desde el HTMl es selector
const date = document.querySelector("#year");

const dateNow = new Date();
const now = dateNow.getFullYear();

const changeYear = () => {
  date.textContent = now;
};

// Funcion para mostrar barrar de skill:
const barSkill = (percentage, number, progressing, circle) => {
  let counter = 0;
  setInterval(() => {
    if (counter === percentage) {
      clearInterval();
    } else {
      counter += 1;
      number.innerText = counter + '%';
      progressing.style.width = counter + '%';
      circle.style.left = counter + '%';
    }
  }, 30);
};

var developer = [
	{
		user_name: "Alfredo Sánchez",
		profession: "Desarrollador Web",
		skill: [
			"HTML5",
			"CSS3",
			"JavaScript",
			"React.js",
			"NextJS",
			"Node.js",
			"Express.js"
		],
		email: "alfred3ks@proton.me",
		git_hub: "https://github.com/alfred3ks",
		linkedin: "https://www.linkedin.com/in/alfredo-sanchez75/",
		description: "React Developer enfocado en construir aplicaciones web modernas y escalables. Experiencia trabajando con React, JavaScript (ES6+), Vite y consumo de APIs. Me centro en escribir código limpio, reutilizable y en ofrecer una excelente experiencia de usuario.",
		url_image: "../../public/assets/img/logo-alfredo-sanchez.svg"
	}
];

const aboutMe = document.getElementById('about__me');

const renderDeveloper = () => {
  developer.forEach((dev) => {
    const aboutContainer = document.createElement('div');

    const plantilla = `
        <div class="about__image"></div>
        <div class="about__container-header">
          <div class="about__container-header--img">
            <img
              src="${dev.url_image}"
              alt="logo ${dev.user_name}"
            />
          </div>
          <div>
            <h2 class="about__container-header--title">
              Hola, soy <span>${dev.user_name}</span>
            </h2>
            <p class="about__container-header--desc">${dev.profession}.</p>
          </div>
        </div>
        <div class="about__container-text">
          <p>${dev.description}</p>
          <div class="about__container-contact">
            <a href="mailto:${dev.email}"
              ><i class="fa-solid fa-envelope"></i
            ></a>
            <a href="${dev.git_hub}" target="_blank"
              ><i class="fab fa-github"></i
            ></a>
            <a
              href="${dev.linkedin}"
              target="_blank"
              ><i class="fab fa-linkedin"></i
            ></a>
          </div>
        </div>`;

    aboutContainer.innerHTML = plantilla;
    aboutContainer.classList.add('about__container');

    aboutMe.append(aboutContainer);
  });
};

var projects = [
	{
		id: 1,
		title: "Jon Snow",
		sub_title: "Curriculum de Jon Snow.",
		tag: [
			"React",
			"CSS",
			"Mobile First"
		],
		url_image: "../../public/assets/img/jon-snow.jpg",
		url_web: "https://alfred3ks.github.io/jon-snow/",
		url_git_hub: "https://github.com/alfred3ks/jon-snow/"
	},
	{
		id: 2,
		title: "Rick and Morty",
		sub_title: "Rick and Morty app.",
		tag: [
			"React",
			"CCS",
			"TailwindCSS"
		],
		url_image: "../../public/assets/img/rick-and-morty.png",
		url_web: "https://alfred3ks.github.io/rick-and-morty/",
		url_git_hub: "https://github.com/alfred3ks/rick-and-morty/"
	},
	{
		id: 3,
		title: "Jhon Doe",
		sub_title: "Portfolio Jhon Doe.",
		tag: [
			"HTML",
			"CCS",
			"Mobile First"
		],
		url_image: "../../public/assets/img/jonh-doe-screenshot.jpg",
		url_web: "https://alfred3ks.github.io/ejer-html-css-kc/",
		url_git_hub: "https://github.com/alfred3ks/ejer-html-css-kc"
	}
];

const projectsContainer = document.getElementById('projects__container');

const renderProjects = () => {
  projects.forEach((project) => {
    const cardContainer = document.createElement('div');
    const plantilla = `
            <h2 class="card__container-title">${project.title}</h2>
            <div class="card__container-img">
              <a href="${project.url_web}" target="_blank"
                ><img
                  src="${project.url_image}"
                  alt="${project.title}"
              />
              </a>
            </div>
            <div class="card__container-description">
              ${project.tag.map((tech) => `<p>${tech}</p>`).join('')}
            </div>
            <p class="card__container-text">
              ${project.sub_title}
            </p>
            <div class="card__container-button">
              <a href="${project.url_web}" target="_blank"
                ><i class="fa-solid fa-arrow-up-from-bracket"></i>
              </a>
              <a href="${project.url_git_hub}" target="_blank"
                ><i class="fab fa-github"></i>
              </a>
            </div>
`;

    cardContainer.innerHTML = plantilla;
    cardContainer.classList.add('card__container');

    projectsContainer.append(cardContainer);
  });
};

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
