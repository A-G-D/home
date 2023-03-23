import { toast } from '@redwoodjs/web/dist/toast'
import { FC, ReactNode, useEffect, useState } from 'react'
import { useAuth } from 'src/auth'
import Background from 'src/components/Background'
import { useListener } from 'src/lib/hooks'
import UserRibbon from 'src/components/UserRibbon'

type MainLayoutProps = {
  children?: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const [scrollYOffset, setScrollYOffset] = useState(0)

  const onLogout = useListener(async () => {
    try {
      await logOut()
      toast.success('Logged Out!')
    } catch (e) {
      toast.error(`${e}`)
    }
  })

  useEffect(() => {
    const container = document.querySelector('#redwood-app')
    const onScroll = () => setScrollYOffset(container.scrollTop)
    container.addEventListener('scroll', onScroll)
    return () => container.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Background
      id='main-layout'
      className='h-fit min-h-full'
      resolutionFactor={1 / 2}
    >
      <>
        {isAuthenticated && (
          <UserRibbon
            className='absolute z-[1000] self-end mr-4 w-fit'
            currentUser={currentUser}
            onLogout={onLogout}
            style={{ top: scrollYOffset }}
          />
        )}
        {children}
      </>
    </Background>
  )
}

export default MainLayout
