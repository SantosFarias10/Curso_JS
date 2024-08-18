// const button = document.querySelector(".button");
const contenedor = document.querySelector(".contenedor");
const input = document.querySelector(".input-prueba");

input.addEventListener("keydown",(e)=>{
    console.log("una tecla fue presionada");
});

input.addEventListener("keypress",(e)=>{
    console.log("una tecla fue presionada y soltada en el mismo elemento");
});

input.addEventListener("keyup",(e)=>{
    console.log("una tecla fue soltada en el elemento");
});