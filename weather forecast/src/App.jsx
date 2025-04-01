import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./App.css";
import WeatherInformation from "./componets/WeatherInformation/WeatherInformation";
import WeatherInformationFiveDays from "./componets/WeatherInformationFiveDays/WeatherInformationFiveDays";

function App() {
  const [weather, setWeather] = useState();
  const [fiveWeather, setFiveWeather] = useState();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const apiKey = import.meta.env.VITE_KEY;
  
  
  

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showLocation, () =>
        console.log("Location access denied")
      );
    }
  }, []);

  async function showLocation(pos) {
    try{
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      const url = `${import.meta.env.VITE_URL}&lat=${lat}&lon=${lon}`;

      const response = await fetch(url);
      const data = await response.json();
      const city =
        data.address?.city ||
        data.address?.town ||
        data.address?.village ||
        "tokio";
      setInputValue(city);
      searchCity(city);

    } catch (error){
        console.error("Erro ao obter a localização:", error);
        setInputValue("tokio");
    }
  }

  async function searchCity(city = inputRef.current.value) {
    const url = `${import.meta.env.VITE_URL_SEACH}${city}&lang=pt_br&units=metric&appid=${apiKey}`;
    const urlFiveDays = `${import.meta.env.VITE_URL_SEACH_FIVE}${city}&lang=pt_br&units=metric&appid=${apiKey}`;

    const weatherData = await axios.get(url);
    const fiveDaysData = await axios.get(urlFiveDays);
    setWeather(weatherData.data);
    setFiveWeather(fiveDaysData.data);
  }

  return (
    <div className="container">
      <h1>Dev Previsão do Tempo</h1>

      <input
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        onKeyUp={(e) => {
          if (e.key === "Enter") searchCity();
        }}
        placeholder="Digite o nome da cidade"
      />
      <button onClick={() => searchCity()}>Buscar</button>
      {weather && <WeatherInformation weather={weather} />}
      {fiveWeather && <WeatherInformationFiveDays fiveWeather={fiveWeather} />}
    </div>
  );
}

export default App;
