import React from 'react';
import {
  useParams,
  useLocation,
} from 'react-router-dom'
import styled from 'styled-components'

import { CityWeather } from '../types'
import { formatTime } from '../utils/formatTime'
import { media } from '../styles/mediaQuery'

import { WeatherSummary } from '../components/WeatherSummary'
import { WeatherCondition } from '../components/WeatherCondition'

const WeatherDetailsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 16px;
`;

const WeatherDetailsTitle = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: ${(props) => props.theme.colors.blackCoffee};
`
const WeatherSetion = styled.div`
  display: flex;
  ${media.desktop} {
    flex-direction: row;
  }
  ${media.tablet} {
    flex-direction: row;
  }
  ${media.phone} {
    flex-direction: column;
  }
`;

const WeatherConditions = styled.div`
  display: flex;
  flex-direction: column;
`
const WeatherConditionsRow = styled.div`
  display: flex;
  ${media.desktop} {
    flex-direction: row;
  }
  ${media.tablet} {
    flex-direction: row;
  }
  ${media.phone} {
    flex-direction: column;
  }
`

interface RouteParams {
  name?: string;
}
interface LocationParams {
  cityWeather: CityWeather
}

const WeatherDetails =  (): JSX.Element  => {
  const { name } = useParams<RouteParams>()
  const location = useLocation<LocationParams>()
  const { cityWeather } = location.state
  const { main, visibility, sys, timezone, weather } = cityWeather
  const { temp, temp_min, temp_max } = main
  const { sunrise, sunset } = sys
  const { description } = weather[0]
  const localSunriseTime = formatTime(sunrise + timezone)
  const localSunsetTime = formatTime(sunset + timezone)

  return (
    <WeatherDetailsWrapper>
      <WeatherDetailsTitle>{name}</WeatherDetailsTitle>
      <WeatherSetion>
        <WeatherSummary temp={temp} temp_min={temp_min} temp_max={temp_max} description={description}/>
        <WeatherConditions>
          <WeatherConditionsRow>
            <WeatherCondition description='humidity' value={main.humidity} unit='%'/>
            <WeatherCondition description='visibility' value={visibility} unit='m'/>
          </WeatherConditionsRow>
          <WeatherConditionsRow>
            <WeatherCondition description='sunrise' value={localSunriseTime} />
            <WeatherCondition description='sunset' value={localSunsetTime} />  
          </WeatherConditionsRow>
        </WeatherConditions>
      </WeatherSetion>    
    </WeatherDetailsWrapper>
  ) 
}


export default WeatherDetails;
