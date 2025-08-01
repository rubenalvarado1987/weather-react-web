import React from "react";

interface WeatherData {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

interface CardWeatherProps {
  weather: WeatherData;
}

const CardWeather: React.FC<CardWeatherProps> = ({ weather }) => {
  return (
    <>
      <div className="bg-white shadow-md rounded p-4 w-full max-w-sm mb-4">
        <h2 className="text-xl font-bold" data-testid="weather-city-name">
          {weather.location.name}
        </h2>
        <p className="text-gray-600" data-testid="weather-temperature">
          Temperature: {weather.current.temp_c}°C
        </p>
        <p className="text-gray-600" data-testid="weather-condition">
          Condition: {weather.current.condition.text}
        </p>
        <img
          src={weather.current.condition.icon}
          alt={weather.current.condition.text}
          className="mt-2"
        />
      </div>
      {!weather && (
        <p data-testid="error-message">No matching location found</p>
      )}
    </>
  );
};

export default CardWeather;
