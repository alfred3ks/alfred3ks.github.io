// Obtenemos boton y lista
const button = document.querySelector('#button');
const list = document.querySelector('#list');
const ul = document.querySelector('#list__hide');

// Creamos la funcion para el menu hamburguesa
const change = () => {
  button.classList.toggle('change');
  list.classList.toggle('change__menu');
  document.body.classList.toggle('remove__scroll');
};

const executeChange = () => {
  button.addEventListener('click', change);
  ul.addEventListener('click', change);
};

export default executeChange;
