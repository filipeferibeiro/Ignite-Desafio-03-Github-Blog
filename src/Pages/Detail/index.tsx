import { PostInfo, PostInfoProps } from '../../components/PostInfo'
import { DetailContainer } from './styles'
import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import { CodeBlock } from './components/CodeBlock'
import { Info } from '../../components/Info'
import { useCallApi } from '../../hooks/useCallApi'

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
  const { id } = useParams<{ id: string }>()
  const {
    data: publication,
    isLoading,
    error,
  } = useCallApi<Publication>(
    `repos/filipeferibeiro/Ignite-Desafio-03-Github-Blog/issues/${id}`,
  )

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
