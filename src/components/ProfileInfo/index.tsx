import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import {
  ContactInfoContainer,
  NameLinkContainer,
  ProfileContentContainer,
  ProfileInfoContainer,
} from './styles'
import { api } from '../../lib/api'
import { ExternalLink } from '../ExternalLink'

interface Profile {
  avatar_url: string
  bio: null
  blog: string
  company: null
  created_at: Date
  email: null
  events_url: string
  followers: number
  followers_url: string
  following: number
  following_url: string
  gists_url: string
  gravatar_id: string
  hireable: null
  html_url: string
  id: number
  location: null
  login: string
  name: string
  node_id: string
  organizations_url: string
  public_gists: number
  public_repos: number
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_url: string
  subscriptions_url: string
  twitter_username: null
  type: string
  updated_at: Date
  url: string
}

export function ProfileInfo() {
  const [profile, setProfile] = useState<Profile>({} as Profile)

  async function getGithubProfile() {
    const response = await api.get('users/filipeferibeiro')

    setProfile(response.data)
  }

  useEffect(() => {
    getGithubProfile()
  }, [])

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
