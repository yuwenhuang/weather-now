import { DefaultTheme } from 'styled-components';

const weatherTheme: DefaultTheme = {

  borderRadius: '5px',

  colors: {
    cadetBlue: '#70abaf',
    middleBlueGreen: '#99E1D9',
    mintCream: '#F0F7F4',
    blackCoffee: '#32292F',
    umber: '#705D56',
    error: '#cb514b',
  },
};
export type ThemeType = typeof weatherTheme
export { weatherTheme }