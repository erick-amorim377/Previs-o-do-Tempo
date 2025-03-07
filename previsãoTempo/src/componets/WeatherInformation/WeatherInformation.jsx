import React from 'react'

const WeatherInformation = ({weather}) => {
    console.log(weather)
  return (
    <div>
        <h2>{weather.name}</h2>
        <img src={`http://openweathermap.org/img/wg${weather.weather[0].icon}.png`}/>

        <p>{Math.round(weather.main.temp)}</p>

        <p>{weather.weather[0].description}</p>

        <div>
            <p>Sensação térmica: {Math.round(weather.main.feels_like)}</p>
            <p>Umidade: {weather.main.humidity}%</p>
            <p>Pressão: {weather.main.pressure}</p>
        </div>
    </div>
  )
}

export default WeatherInformation