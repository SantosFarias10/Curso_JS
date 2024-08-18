
class Animal {
    constructor(especie, edad, color){
        this.esp = especie; //atributo esp = especie
        this.age = edad;    //atributo age = edad
        this.color = color; //atributo color = color
        
    }
}

class Perro extends Animal{                     //Herencia
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = null;
    }
    set setRaza(newName){                 //metodo para modificar
        this.raza = newName;
    }
    get getRaza(){                        //metodo para obtener un valor
        return this.raza;
    }
}

const perro = new Perro("Perro", 5, "Marro", "Doberman");

perro.setRaza = "aleman";
document.write(perro.getRaza);