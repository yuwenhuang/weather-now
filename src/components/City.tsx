import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom'
import { ICityWeather } from '../types'

const API_KEY = 'eeb5d7b1fe69afdb6c982febcb09471e'
interface IError {
    message?: string
}
interface CityProps {
  name: string
}

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
      <ul> 
        <Link to={{
          pathname:`city/${name}`,
          state: {cityWeather}
        }}>
          {name}: {cityWeather?.main?.temp} °C
        </Link>
      </ul>
    );
  }
  }


export default City;
