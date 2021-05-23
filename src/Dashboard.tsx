import React, { Component } from 'react';
import styled from 'styled-components'

import City from './components/City';

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
  color: ${(props) => props.theme.colors.blackCoffee};
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

class Dashboard extends Component<{}, DashboardState> {
  state = {
    userLocation: "",
    isSubmitted: false,
    cities:[...defaultCities]
  };

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    this.setState({ isSubmitted: true })
    this.setState({ 
      cities: [...this.state.cities, { id: this.state.cities.length +1, name: this.state.userLocation }]
    })
  }

  handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({userLocation: event.currentTarget.value})
  }

  renderUserInput = () => {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Enter your city:</label>
        <input type="text" value={this.state.userLocation} onChange={this.handleInputChange}></input>
        <input type="submit" value="Submit" />
      </form>)
  }

  renderCities = () => {
    const { cities } = this.state
    
    return(
      <>
      { cities.map( city => {return <City name={city.name} />})} 
      </>
    )
    
  }

  render() { 
    return(
      <React.StrictMode>
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
      </React.StrictMode>
    )  
  }
}

export default Dashboard

