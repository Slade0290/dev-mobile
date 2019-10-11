import axios from 'axios';

const city = "nanterre";
const country = "fr";
const key = "9b0e5505eab4a82606b6fc46702a3ed1";
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${key}`;

class WeatherService {

    getWeatherHome() {
        return axios.get(`${url}&q=${city},${country}`);

        return {
            weather: {
                main: `Beau temps`,
                description: `Il fait beau aujourd'hui`
            },
            main:{
                temp: '13',
                temp_min: '13',
                temp_max: '21',
                humidity: '92',
                pressure: '1009'
            },
            wind:{
                speed: '10'
            },
            sys:{
                sunrise: 1560281377,
                sunset: 1560333478
            },
            name: 'Nanterre'
        };
    }
}

export default WeatherService;