import styled from 'styled-components'

export const Keypad = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: repeat(5, 1fr);
  grid-gap: 1rem;
  background-color: ${({ theme }) => theme.colors.backgrounds.keypadBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1.5rem 1.5rem;
`
