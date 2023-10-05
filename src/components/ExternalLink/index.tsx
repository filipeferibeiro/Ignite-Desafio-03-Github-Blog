import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnchorHTMLAttributes } from 'react'
import { ExternalLinkContainer } from './styles'

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
}

export function ExternalLink({ text, ...rest }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer target="_blank" rel="noreferrer" {...rest}>
      <span>{text}</span>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </ExternalLinkContainer>
  )
}
