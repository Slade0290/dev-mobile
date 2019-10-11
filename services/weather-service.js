class WeatherService {
    getWeatherHome() {
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
            }
        };
    }
}

export default WeatherService;