
class animal {
    constructor(especie, edad, color){
        this.esp = especie; //atributo esp = especie
        this.age = edad;    //atributo age = edad
        this.color = color; //atributo color = color
    }
}

let perro = new animal("Perro", 5, "Marron");

document.write(perro.color);