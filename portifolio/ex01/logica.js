let nome = 'renan'
let senha = '123'


function isVazio(nome, senha) {
    if (nome === '' || senha === '') {
        window.alert('Preencha todos os campos!')
        return true
    }
    return false
}

function isNumber(nome) {
    if (!isNaN(nome)) {
        window.alert('Campo Nome inválido!')
        return true
    }
    return false
}

function validar(txtnome, txtsenha) {
    txtnome = String(txtnome)
    msg =document.querySelector('msg')
    if (txtnome === nome && txtsenha === senha){
        window.alert('Acesso liberado!')
        window.open('page2.html', '_blank')
        window.location.href = `page2.html?texto=${encodeURIComponent(`Olá ${txt}`)}`;
        return true
    } else {
        window.alert('Nome ou senha inválidos')
        return false
    }
}

function entrar() {
    let txtnome = document.querySelector('#nome').value;
    let txtsenha = document.querySelector('#senha').value;

    if (isVazio(txtnome, txtsenha)) return;
    if (isNumber(txtnome)) return;
    validar(txtnome, txtsenha)
}