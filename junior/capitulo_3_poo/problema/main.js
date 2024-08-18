class celulares {
    constructor(color, peso, rdp, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDepantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false) {
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("celular apagado");
            this.encendido = false;        
        }
    }
    reiniciar(){
        if (this.encendido == true) {
            alert("Reiniciado");
        } else {
            alert("El celular esta apagado");
        }
    }
    tomarFoto(){
        alert(`Foto tomada en una resolucion de: ${this.resolucionDeCamara} <br>`)
    }
    grabarVideo(){
        alert(`Video grabado en una resolcion de: ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
        return `
        Color: ${this.color}<br>
        Peso: ${this.peso}<br>
        Resolucion de pantalla: ${this.resolucionDepantalla}<br>
        Resolucion de camara: ${this.resolucionDeCamara}<br>
        Memeria RAM: ${this.memoriaRam}<br>
        `
    }
}

class celularesAltaGama extends celulares {
    constructor(color, peso, rdp, rdc, ram, rdce){
        super(color, peso, rdp, rdc, ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert(`Video grabado en camara lenta`);
    }
    reconocimientoFacial(){
        alert(`Iniciando reconocimiento facial`);
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de camara Extra: ${this.resolucionDeCamaraExtra}`
    }
}

// celular1 = new celulares("Rojo", "150g", "5'", "Full HD", "1GB");
// celular2 = new celulares("Negro", "155", "5.4", "HD", "2GB");
// celular3 = new celulares("Azul", "146", "5.9", "1080", "4GB");

// document.write(`${celular1.mobileInfo()} <br>
//                 ${celular1.mobileInfo()} <br>
//                 ${celular1.mobileInfo()} <br>
// `)

celular1 = new celularesAltaGama("Rojo", "150g", "5'", "Full HD", "1GB", "Full HD");
celular2 = new celularesAltaGama("Negro", "155", "5.4", "HD", "2GB", "Full HD");

document.write(`${celular1.infoAltaGama()} <br>
                ${celular2.infoAltaGama()} <br>
`)

