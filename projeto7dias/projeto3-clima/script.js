document.querySelector('.busca').addEventListener('submit', async(event)=>{
    event.preventDefault()

    let input = document.querySelector('#searchInput').value

    if (input.trim() !== '') {
        showWarning('Carregando...')
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=5bdf1bb4dfd962ec9a3bc29c4bdf6bb6&units=metric&lang=pt_br`

        let results = await fetch(url)
        let json = await results.json()

        if(json.code === 200) {
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.spreed,
                windAngle: json.wind.deg
            })
        } else {
            showWarning('Não encontramos essa cidade :/')
        }
    }
})

function showInfo(json) {
    showWarning('')
    document.querySelector('.resultado').computedStyleMap.windSpeed
}
 
function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg
}