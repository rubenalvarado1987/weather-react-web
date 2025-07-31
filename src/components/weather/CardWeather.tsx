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
    <div className="bg-white shadow-md rounded p-4 w-full max-w-sm mb-4">
      <h2 className="text-xl font-bold">{weather.location.name}</h2>
      <p className="text-gray-600">Temperature: {weather.current.temp_c}°C</p>
      <p className="text-gray-600">
        Condition: {weather.current.condition.text}
      </p>
      <img
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
        className="mt-2"
      />
    </div>
  );
};

export default CardWeather;
