// Obtenemos boton y lista
const menuButton = document.querySelector('#toggle');
const menuList = document.querySelector('#list');
const navLinks = document.querySelector('#list__hide');

// Creamos la funcion para el menu hamburguesa
const toggleMenu = () => {
  menuButton.classList.toggle('change');
  menuList.classList.toggle('change__menu');
};

const initMenu = () => {
  menuButton.addEventListener('click', toggleMenu);
  navLinks.addEventListener('click', toggleMenu);
};

export default initMenu;
