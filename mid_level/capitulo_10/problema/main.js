const sendButton = document.getElementById("snd_nota");

const verificarAprobacion = (prevRes, nota1, nota2)=>{
    promedio = (nota1 + nota2 + prevRes)/3;
    if (promedio >= 7) {
        let resultado = `<span class="green">Aprobado</span>`;
        return resultado;
    } else {
        return `<span class="red">Desaprobado</span>`
    }
}

const abrirModal = (r,m)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;
    let modal = document.querySelector("modal_background");
    modal.style.animation = "aparecer 1s forwards"
    modal.style.display = "flex"
}

const definirMensaje = (pr)=>{
    let resultado
    switch(pr){
        case 1: resultado = "desaprobado con 1"
        break; 
        case 2: resultado = "desaprobado con 2"
        break;
        case 3: resultado = "desaprobado con 3"
        break;
        case 4: resultado = "desaprobado con 4"
        break;
        case 5: resultado = "desaprobado con 5"
        break;
        case 6: resultado = "aprobado con 6"
        break;
        case 7: resultado = "aprobado con 7"
        break;
        case 8: resultado = "aprobado con 8"
        break;
        case 9: resultado = "aprobado con 9"
        break;
        case 10: resultado = "aprobado con 10"
        break;
        default: resultado = null;
    }
    return resultado;
}

sendButton.addEventListener("click", ()=>{
    let resultado, mensaje;
    try {
        prevRes = parseInt(document.getElementById("nota").value);
        if (isNaN(prevRes)) {
            throw "error";
        }
        mensaje = definirMensaje(prevRes);
        resultado = verificarAprobacion(prevRes, 8, 5);
    } catch(e){
        resultado = "algo";
        mensaje = "Introdujiste una string en vez de un numero";
    }
    abrirModal(resultado, mensaje);
})