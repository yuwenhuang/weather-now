import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      cadetBlue: string;
      middleBlueGreen: string;
      mintCream: string;
      blackCoffee: string;
      umber: string;
      font: string;
    };
  }
}