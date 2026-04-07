import skills from '../data/skills.json';
import barSkill from './barSkill.js';

const skillsContainer = document.getElementById('skills__container');

const renderSkills = () => {
  skills.forEach((skill) => {
    // Creamos directamente el div con clase correcta
    const skillElement = document.createElement('div');
    skillElement.classList.add('skill__progress');

    // Template HTML de la skill
    skillElement.innerHTML = `
      <h6 class="skill__title">${skill.title}</h6>
      <div class="skill__container">
        <div class="skill__bar">
          <div class="progressing__bar progressing__bar--${skill.class}">
            <span class="progressing__circle progressing__circle--${skill.class}"></span>
          </div>
        </div>
        <p class="skill__percent">0%</p>
      </div>
    `;

    // Agregamos el elemento al DOM antes de hacer querySelector
    skillsContainer.append(skillElement);

    // Seleccionamos los elementos internos ya existentes en el DOM
    const progressing = skillElement.querySelector('.progressing__bar');
    const circle = skillElement.querySelector('.progressing__circle');
    const percent = skillElement.querySelector('.skill__percent');

    // Animación
    barSkill(skill.percentage, percent, progressing, circle);
  });
};

export default renderSkills;
