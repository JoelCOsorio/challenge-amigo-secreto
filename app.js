// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; //Array que almacenara los nombre de amigos ingresados

function agregarAmigo() {
    //Capturar el valor del campo de entrada
    let input = document.getElementById("amigo");
    let nombreAmigo = input.value;
    //Se valida que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre");
    } else {
        //Si el valor es válido, se añade al arreglo que almacena los nombre de amigos
        amigos.push(nombreAmigo);
    }
    //Se reestablece el campo de texto a una cadena vacía.
    input.value = "";
    actualizarListaAmigos()
    return;
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
    return;
}


