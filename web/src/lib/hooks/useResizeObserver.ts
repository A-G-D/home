import { MutableRefObject, useEffect } from 'react'

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
