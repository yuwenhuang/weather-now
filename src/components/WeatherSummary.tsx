import React from 'react'
import styled from 'styled-components'

const WeatherSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  aligh-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.colors.middleBlueGreen};
  border-radius: 10px;
  box-shadow: 5px 5px 15px 5px; 
  margin: 20px;
  padding: 16px;
`;

const Description = styled.text`
  text-align: center;
  font-size: 1em;
`;

const CurrentTemperature = styled.text`
  text-align: center;
  font-size: 3em;
`;

const TemperatureLimitWrapper = styled.div`
  display: flex;
`;

const TemperatureLimit = styled.div`
  padding: 16px;
`;

interface WeatherSummaryProps {
  temp: string, 
  temp_min: string, 
  temp_max: string, 
  description: string
}

export const WeatherSummary = (props: WeatherSummaryProps):JSX.Element => {
  const { temp, temp_min, temp_max, description } = props
  return(
    <WeatherSummaryWrapper>
      <Description>{description}</Description>
      <CurrentTemperature>{temp}°C</CurrentTemperature>
      <TemperatureLimitWrapper>
        <TemperatureLimit>H:{temp_max}°C</TemperatureLimit>
        <TemperatureLimit>L:{temp_min}°C</TemperatureLimit>
      </TemperatureLimitWrapper>
    </WeatherSummaryWrapper>
  )
}