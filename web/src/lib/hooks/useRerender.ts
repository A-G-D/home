import { useState } from 'react'

export const useRerender = () => {
  const [, setValue] = useState(0)
  return () => {
    setValue((v) => v + 1)
  }
}
