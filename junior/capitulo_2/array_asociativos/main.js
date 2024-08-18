let pc = {
    nombre: "SantosPC",
    procesador: "Ryzen 5 5600G",
    RAM: "16Gb",
    Almacenamiento: "500Gb",
    Fuente: "600w"
};

let frase = `El nombre de la pc es: <b>${pc.nombre}</b><br>
             El procesador de la pc es: <b>${pc.procesador}</b><br>
             La cantidad de memoria RAM de la pc es de: <b>${pc.RAM}</b><br>
             El almacenamiento de la pc es de: <b>${pc.Almacenamiento}</b><br>
             La fuente de energia de la pc es de:  <b>${pc.Fuente}</b><br>`

document.write(frase);