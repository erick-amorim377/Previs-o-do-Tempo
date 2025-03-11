import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformation from './componets/WeatherInformation/WeatherInformation'


function App() {
  const [weather, setWeather] = useState()
  

  const inputRef = useRef()

  async function searcCity() {
    const city = inputRef.current.value
    const key = '7e46c6ef4f89e59dad6be9bb48be367a'

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&units=metric&appid=${key}`

    const aipInfoData = await axios.get(url)
    setWeather(aipInfoData.data)

  }

  return (
    <div className='container'>
      <h1>Dev Previsão do Tempo</h1>
      <input ref={inputRef} type='text' placeholder='Digite o nome da cidade'/>
      <button onClick={searcCity}>Buscar</button>

      {weather && <WeatherInformation weather={weather}/>}
    </div>
  )
}

export default App
