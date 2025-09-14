let form = document.querySelector('.areaSearch')
let inputSearch = document.querySelector('#input-search').value
let btnSearch = document.querySelector('#btn-input')

form.addEventListener('submit', async (event)=>{
    event.preventDefault()
})

btnSearch.addEventListener('click', ()=>{
    alert(inputSearch)
})