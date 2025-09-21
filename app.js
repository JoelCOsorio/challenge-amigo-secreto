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
    let lista = document.getElementById("listaAmigos");  //Obtener el elemento lista
    lista.innerHTML = "";     //Limpiar la lista existente
    //Crear elementos de lista (<li>) para cada nombre de amigo
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");  //Crear elemento de lista
        item.textContent = amigos[i];  //Asignar el nombre al elemento (<li>)
        lista.appendChild(item);    //Agregar el elemento (<li>) a la lista
    }
    return;
}

function sortearAmigo() {
    if (amigos.length > 0) {  //Verificar que el array amigos no este vacio
        let indiceAlea = Math.floor(Math.random() * amigos.length); //Generar un indice aleatorio
        let amigoEscogido = amigos[indiceAlea];  //Obtener el nombre sorteado
        let lista = document.getElementById("resultado");
        lista.innerHTML = `El amigo secreto sorteado es: ${amigoEscogido}`; //Mostrar el nombre sorteado
    }
    return;
}


