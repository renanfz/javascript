class Aluno {
    constructor(name, age, course) {
        this.name = name
        this.age = age
        this.course = course
    }
}

function novoAluno() {
    let listaAlunos = document.getElementById('listaAlunos')
    let nome = document.getElementById('nomeAluno').value
    let idade = document.getElementById('idadeAluno').value
    let curso = document.getElementById('cursoAluno').value
    let inputs = document.querySelectorAll('input')
    let aluno = new Aluno(nome, idade, curso)
    let item = document.createElement('li')

    item.innerHTML = `Nome: ${aluno.name}, Idade: ${aluno.age}, Curso: ${aluno.course}`
    listaAlunos.appendChild(item)
    for(let inp of inputs) {
        inp.value = ''
    }

}

