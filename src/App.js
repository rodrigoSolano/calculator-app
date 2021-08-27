import GlobalStyles from './Theme/GlobalStyles'
import { Header, Container, Screen, Keypad } from './components'
import { ThemeProvider } from 'styled-components'
import themes from './Theme/Themes'
import { useState } from 'react'
import CalcProvider from './context/CalcProvider'

function App () {
  const [selectedTheme, setSelectedTheme] = useState(themes.theme_1)
  const [currentTheme, setCurrentTheme] = useState('theme_1')

  const setNextTheme = () => {
    switch (currentTheme) {
      case 'theme_1':
        setCurrentTheme('theme_2')
        setSelectedTheme(themes.theme_2)
        break
      case 'theme_2':
        setCurrentTheme('theme_3')
        setSelectedTheme(themes.theme_3)
        break
      default:
        setCurrentTheme('theme_1')
        setSelectedTheme(themes.theme_1)
    }
  }

  return (
    <ThemeProvider theme={selectedTheme} >
      <CalcProvider>
        <Container>
          <Header setNextTheme={setNextTheme} />
          <Screen />
          <Keypad />
        </Container>
        <GlobalStyles />
      </CalcProvider>
    </ThemeProvider>
  )
}

export default App
