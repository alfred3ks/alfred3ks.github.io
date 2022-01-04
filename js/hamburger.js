// Obtenemos boton y lista
const button = document.getElementById('button');
const list= document.getElementById('list');
const ul = document.getElementById('list__hide');


// Creamos la funcion para el menu hamburguesa
const change = ()=>{
    button.classList.toggle('change')
    list.classList.toggle('change__menu')
}

// button.addEventListener('click', change);
// ul.addEventListener('click', change);

let ejecutarCambio = ()=>{
    button.addEventListener('click', change);
    ul.addEventListener('click', change);
}

// ejecutarCambio();
export default ejecutarCambio;

