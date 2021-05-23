import React, { useState, useEffect }  from 'react';
import {
  useParams,
  useLocation,
} from 'react-router-dom'
import { ICityWeather } from '../types'

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
  const { main } = cityWeather

  return (
    <>
      <p>Weather Details: {name}</p>
      <p> temperature: {main.temp} </p>
      <p> humidity:{main.humidity} </p>
    </>
  ) 
  }


export default WeatherDetails;
