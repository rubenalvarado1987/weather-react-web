import { useState, useEffect } from "react";
import { getWeather } from "@services/weather";

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

export default useWeather;
