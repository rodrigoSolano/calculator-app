import { useState } from 'react'
import CalcContext from './calcContext'

const CalcProvider = ({ children }) => {
  const [expresion, setExpresion] = useState('')
  const [result, setResult] = useState(0)

  const addCharacterToExpresion = (character) => {
    if (expresion === 'NaN') {
      console.log(expresion)
      setExpresion(character)
      console.log(expresion)
    } else {
      setExpresion(expresion + character)
    }
  }

  const evaluateExpresion = () => {
    try {
      // eslint-disable-next-line no-eval
      setExpresion((eval(expresion) || 'NaN').toString())
      // eslint-disable-next-line no-eval
      setResult(eval(expresion))
    } catch (error) {
      setExpresion('NaN')
      setResult(0)
    }
  }

  const deleteACharacter = () => {
    if (expresion) {
      setExpresion(expresion.slice(0, -1))
    }
    if (expresion === '') {
      setExpresion('0')
    }
    setResult(0)
  }

  const resetExpresion = () => {
    setExpresion('')
    setResult(0)
  }

  const data = {
    expresion,
    addCharacterToExpresion,
    deleteACharacter,
    resetExpresion,
    evaluateExpresion,
    result
  }

  return (
    <CalcContext.Provider value={data}>
      {children}
    </CalcContext.Provider>
  )
}

export default CalcProvider
