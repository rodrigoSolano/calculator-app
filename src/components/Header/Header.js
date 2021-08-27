import React from 'react'
import Toggle from '../Toggle/Toggle'
import { Header as HeaderWrapper, Logo } from './Header.elements'

const Header = ({ setNextTheme }) => {
  return (
    <HeaderWrapper>
      <Logo>Calc</Logo>
      <Toggle setNextTheme={ setNextTheme }/>
    </HeaderWrapper>
  )
}

export default Header
