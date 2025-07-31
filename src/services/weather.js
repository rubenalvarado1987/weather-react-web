import axios from "axios";

// import { API_KEY_WEATHER } from "../../env.js";
const API_KEY_WEATHER = "ad8485bb37ab490a849115504253107";

export const getWeather = async (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY_WEATHER}&q=${city}&aqi=no`;
  const response = await axios.get(url);
  return response.data;
};
