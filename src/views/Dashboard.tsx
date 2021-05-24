import React, { Component } from 'react';
import styled from 'styled-components'

import City from '../components/City';

const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 16px;
`

const DashboardTitle = styled.h1`
  font-size: 3.5em;
  text-align: center;
`
const SearchSetionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  background-color: ${(props) => props.theme.colors.middleBlueGreen};
  border-radius: 10px;
  aligh-itens: center;
  justify-content: center;
  margin: 20px;
  padding: 20px;
`;

const CitySectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
`;


const defaultCities = [
  { id: 1, name: 'London'},
  { id: 2, name: 'Berlin'}
]

type CityInfo = {
  id: number,
  name: string
}

interface DashboardState {
  userLocation: string;
  isSubmitted: boolean;
  cities: CityInfo[];
}

class Dashboard extends Component<Record<string, never>, DashboardState> {
  state = {
    userLocation: "",
    isSubmitted: false,
    cities: JSON.parse(window.localStorage.getItem("cities") || '0') as CityInfo[]|| defaultCities
  };

  handleSubmit = (event: React.SyntheticEvent):void => {
    event.preventDefault();
    this.setState({ isSubmitted: true })
    const cities = [...this.state.cities, { id: this.state.cities.length +1, name: this.state.userLocation }]
    this.setState({ 
      cities,
    })
    window.localStorage.setItem("cities",JSON.stringify(cities))
  }

  handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({userLocation: event.currentTarget.value})
  }

  renderUserInput = (): JSX.Element => {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Enter your city:</label>
        <input type="text" value={this.state.userLocation} onChange={this.handleInputChange}></input>
        <input type="submit" value="Submit" />
      </form>)
  }

  renderCities = (): JSX.Element => {
    const { cities } = this.state
    
    return(
      <>
        {cities.map( city => {return <City key={city.id} name={city.name} />})} 
      </>
    )
    
  }

  render(): JSX.Element { 
    return(
      <DashboardWrapper>
        <DashboardTitle>
            Weather Now!
        </DashboardTitle>
        <SearchSetionWrapper>
          {this.renderUserInput()}
        </SearchSetionWrapper> 
        <CitySectionWrapper>
          {this.renderCities()} 
        </CitySectionWrapper>
      </DashboardWrapper>
    )  
  }
}

export default Dashboard

