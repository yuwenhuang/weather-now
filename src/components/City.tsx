import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ICityWeather } from '../types'

const API_KEY = 'eeb5d7b1fe69afdb6c982febcb09471e'
interface IError {
    message?: string
}
interface CityProps {
  name: string
}

const CityWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.middleBlueGreen};
  border-radius: 10px;
  margin: 20px;
  padding: 16px;
  box-shadow: 5px 5px 15px 5px; 
  & > a {
    text-decoration: none;
  } 
`;

const CityName = styled.h2`
font-size: 1.5em;
text-align: center;
color: ${(props) => props.theme.colors.blackCoffee};
`;

const CityTemperature = styled.h2`
font-size: 1.5em;
text-align: center;
color: #32292F;
`;

const City =  (props : CityProps) => {
  const { name } = props
  const [error, setError] = useState<IError | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cityWeather, setCityWeather] = useState<ICityWeather | null>(null);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${API_KEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setIsLoaded(true);
          setCityWeather(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <CityWrapper>
        <Link to={{
          pathname:`city/${name}`,
          state: {cityWeather}
        }}>
        <CityName>
          {name}
        </CityName>
        <CityTemperature>  
          {cityWeather?.main?.temp} °C
        </CityTemperature>
        </Link>
      </CityWrapper>
    );
  }
  }


export default City;
