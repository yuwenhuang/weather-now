import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { weatherTheme } from './weatherTheme'
import Dashboard from './Dashboard'
import WeatherDetails from './components/WeatherDetails'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #70ABAF;
    font-family: sans-serif;
    font-color: ${props => props.theme.colors.font};
  }
`

const App = () => {
  return(
    <ThemeProvider theme={weatherTheme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/city/:name" component={WeatherDetails} />      
        </Switch>  
      </Router>
    </ThemeProvider>
  )

  
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
