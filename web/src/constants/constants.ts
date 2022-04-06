import { useQuery } from '@redwoodjs/web'

export const useSettings = () => {
  const QUERY = gql`
    query SettingsQuery {
      settings {
        id
        status
      }
    }
  `
  const queryResult = useQuery(QUERY)
  const result = { ...queryResult, settings: queryResult.data?.settings }
  delete result.data
  return result
}

export const SiteStatus = {
  UP: 0,
  DOWN: 1,
  UPGRADE: 2,
  MAINTENANCE: 3,
  CONSTRUCTION: 4,
}

export const Author = {
  LOGO: 'https://a_g_d.keybase.pub/Pictures/logo.png',
  FIRST_NAME: 'Aloever',
  LAST_NAME: 'Dulay',
  FULL_NAME: 'Aloever G. Dulay',
  PSEUDONYM: 'AGD',
  INITIALS: 'A-G-D',
}
