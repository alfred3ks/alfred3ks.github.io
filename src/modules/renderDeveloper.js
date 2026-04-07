import developer from '../data/developer.json';

const aboutMe = document.getElementById('about__me');

const renderDeveloper = () => {
  developer.forEach((dev) => {
    const aboutContainer = document.createElement('div');

    const template = `
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

    aboutContainer.innerHTML = template;
    aboutContainer.classList.add('about__container');

    aboutMe.append(aboutContainer);
  });
};

export default renderDeveloper;
