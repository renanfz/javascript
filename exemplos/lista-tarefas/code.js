// Elementos
let bntOpenModal = document.getElementById('openModal')
let btnCloseModal = document.getElementById('closeModal')
let modal = document.querySelector('dialog')
let msg = document.querySelector('.message')
let listBox = document.getElementById('listBox')
let btnAddTask = document.getElementById('saveTask')
let dataTasks = []

// Campos
let titulo = document.getElementById('txtTitle').value
let categoria = document.getElementById('txtCategoria').value
let checkTask = document.querySelector('.checkTask')

// Eventos
bntOpenModal.addEventListener('click', () => {
    modal.showModal();
})
btnCloseModal.addEventListener('click', () => {
    modal.close();
})
btnAddTask.addEventListener('click', () => {
    addTask()
})

checkTask.addEventListener('')

// Functions
function calcDate() {
    const dt = new Date();
    const dia = String(dt.getDate()).padStart(2, '0');
    const mes = String(dt.getMonth() + 1).padStart(2, '0');
    const data = `${dia}/${mes}`;
    return data
}

function createCard(titulo, categoria, data) {
    let card = document.createElement('div')
    card.className = 'cardTask'

    card.innerHTML = `
    <div class="taskTitle">
    <h4>${titulo}</h4>
    <input type="checkbox" class="checkTask">
    </div>
    <div class="task-info">
    <p><span class="legend">Categoria: </span><span class="categoria">${categoria}</span></p>
    <p><span class="legend">Criada em:</span><span class="date">${data}</span></p>
    </div>
    `;
    return card
}

function gerarCard() {
    let i = dataTasks.length - 1
    let task = dataTasks[i]
    listBox.appendChild(createCard(task.titulo, task.categoria, task.data))
}

function addTask() {
    let titulo = document.getElementById('txtTitle').value;
    let categoria = document.getElementById('txtCategoria').value;

    if (titulo === '' || categoria === '') {
        alert('Preencha todos os campos!');
        return;
    }

    let task = {
        titulo: titulo,
        categoria: categoria,
        data: calcDate()
    };

    dataTasks.push(task);
    gerarCard();

    // Limpar campos e fechar modal
    titulo.value = ''
    categoria = ''
    msg.innerHTML = ''
    
    modal.close();
}

lucide.createIcons()

