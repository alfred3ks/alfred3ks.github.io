// Traemos desde el HTMl es selector
const date = document.querySelector("#year");

const dateNow = new Date();
const now = dateNow.getFullYear();

const changeYear = () => {
  date.textContent = now;
};

export default changeYear;
