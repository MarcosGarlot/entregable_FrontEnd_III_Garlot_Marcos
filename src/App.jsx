import './App.css'
import { useState } from 'react'

import Card from './components/Card'

function App() {

  const [counter, setCounter] = useState(0)
  const [error, setError] = useState(false)

  const [cliente, setCliente] = useState({
    nombre: '',
    artista: ''
  })
  const [clientes, setClientes] = useState([])

  const handleSubmit = (event) => {
      event.preventDefault()
      let trimedString = cliente.nombre.trimStart()
      if(trimedString.length > 3 && cliente.artista.length > 6) {
        const clienteAgregado = {...cliente, id: counter}
        setCounter((prevCounter) => prevCounter + 1)
        setClientes((prevClientes) => [...prevClientes, clienteAgregado])
        setError(false)
      } else {
        setError(true)
      }
  }

  return (
    <>
    <div>
      <h1>Carga de estudiantes</h1>
      <form onSubmit={handleSubmit} className='form'>
        <label >Nombre: </label>
        <input type="text" onChange={(event) => setCliente({...cliente, nombre: event.target.value })} placeholder='Longitud minima de 3 caract.'/>
        <label >Artista favorito: </label>
        <input type="text" onChange={(event) => setCliente({...cliente, artista: event.target.value })} placeholder='Longitud minima de 6 caract.'/>
        <button>Enviar</button>
        {error && 'Por favor chequea que la información sea correcta'}
      </form>
      {clientes.map(cliente => <Card key={cliente.id} datos={cliente}/>)}
    </div>
    </>
  )
}

export default App
