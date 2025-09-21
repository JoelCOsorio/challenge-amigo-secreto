// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

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
    return;
}





