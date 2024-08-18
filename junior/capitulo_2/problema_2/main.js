let cantidad = prompt("¿Cuantos Alumnos hay?");
let alumnosTotales = [];

for (let i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno: " + (i+1)), 0];
    // [[Santos,0],[Facundo, 0],[Adrian, 0]]
}

const tomarAsisencia = (nombre, p)=> {
    let asistencia = prompt(nombre);
    if (asistencia == "p" || asistencia == "P") {
        alumnosTotales[p][1]++;
    }
}

for (let i = 0; i < 30; i++){
    for (alumno in alumnosTotales){
        tomarAsisencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    * presentes: ${alumnosTotales[alumno][1]} <br>
    * ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}
    `;

    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado += `<b> Reprobado por inasistencias </b>`
    } else {
        resultado += `<br></br>`
    }

    document.write(resultado);
}

