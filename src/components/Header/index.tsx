import React,{useContext} from 'react';
import { HeaderStyle } from './style';
import Switch from 'react-switch'

import { ThemeContext } from 'styled-components'
import {shade} from 'polished'


interface Props {
  toggleTheme(): void
}



export const Header: React.FC <Props> = ({toggleTheme}) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <HeaderStyle>
    
    <h1>news for dev</h1>

    <Switch
      onChange={toggleTheme}
      checked={title === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      offColor={shade(0.15, colors.primary)}
      onColor={colors.secundary}
    />
      </HeaderStyle>
)}
