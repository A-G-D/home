import { useLocation } from '@redwoodjs/router'
import { useEffect } from 'react'

export const useScrollReset = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
}
