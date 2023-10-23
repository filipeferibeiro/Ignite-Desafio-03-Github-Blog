import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BackButtonContainer } from './styles'
import { NavLinkProps } from 'react-router-dom'

interface BackButtonProps extends NavLinkProps {
  text: string
}

export function BackButton({ text, ...rest }: BackButtonProps) {
  return (
    <BackButtonContainer {...rest}>
      <FontAwesomeIcon icon={faChevronLeft} />
      <span>{text}</span>
    </BackButtonContainer>
  )
}
