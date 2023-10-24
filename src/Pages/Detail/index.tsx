import { useCallback, useEffect, useState } from 'react'
import { PostInfo, PostInfoProps } from '../../components/PostInfo'
import { DetailContainer } from './styles'
import { api } from '../../lib/api'
import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import { CodeBlock } from './components/CodeBlock'
import { Info } from './components/Info'

interface User {
  login: string
}

interface Publication {
  body: string
  comments: number
  created_at: string
  html_url: string
  title: string
  url: string
  user: User
}

export function Detail() {
  const [publication, setPublication] = useState<Publication | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { id } = useParams<{ id: string }>()

  const getGithubPublication = useCallback(async () => {
    setIsLoading(true)

    try {
      const response = await api.get(
        `repos/filipeferibeiro/Ignite-Desafio-03-Github-Blog/issues/${id}`,
      )

      setPublication(response.data)
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getGithubPublication()
  }, [getGithubPublication])

  if (error) {
    return <Info message="Ocorreu um erro ao buscar os dados." />
  }

  if (isLoading || !publication) {
    return <Info message="Carregando..." />
  }

  const {
    title,
    user,
    created_at: createdAt,
    comments,
    html_url: url,
    body,
  } = publication

  const postInfo: PostInfoProps = {
    title,
    user: user?.login,
    createdAt,
    comments,
    url,
  }

  return (
    <>
      {!isLoading && (
        <>
          <PostInfo {...postInfo} />
          <DetailContainer>
            <Markdown
              components={{
                code: CodeBlock,
              }}
            >
              {body}
            </Markdown>
          </DetailContainer>
        </>
      )}
    </>
  )
}
