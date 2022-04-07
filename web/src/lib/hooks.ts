import { useQuery } from '@redwoodjs/web'
import { useEffect, useState } from 'react'

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

export const useRerender = () => {
  const [value, setValue] = useState(0)
  return () => {
    setValue((v) => v + 1)
  }
}
