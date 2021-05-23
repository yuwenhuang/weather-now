export interface ICityWeather {
    name: string
    main: {
        temp: string,
        temp_min: string,
        temp_max: string
        humidity: string
    }
    visibility: string
    sys: {
        sunrise: number
        sunset: number
        country: string
    }
    weather: weather[]
    timezone: number
}

type weather = {
    id: number
    main: string
    description: string
    icon: string
}