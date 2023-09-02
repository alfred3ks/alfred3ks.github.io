import developer from './data/developer.js';

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

    aboutMe.append(aboutContainer);
  });
};

export default changeDeveloper;
