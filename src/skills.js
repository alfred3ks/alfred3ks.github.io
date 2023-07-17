// Funcion para mostrar barrar de skill:
const bars = (percentage, number, progressing, circle) => {
  let counter = 0;
  setInterval(() => {
    if (counter === percentage) {
      clearInterval();
    } else {
      counter += 1;
      number.innerHTML = counter + "%";
      progressing.style.width = counter + "%";
      circle.style.left = counter + "%";
    }
  }, 30);
};

export default bars;
