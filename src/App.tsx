import { useState } from "react";
import "./App.css";
import SearchBar from "@components/weather/SearchBar";
import useWeather from "@hooks/useWeather";

const App: React.FC = () => {
  const [city, setCity] = useState("Santiago de Chile");
  const weather = useWeather(city);

  const handleSearch = (query: string) => {
    setCity(query);
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col p-4">
        <h1 className="text-2xl font-bold mb-4 mf-4">Weather App</h1>
        <p>This is a weather app built with React and TypeScript.</p>
        <SearchBar onSearch={handleSearch} />
        {weather && (
          <div className="bg-white shadow-md rounded p-4 w-full max-w-sm mb-4">
            <h2 className="text-xl font-bold">{weather.location.name}</h2>
            <p className="text-gray-600">
              Temperature: {weather.current.temp_c}°C
            </p>
            <p className="text-gray-600">
              Condition: {weather.current.condition.text}
            </p>
            <img
              src={weather.current.condition.icon}
              alt={weather.current.condition.text}
              className="mt-2"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
