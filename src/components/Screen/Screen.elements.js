import styled from 'styled-components'

export const Screen = styled.div`
  width: 100%;
  height: 100%;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: ${props => props.theme.colors.backgrounds.screenBackground};
  color: ${props => props.theme.colors.text};
  padding: 1rem 1.5rem 1rem 1rem;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1.2rem;
`
