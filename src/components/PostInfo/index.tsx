import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BackButton } from '../BackButton'
import { ExternalLink } from '../ExternalLink'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import {
  DetailInfoContainer,
  PostInfoContainer,
  PostInfoNavigation,
  PostTitle,
} from './styles'

export interface PostInfoProps {
  title: string
  user: string
  createdAt: string
  comments: number
  url: string
}

export function PostInfo({
  title,
  user,
  createdAt,
  comments,
  url,
}: PostInfoProps) {
  return (
    <PostInfoContainer>
      <PostInfoNavigation>
        <BackButton to="/" text="Voltar" />
        <ExternalLink text="ver no github" href={url} target="_blank" />
      </PostInfoNavigation>
      <PostTitle>{title}</PostTitle>
      <DetailInfoContainer>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          {user}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} />
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} />
          {comments} comentários
        </span>
      </DetailInfoContainer>
    </PostInfoContainer>
  )
}
