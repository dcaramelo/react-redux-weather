import axios from 'axios'

const API_KEY = '0636f8e9d224d26b5e8dcb56fd7956f5'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},FR`
    const request = axios.get(url)

    return {
        type: FETCH_WEATHER,
        payload: request 
    }
}