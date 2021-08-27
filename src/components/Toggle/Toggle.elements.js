import styled from 'styled-components'

export const ToggleWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;  
  gap: 1rem;
  position: relative;
`

export const ToggleLabel = styled.div`
  font-size: 0.625rem;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.text};
  position: absolute;
  left: -4rem;
  bottom: 0;
  letter-spacing: 0.1rem;
`
export const ToggleButtomWrapper = styled.div`
  width: auto;
  height: auto;
  min-width: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
`

export const ToggleButtonLabels = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.7rem;
`

export const ToggleButton = styled.div`
  width: 3rem;
  height: 1rem;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.backgrounds.toggleBackground};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0rem;
  cursor: pointer;
`
export const ToggleButtonIcon = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.foregrounds.toggleForeground};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  transform: ${({ translate }) => translate ? `translateX(${translate}rem)` : ''} ;
`
