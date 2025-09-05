class Funcionario {
    constructor(nome, salario) {
        this.nome = nome
        this.salario = salario
    }

    exibirDados() {
        console.log(`Nome: ${this.nome}, Salário: ${this.salario}`)
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, dep) {
        super(nome, salario)
        this.dep = dep
    }

    exibirDados() {
        super.exibirDados()
        console.log(`Departamento: ${this.dep}`)
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, salario, linguagemFavorita) {
        super(nome, salario)
        this.linguagemFavorita = linguagemFavorita
    }

    exibirDados() {
        super.exibirDados()
        console.log(`Linguagem Favorita: ${this.linguagemFavorita}`)

    }
}
 
let ger1 = new Gerente('Amanda', 2500, 'subsolo')
ger1.exibirDados()
