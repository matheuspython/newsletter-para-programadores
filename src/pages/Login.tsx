import React, { useState } from 'react';
import { Header } from '../components/Header';
import { LoginSection } from '../components/LoginSection'

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';


export const Login: React.FC = () => {
  const [theme, setTheme] = useState(dark)
  const toggleTheme = () => setTheme(theme.title === 'light'? dark : light)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header toggleTheme={toggleTheme} />
      <LoginSection />
  </ThemeProvider>
  )
}
