import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const PublicationCardContainer = styled(NavLink)`
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid transparent;
  text-decoration: none;
  color: ${(props) => props.theme['base-title']};

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  cursor: pointer;
  transition: border-color 0.2s;

  p {
    color: ${(props) => props.theme['base-text']};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const PublicationCardHeader = styled.header`
  display: flex;
  gap: 1rem;

  h1 {
    flex: 1;
    font-size: 1.25rem;
    font-weight: bold;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  span {
    width: max-content;
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`
