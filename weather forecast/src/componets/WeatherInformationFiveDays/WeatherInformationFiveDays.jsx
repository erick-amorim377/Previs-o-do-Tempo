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

console.log(dailyForecast)

  return (
    <div className='weatherContainer'>
      <p>five days</p>
    </div>
  )
}

export default WeatherInformationFiveDays