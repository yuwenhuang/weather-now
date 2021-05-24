import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components'

import { wrapper } from '../../utils/testHelper'
import WeatherDetails from '../WeatherDetails'

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: {
      cityWeather: {
        name: 'test city',
        main: {
          temp: '10',
          temp_min: '0',
          temp_max: '20',
          humidity: '25'
        },
        visibility: '1000',
        sys: {
          sunrise: 1609459200,
          sunset: 1609459200,
          country: 'test country'
        },
        weather: [{
          id: 1,
          main: 'main',
          description: 'test',
          icon: 'test'
        }],
        timezone: 1609459200
      }
    }  
  })
}));

it('renders <WeatherDetails /> component', () => {
  const component = renderer.create(
    wrapper(<WeatherDetails />)
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})