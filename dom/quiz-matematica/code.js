// Elements
let elementos = document.querySelectorAll('.pergunta')
let campos = document.querySelectorAll('input')
let resultados = document.querySelectorAll('.resultado')
let pontuacao = document.querySelector('.pontuacao')

// Arrays
const respostas = []
const perguntas = [
  { pergunta: "3 x 4", resposta: 12 },
  { pergunta: "7 x 2", resposta: 14 },
  { pergunta: "5 x 5", resposta: 25 },
  { pergunta: "6 x 3", resposta: 18 },
  { pergunta: "9 x 1", resposta: 9 }
];

// Loops
for (let c = 0; c < perguntas.length; c++) {
    elementos[c].innerHTML = perguntas[c].pergunta
}

campos.forEach(element => {
    element.addEventListener('blur', () => respostas.push(element.valueAsNumber))
});

// Functions
function verificarRespostas() {
    respostas.forEach((resp, i) => {
        if (resp == perguntas[i].resposta) {
            resultados[i].innerHTML = '<i data-lucide="square-check"></i>'
        } else {
            resultados[i].innerHTML = '<i data-lucide="square-x" style="color: red;"></i>'
        }
    })
    pontuacao.innerHTML = respostas.forEach(() => )
    lucide.createIcons()
}


console.log(respostas)

