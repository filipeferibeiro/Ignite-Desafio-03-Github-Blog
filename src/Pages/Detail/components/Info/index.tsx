import { BackButton } from '../../../../components/BackButton'
import { PostInfoContainer, PostInfoNavigation, PostTitle } from './styles'

export interface InfoProps {
  message: string
}

export function Info({ message }: InfoProps) {
  return (
    <PostInfoContainer>
      <PostInfoNavigation>
        <BackButton to="/" text="Voltar" />
      </PostInfoNavigation>
      <PostTitle>{message}</PostTitle>
    </PostInfoContainer>
  )
}
