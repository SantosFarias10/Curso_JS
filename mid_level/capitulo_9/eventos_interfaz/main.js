addEventListener("load", ()=>{
    console.log("ha cargado el sitio")
})

//
/*
    "beforeunload"  te avisa si te vas del sitio
    "resize"        cuando se actualiza la resolucion
    "scroll"        cuando se scrolea
    "select"        cuando se selecciona en un input
  */ 

const input = document.querySelector(".input-prueba");
const contenedor = document.querySelector(".seleccionado");

input.addEventListener("select", (e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = input.value;
    contenedor.innerHTML= textoCompleto.substring(start, end);
});

