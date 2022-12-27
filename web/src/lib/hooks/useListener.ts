import { useCallback, useRef } from 'react'

type Listener<T> = (...args: any[]) => T

export const useListener = <T = void>(listener: Listener<T>) => {
  const listenerRef = useRef<Listener<T>>(listener)
  listenerRef.current = listener
  return useCallback((...args: any[]) => listenerRef.current?.(...args), [])
}
