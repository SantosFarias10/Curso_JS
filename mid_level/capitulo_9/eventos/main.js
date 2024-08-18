const button = document.querySelector(".button");

button.addEventListener("click", saludar);              //  existe removeEventListener para eliminar un eventos
//  existen: 
//          dblclick (cuando se hace doble click xd)
//          mouseover (cuando entra en un elemento)  
//          mouseout (cuando se sale de un elemento)
//          contextmenu (cuando se da click derecho)
//          mousemove (cuando se mueve en un elemento)
//          mousedown (cuando solamente se aprieta click)

function saludar(){
    alert("Saludar");
}
button.textContent = "Forma JS";


button.addEventListener("click", (e)=>{                 //  nos muestra en consola que button se apreto xd
    console.log(e.target)
})

const buttonCss = document.querySelector(".buttonCss");
const contenedor = document.querySelector(".contenedor");

buttonCss.addEventListener("click", (e)=>{
    alert("decir click en un boton");
})

contenedor.addEventListener("click", (e)=>{
    alert("decir click en el contenedor");
})