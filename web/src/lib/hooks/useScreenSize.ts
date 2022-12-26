import { useMediaQuery } from 'react-responsive'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'config/tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

export const useScreenSize = () => {
  const screens = fullConfig.theme?.screens! as { [index: string]: string }
  const isSmall = useMediaQuery({ query: `(min-width: ${screens.sm})` })
  const isMedium = useMediaQuery({ query: `(min-width: ${screens.md})` })
  const isLarge = useMediaQuery({ query: `(min-width: ${screens.lg})` })

  return { isSmall, isMedium, isLarge }
}
