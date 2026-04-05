import projects from '../data/projects.json';

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

export default renderProjects;
