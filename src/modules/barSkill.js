// Función para animar la barra de skill
const barSkill = (percentage, number, progressing, circle) => {
  let counter = 0;

  const interval = setInterval(() => {
    if (counter >= percentage) {
      clearInterval(interval);
    } else {
      counter += 1;
      number.innerText = counter + '%';
      progressing.style.width = counter + '%';
      circle.style.left = counter + '%';
    }
  }, 50);
};

export default barSkill;
