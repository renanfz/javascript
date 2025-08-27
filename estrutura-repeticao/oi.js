const motos = [
    {nome: 'Fazer 250', ano: 2021},
    {nome: 'CB500F', ano: 2018},
    {nome: 'Dominar 400', ano: 2025}
]
 motos.sort((p, s) => p.ano - s.ano)
 console.log(motos)