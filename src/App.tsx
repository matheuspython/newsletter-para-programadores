import React, { useState } from 'react';
import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components';

import dark from './styles/themes/dark';
import light from './styles/themes/light';
import { Header } from './components/Header';
import { SectionTop } from './components/sectionTop';

function App(){
  const [theme, setTheme] = useState(dark)
 
  const toggleTheme = () => setTheme(theme.title === 'light'? dark : light)
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header toggleTheme={toggleTheme}  />
      <SectionTop />
    </ThemeProvider>
  )

} 

export default App;
