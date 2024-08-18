
class animal {
    constructor(especie, edad, color){
        this.esp = especie; //atributo esp = especie
        this.age = edad;    //atributo age = edad
        this.color = color; //atributo color = color
    }
}

class perro extends animal{                     //Herencia
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    }
}

let Perro = new perro("Perro", 5, "Marron", "Aleman"); 

document.write(Perro);