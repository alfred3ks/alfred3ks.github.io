// Traemos desde el HTMl es selector
const date = document.querySelector("#year");

let dateNow = new Date();
let now = dateNow.getFullYear();

let changeYear = () => {
  date.textContent = now;
};

export default changeYear;
