function clique() {
    let lista = document.getElementById('lista')
    let newIten = document.createElement('li')

    newIten.innerText = 'Taos'
    lista.appendChild(newIten)

}
let botao = document.querySelector('button')
botao.addEventListener("click", ()=> clique())


function senha() {
    const input = document.querySelector('input')
    const btn = document.getElementById('btn')

    if(input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text') 
        btn.innerHTML = 'Ocultar senha'
    } else {
        input.setAttribute('type', 'password')
        btn.innerHTML = 'Exibir senha'
    }
}

let inp = document.querySelector('input')
inp.addEventListener('keypress', (e) => console.log(e.code))