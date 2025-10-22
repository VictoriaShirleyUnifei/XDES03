import React from 'react'

function Contador() {
  const [count, setCount] = React.useState(0)

  const incrementar = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  )
}

export default Contador