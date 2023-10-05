import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { PublicationCardContainer, PublicationCardHeader } from './styles'

interface PublicationCardProps {
  title: string
  date: string
  description: string | null
}

export function PublicationCard({
  title,
  date,
  description,
}: PublicationCardProps) {
  return (
    <PublicationCardContainer>
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
