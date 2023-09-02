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
      number.innerText = counter + '%';
      progressing.style.width = counter + '%';
      circle.style.left = counter + '%';
    }
  }, 30);
};

const developer = [
  {
    userName: 'Alfredo Sánchez',
    profession: 'Desarrollador Web',
    skill: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js'],
    email: 'alfred3ks@proton.me',
    gitHub: 'https://github.com/alfred3ks',
    linkedin: 'https://www.linkedin.com/in/alfredo-sanchez75/',
    description:
      'Actualmente estoy enfocado y disfrutando construyendo proyectos para la web usando tecnologías como HTML5, CSS3, JavaScript, Frameworks y Librerias como React.<br />Mi interés para este mundo nació por la curiosidad de saber como funcionan los proyectos que viven en internet, su funcionamiento interno y como fueron creados.<br />Mi enfoque es crear interfaces de usuario atractivas e intuitivas.<br />Me apasiona mantenerme al día con las últimas tendencias en el campo del desarrollo web, y siempre estoy buscando oportunidades para aprender y mejorar mis habilidades.',
    urlImage: '../../public/assets/img/logo-alfredo-sanchez.svg',
  },
];

const aboutMe = document.getElementById('about__me');

const changeDeveloper = () => {
  developer.forEach((dev) => {
    const aboutContainer = document.createElement('div');

    const plantilla = `
        <div class="about__image"></div>
        <div class="about__container-header">
          <div class="about__container-header--img">
            <img
              src="${dev.urlImage}"
              alt="logo ${dev.userName}"
            />
          </div>
          <h2 class="about__container-header--title">
            Hola, soy <span>${dev.userName}</span>
          </h2>
          <p class="about__container-header--desc">${dev.profession}.</p>
        </div>
        <div class="about__container-text">
          <p>${dev.description}</p>
          <div class="about__container-contact">
            <a href="mailto:${dev.email}"
              ><i class="fa-solid fa-envelope"></i
            ></a>
            <a href="${dev.gitHub}" target="_blank"
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

    // Agregamos al contenedor todas las categorias:
    aboutMe.append(aboutContainer);
  });
};

const projects = [
  {
    id: 1,
    title: 'Batatabit',
    subTitle: 'Cryptocurrency landing page project.',
    tag: ['#HTML', '#CCS3', '#Responsive'],
    urlImage: '../../public/assets/img/batata-bit.jpg',
    urlWeb: 'https://alfred3ks.github.io/batatabit/',
    urlGitHub: 'https://github.com/alfred3ks/batatabit',
  },
  {
    id: 2,
    title: 'Lista de tareas',
    subTitle: 'Aplicación para la creación de tareas.',
    tag: ['#HTML', '#CCS3', '#Responsive'],
    urlImage: '../../public/assets/img/lista-de-tareas.png',
    urlWeb: 'https://alfred3ks.github.io/lista_de_tareas/',
    urlGitHub: 'https://github.com/alfred3ks/lista_de_tareas',
  },
  {
    id: 3,
    title: 'Hola Junior',
    subTitle: 'Plantilla de HTML y CSS.',
    tag: ['#HTML', '#CCS3', '#Responsive'],
    urlImage: '../../public/assets/img/holajunior.jpg',
    urlWeb: 'https://alfred3ks.github.io/junior/',
    urlGitHub: 'https://github.com/alfred3ks/junior',
  },
  {
    id: 4,
    title: 'Jhon Doe',
    subTitle: 'Portfolio web de Jhon Doe.',
    tag: ['#HTML', '#CCS3', '#Responsive'],
    urlImage: '../../public/assets/img/jonh-doe-screenshot.jpg',
    urlWeb: 'https://alfred3ks.github.io/ejer-html-css-kc/',
    urlGitHub: 'https://github.com/alfred3ks/ejer-html-css-kc',
  },
  {
    id: 5,
    title: 'Contador',
    subTitle: 'Contador de clics.',
    tag: ['#React', '#CCS3', '#Responsive'],
    urlImage: '../../public/assets/img/contador.png',
    urlWeb: 'https://alfred3ks.github.io/contador/',
    urlGitHub: 'https://github.com/alfred3ks/contador/',
  },
  {
    id: 6,
    title: 'Blog',
    subTitle: 'Blog usando React Router.',
    tag: ['#React', '#CCS3', '#Responsive'],
    urlImage: '../../public/assets/img/blog.png',
    urlWeb: 'https://alfred3ks.github.io/app_react_route_blog/',
    urlGitHub: 'https://github.com/alfred3ks/app_react_route_blog/',
  },
];

const projectsContainer = document.getElementById('projects__container');

const changeProjects = () => {
  projects.forEach((project) => {
    const cardContainer = document.createElement('div');
    const plantilla = `
            <h2 class="card__container-title">${project.title}</h2>
            <div class="card__container-img">
              <a href="${project.urlWeb}" target="_blank"
                ><img
                  src="${project.urlImage}"
                  alt="${project.title}"
              />
              </a>
            </div>
            <div class="card__container-description">
              <p>${project.tag[0]}</p>
              <p>${project.tag[1]}</p>
              <p>${project.tag[2]}</p>
            </div>
            <p class="card__container-text">
              ${project.subTitle}
            </p>
            <div class="card__container-button">
              <a href="${project.urlWeb}" target="_blank"
                ><i class="fa-solid fa-arrow-up-from-bracket"></i>
              </a>
              <a href="${project.urlGitHub}" target="_blank"
                ><i class="fab fa-github"></i>
              </a>
            </div>
`;

    cardContainer.innerHTML = plantilla;
    cardContainer.classList.add('card__container');

    projectsContainer.append(cardContainer);
  });
};

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
