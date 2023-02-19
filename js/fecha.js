const dato = document.querySelector('#fecha');

let fecha = new Date();
let actual = fecha.getFullYear();

let cambiarAnnio = () => {
    dato.textContent = actual;
}

export default cambiarAnnio;