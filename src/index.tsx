import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import City from './components/City';

const defaultCitys = ["London", "Berlin"]

interface DashboardState {
  userLocation: string;
  isSubmitted: boolean;
}

class Dashboard extends Component<{}, DashboardState> {
  state = {
    userLocation: "",
    isSubmitted: false,
  };

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    this.setState({isSubmitted: true})
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

  render() {
    const { isSubmitted, userLocation } = this.state
    
    return(
      <React.StrictMode>
        Dashboard
      {this.renderUserInput()}
      { isSubmitted && <City name={userLocation}/> }
      <City name={defaultCitys[0]}/>
      <City name={defaultCitys[1]}/>
      </React.StrictMode>
    )  
  }
}

export default Dashboard

ReactDOM.render(< Dashboard />, document.getElementById('root'));
