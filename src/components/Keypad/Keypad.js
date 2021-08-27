import React from 'react'
import { Keypad as KeypadWrapper } from './Keypad.elements'
import Key from '../Key/Key'
import { keys } from '../../constants/keys'

const Keypad = () => {
  return (
    <KeypadWrapper>
      {keys.map(
        ({ label, value }) => <Key label={label} value={value} key={label} />)
      }
    </KeypadWrapper>
  )
}

export default React.memo(Keypad)
