import React from 'react'

function Dado() {
  const [dado, setDado] = React.useState(1)

  const rolarDado = () => {
    setDado(Math.floor(Math.random() * 6) + 1)
  }

  return (
    <div>
      <p>Rolagem do dado: {dado}</p>
      <button onClick={rolarDado}>Rolar Dado</button>
    </div>
  )
}

export default Dado