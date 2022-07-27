import { useQuery } from '@redwoodjs/web'
import { useEffect, useState, useRef, MutableRefObject, useCallback } from 'react'

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

export const usePrev = <T>(value: T, initialValue?: T): T => {
  const ref = useRef<T>(initialValue)
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

export const useResizeObserver = <T extends Element>(
  { callback }: { callback: ResizeObserverCallback },
  ref: MutableRefObject<T>,
  deps: React.DependencyList = []
) => {
  useEffect(() => {
    const element = ref.current
    const resizeObserver = new ResizeObserver(callback)
    resizeObserver.observe(element)
    return () => resizeObserver.unobserve(element)
  }, deps)
  return ref
}

export const useEvent = <T extends Element>(
  {
    type,
    listener,
    options,
  }: {
    type: keyof HTMLElementEventMap
    listener: (this: Element, ev: Event) => any
    options?: boolean | EventListenerOptions
  },
  ref: MutableRefObject<T>,
  deps: React.DependencyList = []
) => {
  useEffect(() => {
    const element = ref.current
    element.addEventListener(type, listener, options)
    return () => {
      element.removeEventListener(type, listener, options)
    }
  }, deps)
  return ref
}

type Listener<T> = (...args: any[]) => T;

export const useListener = <T = void>(listener: Listener<T>) => {
  const listenerRef = useRef<Listener<T>>(listener);
  listenerRef.current = listener;
  return useCallback((...args: any[]) => listenerRef.current?.(...args), []);
};
