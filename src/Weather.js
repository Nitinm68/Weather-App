import React, { useState } from "react";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const getWeather = async () => {
    if (!city) return alert("Please enter a city!");

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await res.json();

      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        alert("City not found!");
        setWeatherData(null);
      }
    } catch (err) {
      console.error(err);
      alert("Error fetching weather!");
    }
  };

  return (
    <div className="weather-container">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        
      />
      <br />
      <button
        onClick={getWeather}>
    Get Weather 
      </button>

      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>🌡️ Temp: {weatherData.main.temp} °C</p>
          <p>💧 Humidity: {weatherData.main.humidity}%</p>
          <p>📍 Condition: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
