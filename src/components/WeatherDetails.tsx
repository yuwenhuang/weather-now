import React, { useState, useEffect }  from 'react';
import {
  useParams,
  useLocation,
} from 'react-router-dom'
import { ICityWeather } from '../types'
import { formatTime } from '../utils/formatTime'

interface RouteParams {
  name?: string;
}
interface LocationParams {
  cityWeather: ICityWeather
}

const WeatherDetails =  () => {
  const { name } = useParams<RouteParams>()
  const location = useLocation<LocationParams>()
  const { cityWeather } = location.state
  const { main, visibility, sys, timezone } = cityWeather
  const { sunrise, sunset } = sys
  const localSunriseTime = formatTime(sunrise + timezone)
  const localSunsetTime = formatTime(sunset + timezone)

  return (
    <>
      <p>Weather Details: {name}</p>
      <p>temperature: {main.temp}</p>
      <p>humidity: {main.humidity} %</p>
      <p>visibility: {visibility} m</p>
      <p>sunrise: {localSunriseTime}</p>
      <p>sunset: {localSunsetTime}</p>
    </>
  ) 
  }


export default WeatherDetails;
