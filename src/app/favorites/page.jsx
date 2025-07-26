"use client"
import { useEffect, useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import { getToken } from '../../../utils/auth';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [weathers, setWeathers] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const token = getToken();
      if (!token) return;

      const res = await fetch('/api/favorites', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const cities = await res.json();
      setFavorites(cities);

      const weatherData = await Promise.all(
        cities.map((city) =>
          fetch(`/api/weather/${city}`).then((res) => res.json())
        )
      );

      setWeathers(weatherData);
    };

    fetchFavorites();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4 text-center">Your Favorite Cities</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {weathers.map((weather, idx) => (
          <WeatherCard key={idx} city={favorites[idx]} weather={weather} />
        ))}
      </div>
    </div>
  );
}
