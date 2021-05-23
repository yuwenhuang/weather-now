export interface ICityWeather {
    name: string
    main: {
        temp: string,
        humidity: string
    }
    visibility: string
    sys: {
        sunrise: number
        sunset: number
    }
    timezone: number
}