// Obtenemos boton y lista
const button = document.getElementById('button');
console.log(button);
const list= document.getElementById('list');
const ul = document.getElementById('list__hide');

const about = document.getElementById('about');

// Creamos la funcion para el menu hamburguesa
const change = ()=>{
    button.classList.toggle('change')
    list.classList.toggle('change__menu')
}

button.addEventListener('click', change);
ul.addEventListener('click', change);

// Ir a sobre mi
const sobreMi = ()=>{
        window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}
about.addEventListener('click', sobreMi);

