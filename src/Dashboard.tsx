import React, { Component } from 'react';

import City from './components/City';

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
      cities: [...defaultCities, { id: defaultCities.length +1, name: this.state.userLocation }]
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
      {
        cities.map( city => {
          return <City name={city.name} />
        })
      } 
      </>
    )
    
  }

  render() { 
    return(
      <React.StrictMode>
          Dashboard
          {this.renderUserInput()}
          {this.renderCities()} 
      </React.StrictMode>
    )  
  }
}

export default Dashboard

