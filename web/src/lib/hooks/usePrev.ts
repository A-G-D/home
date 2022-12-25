import { useEffect, useRef } from 'react'

export const usePrev = <T>(value: T, initialValue?: T): T => {
  const ref = useRef<T>(initialValue)
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}
