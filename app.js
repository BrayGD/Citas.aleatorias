const botonElem = document.getElementById("boton-cambiar-cita");
const citaElem = document.getElementById("citas")
const autorElem = document.getElementById("autor")


function generarEnteroAleatorio(max, min){
    return Math.floor(Math.random() * (max-min) + min);
}

function cambiarCita(){
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
    autorElem.innerText = citas[indiceAleatorio].autor;
}


let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
cambiarCita();
    
botonElem.addEventListener("click", cambiarCita);