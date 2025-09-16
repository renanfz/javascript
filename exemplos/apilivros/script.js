let form = document.querySelector('.areaSearch')
let inputSearch = document.querySelector('#input-search')
let btnSearch = document.getElementById('btn-search')

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    let value = inputSearch.value.trim()
    let api = 'AIzaSyDlOQyZ1Q4Q1QbKEeccx85NQekPhBcO_qU'

    // Verificacao
    if (!value) {
        alert('Vazio')
        inputSearch.focus()
        return
    }

    // Carregando
    let url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURI(value)}&printType=books&key=${api}`
    let response = await fetch(url)
    let respJson = await response.json()

    if (response.ok) {
        loadBooks(respJson)
    }
    else {
        alert('Erro na requisição: ' + response.status)
    }
})

function loadBooks(json) {
    let resultsDiv = document.querySelector('.results')
    resultsDiv.innerHTML = ''
    progress()

    setTimeout(() => {
        if (!json.items || json.items.length === 0) {
            resultsDiv.innerHTML = "<p>Nenhum livro encontrado.</p>";
            return;
        }
        json.items.forEach(item => {
            const volume = item.volumeInfo;
            const thumbnail = volume.imageLinks?.thumbnail
            if (!thumbnail) return
            const title = volume.title || "Sem título";
            const authors = volume.authors ? volume.authors.join(", ") : "Autor desconhecido";
            const previewLink = volume.previewLink || "#";
            let card = document.createElement("div");
            card.classList.add('book')
            card.innerHTML = `
                ${thumbnail ? `<img src="${thumbnail}" alt="Capa do livro">` : ""}
                <div class="info">
                    <h2>${title}</h2>
                    <p><strong>Autor:</strong> ${authors}</p>
                    <p><a href="${previewLink}" target="_blank">Ver mais</a></p>
                </div>
                <hr>
                `;
            resultsDiv.appendChild(card);
        })
        resultsDiv.style.display = 'block'
    }, 5 * 150)
}

function progress() {
    const bar = document.querySelector('progress');
    const intervalTime = 150;
    bar.style.display = 'block'
    bar.value = 0;

    const progressInterval = setInterval(() => {
        if (bar.value < 5) {
            bar.value += 1; // incrementa o valor da barra
        } else {
            clearInterval(progressInterval); // para o intervalo quando atingir o máximo
        }
    }, intervalTime);
}

