// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo() {
    // Resuperar nombre del amigo
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();

    // Validar que usuario ingrese no ingreso un dato en blanco
    if (nombreAmigo !== '') {
        const listaAmigos = document.getElementById('listaAmigos');
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = nombreAmigo;
        listaAmigos.appendChild(nuevoElemento);
    // Limpiar la variable de ingreso
        input.value = '';
    } else {
        alert('Debes escribir un nombre al menos un nombre');
    }
    // posicionar cursor en campo de entrada
    input.focus();
}

function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const amigos = listaAmigos.getElementsByTagName('li');

    if (amigos.length === 0) {
        alert('Debes ingresar amigos para realizar el sorteo.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio].textContent;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}









