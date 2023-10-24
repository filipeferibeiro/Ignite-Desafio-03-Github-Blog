import { useMemo, useState } from 'react'
import { ProfileInfo } from '../../components/ProfileInfo'
import { PublicationCard } from './components/PublicationCard'
import { SearchForm } from './components/SearchForm'
import { HomeInfoContainer, PublicationsList } from './styles'
import { useCallApi } from '../../hooks/useCallApi'
import { Info } from '../../components/Info'

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
  const [query, setQuery] = useState<string>('')

  const params = useMemo(() => {
    return {
      params: {
        q: `${query || ''} repo:filipeferibeiro/Ignite-Desafio-03-Github-Blog`,
      },
    }
  }, [query])

  const {
    data: publications,
    isLoading,
    error,
  } = useCallApi<Publications>('search/issues', params)

  function handleSetQuery(query: string) {
    setQuery(query)
  }

  return (
    <>
      <ProfileInfo />
      <SearchForm
        publicationsAmount={publications?.total_count || 0}
        searchPublications={handleSetQuery}
      />
      {error && (
        <HomeInfoContainer>
          <Info home message="Ocorreu um erro ao buscar os dados." />
        </HomeInfoContainer>
      )}
      {isLoading ? (
        <HomeInfoContainer>
          <Info home message="Carregando..." />
        </HomeInfoContainer>
      ) : (
        <PublicationsList>
          {publications?.items?.map((item) => (
            <PublicationCard
              key={item.id}
              id={item.number}
              title={item.title}
              date={item.created_at}
              description={item.body}
            />
          ))}
        </PublicationsList>
      )}
    </>
  )
}
