import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { weatherTheme, ThemeType } from './styles/weatherTheme'
import Dashboard from './views/Dashboard'
import WeatherDetails from './views/WeatherDetails'

const GlobalStyle = createGlobalStyle<{theme: ThemeType}>`
  body {
    background-color: #70ABAF;
    font-family: sans-serif;
    color: ${props => props.theme.colors.blackCoffee};
  }
`
const App = () => {
  return(
    <React.StrictMode>
      <ThemeProvider theme={weatherTheme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/city/:name" component={WeatherDetails} />      
          </Switch>  
        </Router>
      </ThemeProvider>
    </React.StrictMode> 
  )

  
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
