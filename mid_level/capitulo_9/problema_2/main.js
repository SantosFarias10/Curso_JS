let alumnos = [{
    nombre: "Santos Farias",
    email: "santos@Gmail.com",
    materia: "Curso de Nivelacion"
},{
    nombre: "Facundo Farias",
    email: "facundo@Gmail.com",
    materia: "Discreta"
},{
    nombre: "Adrian Farias",
    email: "Adrian@Gmail.com",
    materia: "Analisis"
},{
    nombre: "Santos 2 Farias",
    email: "Santos2@Gmail.com",
    materia: "Intro"
},{
    nombre: "Facundo 2 Farias",
    email: "facundo2@Gmail.com",
    materia: "Algo"
}];

const boton = document.querySelector(".boton_confirmar");
const contenedor = document.querySelector(".grid_container");

let htmlCode = "";

for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    htmlCode += `
        <div class="grid_item nombre">${nombre}</div>
        <div class="grid_item email">${email}</div>
        <div class="grid_item materia">${materia}</div>
        <div class="grid_item semana">
            <select class="semana_elegida">
                <option value="semana 1">Semana 1</option>
                <option value="semana 2">Semana 2</option>
            </select>
        </div>`
}

contenedor.innerHTML = htmlCode

boton.addEventListener("click", ()=>{
    let confirmar = confirm("¿Realmente quieres confirmar?");
    if (confirmar) {
        document.body.removeChild(boton);      
        let elementos = document.querySelectorAll(".semana");
        let semanaElegidas = document.querySelectorAll(".semana_elegida");    //¿?
        for (elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanaElegidas[elemento].value;
        }
    }
})