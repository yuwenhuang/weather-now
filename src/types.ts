export interface ICityWeather {
    name: string
    main: {
        temp: string,
        humidity: string
    }
    visibility: string
    sys: {
        sunrise: string
        sunset: string
    }
}