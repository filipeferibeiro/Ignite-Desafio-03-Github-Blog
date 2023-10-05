import styled from 'styled-components'

export const ExternalLinkContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${(props) => props.theme.blue};
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
    transition: border-color 0.2s;
  }
`
