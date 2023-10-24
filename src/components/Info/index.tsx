import { BackButton } from '../BackButton'
import { PostInfoContainer, PostInfoNavigation, PostTitle } from './styles'

export interface InfoProps {
  message: string
  home?: boolean
}

export function Info({ message, home }: InfoProps) {
  return (
    <PostInfoContainer>
      {!home && (
        <PostInfoNavigation>
          <BackButton to="/" text="Voltar" />
        </PostInfoNavigation>
      )}
      <PostTitle>{message}</PostTitle>
    </PostInfoContainer>
  )
}
