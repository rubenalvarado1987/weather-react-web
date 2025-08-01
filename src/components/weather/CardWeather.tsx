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
    <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-2xl p-6 w-full max-w-sm mb-4 transform hover:scale-105">
      <h2
        className="text-2xl font-bold text-blue-600 mb-2"
        data-testid="weather-city-name"
      >
        {weather.location.name}
      </h2>
      <p
        className="text-gray-700 text-lg mb-1"
        data-testid="weather-temperature"
      >
        Temperature: {weather.current.temp_c}°C
      </p>
      <p className="text-gray-700 mb-4" data-testid="weather-condition">
        Condition: {weather.current.condition.text}
      </p>
      <img
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
        className="mt-2 mx-auto"
      />
      {!weather && (
        <p className="text-red-500 mt-4" data-testid="error-message">
          No matching location found
        </p>
      )}
    </div>
  );
};

export default CardWeather;
