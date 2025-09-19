const get = (el) => document.querySelector(el)
const getAll = (el) => document.querySelectorAll(el)

pizzaJson.map((item, index) => {
    let pizzaItem = get('.models .pizza-item').cloneNode(true)

    pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault()  

        let key = e.target.closest('.pizza-item').getAttribute('data-key')

        get('.pizzaInfo img').src = pizzaJson[key].img
        get('.pizzaInfo h1').innerHTML = pizzaJson[key].name
        get('.pizzaInfo--desc').innerHTML = pizzaJson[key].description

        get('.pizzaWindowArea').style.opacity = 0
        get('.pizzaWindowArea').style.display = 'flex'
        setTimeout(() => {
            get('.pizzaWindowArea').style.opacity = 1
        }, 200);
    })   
    get('.pizza-area').append(pizzaItem)
    
})

get('.pizzaInfo--cancelButton').addEventListener('click', () => {
    get('.pizzaWindowArea').style.display = 'none'
})
