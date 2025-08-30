let listaTarefas = document.getElementById('listaTarefas')
let input = document.querySelector('input')
input.addEventListener('keyup', addTarefa)

function addTarefa(e) {
    let campoPreenchido = input.value.trim().length != 0
    let teclaEnter = e.key === 'Enter'

    if (campoPreenchido && teclaEnter) {
        let newElement = document.createElement('li')
        newElement.textContent = input.value
        listaTarefas.appendChild(newElement)
        input.value = ''
    } else if (!campoPreenchido && teclaEnter) {
        alert('Ops, o campo esta vazio! Preencha com uma tarefa.')
    }
}
