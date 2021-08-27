import React, { useContext } from 'react'
import { Key as KeyWrapper } from './Key.elements'
import CalcContext from '../../context/calcContext'

const Key = ({ label, value }) => {
  const {
    addCharacterToExpresion,
    evaluateExpresion,
    deleteACharacter,
    resetExpresion
  } = useContext(CalcContext)

  if (value === 'reset') {
    return (
      <KeyWrapper reset onClick={ () => resetExpresion()}>
        <span>{label}</span>
      </KeyWrapper>
    )
  } else if (value === 'del') {
    return (
      <KeyWrapper delete onClick={ () => deleteACharacter()}>
        <span>{label}</span>
      </KeyWrapper>
    )
  } else if (value === '=') {
    return (
      <KeyWrapper equal onClick={ () => evaluateExpresion()}>
        <span>{label}</span>
      </KeyWrapper>
    )
  } else {
    return (
      <KeyWrapper onClick={ () => addCharacterToExpresion(value)}>
        <span>{label}</span>
      </KeyWrapper>
    )
  }
}

export default React.memo(Key)
