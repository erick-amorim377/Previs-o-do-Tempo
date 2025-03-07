import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'


function App() {
  const [weather, setWeather] = useState(0)
  

  const inputRef = useRef()

  async function searcCity() {
    const city = inputRef.current.value
    const key = '7e46c6ef4f89e59dad6be9bb48be367a'

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&units=metric&appid=${key}`

    const data = await axios.get(url)

    console.log(data);
  }

  return (
    <>
      <h1>Dev Previsão do Tempo</h1>
      <input ref={inputRef} type='text' placeholder='Digite o nome da cidade'/>
      <button onClick={searcCity}>Buscar</button>
    </>
  )
}

export default App
