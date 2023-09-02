import proj from './data/projects.js';

const projectsContainer = document.getElementById('projects__container');

const changeProjects = () => {
  proj.forEach((project) => {
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

export default changeProjects;
