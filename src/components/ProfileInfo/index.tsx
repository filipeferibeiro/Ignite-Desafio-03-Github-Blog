import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import {
  ContactInfoContainer,
  NameLinkContainer,
  ProfileContentContainer,
  ProfileInfoContainer,
} from './styles'
import { ExternalLink } from '../ExternalLink'
import { useCallApi } from '../../hooks/useCallApi'
import { Info } from '../Info'

interface Profile {
  avatar_url: string
  bio: null
  company: null
  followers: number
  html_url: string
  login: string
  name: string
}

export function ProfileInfo() {
  const {
    data: profile,
    isLoading,
    error,
  } = useCallApi<Profile>('users/filipeferibeiro')

  if (error) {
    return <Info home message="Ocorreu um erro ao buscar os dados." />
  }

  if (isLoading || !profile) {
    return <Info home message="Carregando..." />
  }

  return (
    <ProfileInfoContainer>
      <img src={profile.avatar_url} alt="" />
      <ProfileContentContainer>
        <NameLinkContainer>
          <h1>{profile.name}</h1>
          <ExternalLink href={profile.html_url} text="Github" />
        </NameLinkContainer>
        <h4>{profile.bio || 'Sem bio'}</h4>

        <ContactInfoContainer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {profile.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            {profile.company || 'Sem Empresa'}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {profile.followers} seguidores
          </span>
        </ContactInfoContainer>
      </ProfileContentContainer>
    </ProfileInfoContainer>
  )
}
