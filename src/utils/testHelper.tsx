import React from 'react'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from "react-router-dom"

import { weatherTheme } from '../styles/weatherTheme'

export const wrapper = (child: React.Component) => {
  return( 
  <ThemeProvider theme={weatherTheme}><MemoryRouter>{child}</MemoryRouter></ThemeProvider>
  )
}
