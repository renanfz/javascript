let tempo = document.getElementById('tempo')
let miliseg = 0
let seg = 0
tempo.innerText = `${seg}:${miliseg}`
let id = null;

function iniciar() {
    miliseg++
    tempo.innerText = `${seg}:${miliseg}`
    if (miliseg == 100) {
        seg += 1
        miliseg = 0
    }
}

function iniciarcontagem() {
    if (id === null) {
        id = setInterval(iniciar, 13);
    }
}

function pausar() {
    clearInterval(id)
    id = null;
}

function reiniciar() {
    miliseg = 0
    seg = 0
    iniciarcontagem()
}

function ciclos() {
}