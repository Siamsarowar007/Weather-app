// import React from 'react'

// export default function HomeLayout() {
//   return (
//     <div className=''>
//       This is home page
//       </div>
//   )
// }


"use client";
import { useState } from 'react';
import WeatherCard from './components/WeatherCard';


export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      setError('');
      const res = await fetch(`/api/weather/${city}`);
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl mb-4">Search City Weather</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 rounded w-64"
        placeholder="Enter city name"
      />
      <button
        onClick={fetchWeather}
        className="bg-blue-600 text-white px-4 py-2 ml-2 rounded"
      >
        Search
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="mt-4">
        <WeatherCard city={city} weather={weather} />
      </div>
    </div>
  );
}