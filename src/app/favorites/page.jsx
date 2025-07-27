"use client";
import { useState } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleFetch = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8daf567b6eed1bc332964115f4cfb1db&units=metric`
    );
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={city}
        placeholder="শহরের নাম লিখুন"
        onChange={(e) => setCity(e.target.value)}
        className="border px-2 py-1"
      />
      <button onClick={handleFetch} className="ml-2 bg-blue-500 text-white px-4 py-1">
        আবহাওয়া দেখুন
      </button>

      {weather && (
        <div className="mt-4">
          <h2>{weather.name} এর আবহাওয়া</h2>
          <p>তাপমাত্রা: {weather.main.temp}°C</p>
          <p>আবহাওয়া: {weather.weather[0].description}</p>
          <p>আর্দ্রতা: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

