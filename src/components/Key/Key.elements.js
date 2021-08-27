import styled, { css } from 'styled-components'

export const Key = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.foregrounds.keyForeground};
  background-color: ${({ theme }) => theme.colors.backgrounds.keyBackground};
  border-radius: ${theme => theme.borderRadius};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  cursor: pointer;
  border-bottom: 0.25rem solid ${props => props.theme.colors.shadows.keyShadow};
  border-radius: 0.5rem;

  &:active {
    border-bottom: 0.1rem solid ${props => props.theme.colors.shadows.keyShadow};
    transition: all 0.1s ease 0s;
  }

  ${(props) => props.delete && css`
    background-color: ${({ theme }) => theme.colors.backgrounds.resetAndDeleteKeyBackground};
    border-bottom: 0.25rem solid ${props => props.theme.colors.shadows.resetAndDeleteKeyShadow};
    color: ${props => props.theme.colors.foregrounds.resetAndDeleteKeyForeground};
    font-size: 1rem;
  `}

  ${({ reset }) => reset && css`
    background-color: ${({ theme }) => theme.colors.backgrounds.resetAndDeleteKeyBackground};
    border-bottom: 0.25rem solid ${props => props.theme.colors.shadows.resetAndDeleteKeyShadow};
    color: ${props => props.theme.colors.foregrounds.resetAndDeleteKeyForeground};
    font-size: 1rem;
    grid-column-start: 1;
    grid-column-end: 3; 
  `}

  ${({ equal }) => equal && css`
    background-color: ${({ theme }) => theme.colors.backgrounds.equalKeyBackground};
    border-bottom: 0.25rem solid ${props => props.theme.colors.shadows.equalKeyShadow};
    color: ${props => props.theme.colors.text};
    font-size: 1rem;
    grid-column-start: 3;
    grid-column-end: 5;
  `}

`
