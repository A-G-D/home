import { useQuery } from '@redwoodjs/web'
import { useEffect, useState, useRef, MutableRefObject } from 'react'

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

export const useResizeObserver = <T extends Element>(
  onResizeHandler: ResizeObserverCallback,
  deps: React.DependencyList = []
) => {
  const ref = useRef<T>()
  useEffect(() => {
    const innerElement = ref.current as Element
    const resizeObserver = new ResizeObserver(onResizeHandler)
    resizeObserver.observe(innerElement)
    return () => resizeObserver.unobserve(innerElement)
  }, deps)
  return ref
}
