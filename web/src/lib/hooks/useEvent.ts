import { MutableRefObject, useEffect } from 'react'

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
