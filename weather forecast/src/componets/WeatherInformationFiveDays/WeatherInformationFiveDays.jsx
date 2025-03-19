import React from 'react'
import "./WeatherInformationFiveDays.css"

function WeatherInformationFiveDays({fiveWeather}) {

  let dailyForecast = {}

  for(let forecast of fiveWeather.list) {
   const date = new Date(forecast.dt * 1000).toDateString();
    
   if (!dailyForecast[date]){
    dailyForecast[date] = forecast
   }
    
  }

  const nextFiveDays = Object.values(dailyForecast).slice(1,6);

  function convertDay(date){
  
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-Br', {weekday: 'long', day: "2-digit"})

    return newDate
  }


  return (
    <div className='weatherContainer'>

      <h3>Previsão dos Proximos 5 dias</h3>

      <div className='weatherList'>

      {nextFiveDays.map(forecast => (
        <div key={forecast.td} className='weatherItem'>
          <p>{convertDay(forecast)}</p>
          <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}/>
          <p>{forecast.weather[0].description}</p>
          <p>{Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}°C max</p>
        </div>
      ))}
      </div>

    </div>
  )
}

export default WeatherInformationFiveDays