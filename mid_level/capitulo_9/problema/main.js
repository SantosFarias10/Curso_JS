const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

const validarCampos = () => {
    let error = [];
    if (nombre.value.length < 5 || nombre.value.length > 40) {
        error[0] = true;
        error[1] = "El nombre es invalido";
        return error;
    } else if (email.value.length < 5 || 
               email.value.length > 40 || 
               email.value.indexOf("@") === -1 || 
               email.value.indexOf(".") === -1) {
        error[0] = true;
        error[1] = "El formato email no es correcto";
        return error;
    } else if (materia.value.length < 5 || materia.value.length > 40) {
        error[0] = true;
        error[1] = "La materia no existe";
        return error;
    }
    error[0] = false;
    return error;
}

boton.addEventListener("click", (e) => {
    e.preventDefault(); // previene el comportamiento por defecto (actualizar la pag)
    let error = validarCampos();
    if (error[0]) {
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
        resultado.classList.remove("green");
    } else {
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
});
