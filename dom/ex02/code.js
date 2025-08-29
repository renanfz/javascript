let listaTarefas = document.getElementById('listaTarefas')
let input = document.querySelector('input')
input.addEventListener('keyup', addTarefa)

function addTarefa(e) {
    let newElement = document.createElement('li')
    newElement.textContent = input.value

    if(input.value.trim().length != 0 || e.code === 'Enter') {
        listaTarefas.appendChild(newElement)
    } else {
        alert('Ops, o campo esta vazio! Preencha com uma tarefa.')
    }
}







// 1passo identificar o evento para enter
