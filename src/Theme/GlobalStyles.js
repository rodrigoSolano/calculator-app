import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Spartan", sans-serif;
    font-size: 16px;
    line-height: 1.5;
    background-color: ${props => props.theme.colors.backgrounds.mainBackground};
  }
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyles
