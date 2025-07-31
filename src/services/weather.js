import axios from "axios";
const API_KEY_WEATHER = import.meta.env.VITE_API_KEY_WEATHER;

export const getWeather = async (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY_WEATHER}&q=${city}&aqi=no`;
  const response = await axios.get(url);
  return response.data;
};
