// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo === "") {
        alert("Por favor, ingresa un nombre de amigo.");
        return;
    }
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").textContent = "El amigo sorteado es: " + amigoSorteado;
}