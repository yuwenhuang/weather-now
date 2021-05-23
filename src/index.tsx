import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Dashboard from './Dashboard'
import WeatherDetails from './components/WeatherDetails'

const App = () => {
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/city/:name" component={WeatherDetails} />      
      </Switch>  
    </Router>
  )

  
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
