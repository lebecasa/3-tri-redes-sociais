async function quantidadeUsuariosPorRedes() {
  const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
  const res = await fetch(url)
  const dados = await res.json()
  const nomeDasRedes = Object.keys()
  const quantidadeDeUsuarios = Object.values(dados)
 
  const data = [
  {
    x: nomeDasRedes,
    y: quantidadeDeUsuarios,
    type: 'bar'
  }
]

  const grafico = document.createElement('div')
  grafico.className = 'grafico'
  document.getElementBlyld('graficos-container').appendChild(grafico)
  Ploty.newPlot(grafico, data)
}

  quantidadeUsuariosPorRedes()
