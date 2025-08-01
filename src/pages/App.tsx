import { useState } from "react";
import "./App.css";
import SearchBar from "@components/weather/SearchBar";
import CardWeather from "@components/weather/CardWeather";
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
        <h1 className="text-4xl font-bold mb-4 mf-4">Weather App</h1>
        <p className="text-cian-700 card">
          Ingrese una cuidad y verá la previsión del tiempo
        </p>
        <SearchBar onSearch={handleSearch} />
        {weather && <CardWeather weather={weather} />}
      </div>
    </>
  );
};

export default App;
