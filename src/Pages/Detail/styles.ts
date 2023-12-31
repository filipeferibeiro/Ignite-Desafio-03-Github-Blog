import styled from 'styled-components'

export const DetailContainer = styled.div`
  padding: 2.5rem 2rem;

  color: ${(props) => props.theme['base-text']};
  line-height: 1.6;

  pre {
    border-radius: 2px;
    background: ${(props) => props.theme['base-post']};
    margin: 1.5rem 0;
    padding: 1rem;

    div {
      background: transparent !important;
    }
  }

  h2 {
    margin-top: 1rem;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-text']};
`
