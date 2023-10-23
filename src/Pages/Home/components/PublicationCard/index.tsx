import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { PublicationCardContainer, PublicationCardHeader } from './styles'

interface PublicationCardProps {
  id: number
  title: string
  date: string
  description: string | null
}

export function PublicationCard({
  id,
  title,
  date,
  description,
}: PublicationCardProps) {
  return (
    <PublicationCardContainer to={`detail/${id}`}>
      <PublicationCardHeader>
        <h1>{title}</h1>
        <span>
          {formatDistanceToNow(new Date(date), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </PublicationCardHeader>
      <p>{description}</p>
    </PublicationCardContainer>
  )
}
