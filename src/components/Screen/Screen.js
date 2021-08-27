import { useContext } from 'react'
import { Screen as ScreenWrapper } from './Screen.elements'
import CalcContext from '../../context/calcContext'

const Screen = () => {
  const { expresion, result } = useContext(CalcContext)
  return (
    <ScreenWrapper>
      { expresion || result }
    </ScreenWrapper>
  )
}

export default Screen
