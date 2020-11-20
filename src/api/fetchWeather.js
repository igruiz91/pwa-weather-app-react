import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'c5cbb52df6ae10aad7676646dba420db'


export const fetchWeather = async (query) => {
  const {data} = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY, 
    }
  });

  return data
}
