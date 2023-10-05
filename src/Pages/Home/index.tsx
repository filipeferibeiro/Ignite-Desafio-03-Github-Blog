import { useEffect, useState } from 'react'
import { ProfileInfo } from '../../components/ProfileInfo'
import { PublicationCard } from './components/PublicationCard'
import { SearchForm } from './components/SearchForm'
import { PublicationsList } from './styles'
import { api } from '../../lib/api'

export interface Publication {
  active_lock_reason: null
  assignee: null
  body: null | string
  closed_at: Date | null
  comments: number
  comments_url: string
  created_at: string
  events_url: string
  html_url: string
  id: number
  labels_url: string
  locked: boolean
  milestone: null
  node_id: string
  number: number
  performed_via_github_app: null
  repository_url: string
  score: number
  state_reason: null | string
  timeline_url: string
  title: string
  updated_at: Date
  url: string
}

export interface Publications {
  incomplete_results: boolean
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
            title={item.title}
            date={item.created_at}
            description={item.body}
          />
        ))}
      </PublicationsList>
    </>
  )
}
