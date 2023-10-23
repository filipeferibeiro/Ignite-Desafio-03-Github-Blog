import { useEffect, useState } from 'react'
import { ProfileInfo } from '../../components/ProfileInfo'
import { PublicationCard } from './components/PublicationCard'
import { SearchForm } from './components/SearchForm'
import { PublicationsList } from './styles'
import { api } from '../../lib/api'

export interface Publication {
  body: null | string
  created_at: string
  id: number
  number: number
  title: string
}

export interface Publications {
  items: Publication[]
  total_count: number
}

export function Home() {
  const [publications, setPublications] = useState<Publications>(
    {} as Publications,
  )

  async function getGithubPublications(query?: string) {
    const response = await api.get('search/issues', {
      params: {
        q: `${query || ''} repo:filipeferibeiro/Ignite-Desafio-03-Github-Blog`,
      },
    })

    setPublications(response.data)
  }

  useEffect(() => {
    getGithubPublications()
  }, [])

  return (
    <>
      <ProfileInfo />
      <SearchForm
        publicationsAmount={publications.total_count}
        searchPublications={getGithubPublications}
      />
      <PublicationsList>
        {publications.items?.map((item) => (
          <PublicationCard
            key={item.id}
            id={item.number}
            title={item.title}
            date={item.created_at}
            description={item.body}
          />
        ))}
      </PublicationsList>
    </>
  )
}
