// export default function WeatherCard({ data }) {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm mx-auto text-center">
//       <h2 className="text-2xl font-semibold mb-2">{data.name}</h2>
//       <p>🌡️ Temp: {data.main.temp}°C</p>
//       <p>💧 Humidity: {data.main.humidity}%</p>
//       <img
//         src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
//         alt="weather icon"
//         className="mx-auto"
//       />
//       <p className="capitalize">{data.weather[0].description}</p>
//     </div>
//   );
// }




const WeatherCard = ({ city, weather }) => {
  if (!weather) return null;

  return (
    <div className="bg-white p-4 rounded shadow text-center max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold mb-2">{city}</h2>
      <img
        src={`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`}
        alt={weather.weather[0].description}
        className="mx-auto"
      />
      <p className="text-lg">{weather.weather[0].main}</p>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;