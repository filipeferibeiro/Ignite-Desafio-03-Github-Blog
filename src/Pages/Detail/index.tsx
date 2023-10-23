import { useCallback, useEffect, useState } from 'react'
import { PostInfo, PostInfoProps } from '../../components/PostInfo'
import { DetailContainer } from './styles'
import { api } from '../../lib/api'
import { useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Markdown from 'react-markdown'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

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
  const [publication, setPublication] = useState<Publication>({} as Publication)
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  const getGithubPublication = useCallback(async () => {
    setIsLoading(true)

    const response = await api.get(
      `repos/filipeferibeiro/Ignite-Desafio-03-Github-Blog/issues/${id}`,
    )

    setPublication(response.data)
    setIsLoading(false)
  }, [id])

  const postInfo: PostInfoProps = {
    title: publication.title,
    user: publication.user?.login,
    createdAt: publication.created_at,
    comments: publication.comments,
    url: publication.html_url,
  }

  useEffect(() => {
    getGithubPublication()
  }, [getGithubPublication])
  return (
    <>
      {!isLoading && (
        <>
          <PostInfo
            title={postInfo.title}
            user={postInfo.user}
            createdAt={postInfo.createdAt}
            comments={postInfo.comments}
            url={postInfo.url}
          />
          <DetailContainer>
            <Markdown
              components={{
                code({ children, className, ...rest }) {
                  const match = /language-(\w+)/.exec(className || '')
                  console.log(match)
                  return match ? (
                    <SyntaxHighlighter
                      style={dracula}
                      language={match[1]}
                      PreTag="div"
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  )
                },
              }}
            >
              {publication.body}
            </Markdown>
          </DetailContainer>
        </>
      )}
    </>
  )
}
