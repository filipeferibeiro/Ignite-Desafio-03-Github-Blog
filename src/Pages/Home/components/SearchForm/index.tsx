import * as z from 'zod'

import { SearchFormContainer, SearchTitle } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface SearchFormProps {
  publicationsAmount: number
  searchPublications: (query: string) => void
}

export function SearchForm({
  publicationsAmount,
  searchPublications,
}: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchPublications(data: SearchFormInputs) {
    searchPublications(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPublications)}>
      <SearchTitle>
        <h2>Publicações</h2>
        <span>{publicationsAmount} publicações</span>
      </SearchTitle>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
