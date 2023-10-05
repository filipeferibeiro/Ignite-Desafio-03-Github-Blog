import styled from 'styled-components'

export const ProfileInfoContainer = styled.section`
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  padding: 2rem 2.5rem;
  border-radius: 10px;
  margin-top: -5rem;

  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h4 {
    color: ${(props) => props.theme['base-text']};
    font-weight: normal;
    line-height: 1.6;
  }
`

export const ContactInfoContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const NameLinkContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`
