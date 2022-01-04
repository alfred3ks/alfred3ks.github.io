const dato= document.getElementById('fecha');

let fecha = new Date();
let actual = fecha.getFullYear();

let cambiarAnnio = ()=>{
    dato.innerHTML = actual;
}

// cambiarAnnio();

export default cambiarAnnio;