import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  margin-top: 4.5rem;

  display: flex;
  gap: 0.75rem;
  flex-direction: column;

  input {
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const SearchTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 1.6;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`
