// Obtenemos del HTML la fecha
const dato= document.getElementById('fecha');

// Creamos un objeto de la fecha actual
let fecha = new Date();
let actual = fecha.getFullYear();

dato.innerHTML = actual;