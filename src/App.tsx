import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getWeather } from "./services/weather";

const useWeather = (city: string) => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const response = await getWeather(city);
    setWeather(response);
  };

  useEffect(() => {
    if (city) {
      fetchWeather();
    }
  }, [city]);

  return weather;
};

function App() {
  const [count, setCount] = useState(0);
  const [city, setCity] = useState("Madrid");
  const [inputValue, setInputValue] = useState("");
  const weather = useWeather(city);

  const handleSearch = () => {
    setCity(inputValue);
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col p-4">
        <h1 className="text-2xl font-bold mb-4 mf-4">Weather App</h1>
        <p>This is a weather app built with React and TypeScript.</p>
        <div className="flex mb-4 mt-12">
          {" "}
          {/* Increased mt value */}
          <input
            type="text"
            className="border p-2 rounded-l"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Madrid"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white p-2 rounded-r"
          >
            Search
          </button>
        </div>
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
}

export default App;
