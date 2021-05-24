import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { CityWeather } from '../types'

// It is just for convience to run the project locally so I leave the API key here.
// It is better to put it in environment variables.
const API_KEY = 'eeb5d7b1fe69afdb6c982febcb09471e'

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
    outline: none;
  } 
  &:focus-within, &:hover {
    background-color: ${(props) => props.theme.colors.mintCream};
  }
`

const CityName = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => props.theme.colors.blackCoffee};
`

const CityTemperature = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: #32292F;
`

const ErrorMessageWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.error};
  border-radius: 10px;
  margin: 20px;
  padding: 16px;
`

const ErrorMessage = styled.text`
  color: ${(props) => props.theme.colors.mintCream};
`

const City =  (props : CityProps):JSX.Element => {
  const { name } = props
  const [error, setError] = useState<Error | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [cityWeather, setCityWeather] = useState<CityWeather | null>(null)

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${API_KEY}`)
      .then(res => {
        return res.json()
      })
      .catch(() =>{
        throw new Error('Something went wrong, please come back later!')
      })
      .then(
        (result) => {
          if (result.cod !== 200) throw new Error(result.message)
          setIsLoaded(true)
          setCityWeather(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      ).catch((error) => {
        setError(error)
      })
  }, [])
  
  if (error) {
    return (
      <ErrorMessageWrapper>
        <ErrorMessage>
          Error: {error.message}
        </ErrorMessage>
      </ErrorMessageWrapper>
    )
  } else if (!isLoaded) {
    return <div>Loading...</div>
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
    )
  }
}


export default City
