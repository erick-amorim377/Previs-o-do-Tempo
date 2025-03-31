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
  const key = "7e46c6ef4f89e59dad6be9bb48be367a";

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
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

      const response = await fetch(url);
      const data = await response.json();
      const city =
        data.address?.city ||
        data.address?.town ||
        data.address?.village ||
        "São João de Meriti";
      setInputValue(city);
      searchCity(city);

    } catch (error){
        console.error("Erro ao obter a localização:", error);
        setInputValue("São João de Meriti");
    }
  }

  async function searchCity(city = inputRef.current.value) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&units=metric&appid=${key}`;
    const urlFiveDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=pt_br&units=metric&appid=${key}`;

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
