import {
  ToggleWrapper,
  ToggleLabel,
  ToggleButtomWrapper,
  ToggleButtonLabels,
  ToggleButton,
  ToggleButtonIcon
} from './Toggle.elements'
import { useState } from 'react'

const Toggle = ({ setNextTheme }) => {
  const [translate, setTranslate] = useState(0)

  const handleClick = () => {
    if (translate !== 2) {
      setTranslate(translate + 1)
    } else {
      setTranslate(0)
    }
    setNextTheme()
  }

  return (
    <ToggleWrapper>

      <ToggleLabel>THEME</ToggleLabel>

      <ToggleButtomWrapper>

        <ToggleButtonLabels>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </ToggleButtonLabels>

        <ToggleButton onClick={handleClick} >
          <ToggleButtonIcon translate={translate} />
        </ToggleButton>

      </ToggleButtomWrapper>

    </ToggleWrapper>
  )
}

export default Toggle
