const contenedor = document.querySelector(".flex-container");

function crearLlaves(nombre, modelo, presio){
    img = `<img class="llave-img" src="llave.png">`;
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    presio = `<p>Presio: <b>$${presio}</b></p>`;    
    return [img,nombre, modelo, presio];
}

const changeHidden = (number)=>{
    document.querySelector(".key-data").value = number;
}


let documentFragment = document.createDocumentFragment();

for (let i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random()*10000);
    let presioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlaves(`Llave ${i}`, `Modelo ${modeloRandom}`, presioRandom);    
    let div = document.createElement("DIV");
    div.addEventListener("click", ()=>{changeHidden(modeloRandom)})
    div.tabIndex = i
    div.classList.add(`item-${i}`, `flex-item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];  
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);