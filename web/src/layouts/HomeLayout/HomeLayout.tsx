import { toast } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'
import { FC, HTMLAttributes, useState } from 'react'
import classNames from 'classnames'
import { useListener, useScreenSize } from 'src/lib/hooks'
import MobileNavBarMenuModal from 'src/components/MobileNavBarMenuModal'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

export interface HomeLayoutProps extends HTMLAttributes<HTMLDivElement> {}

const HomeLayout: FC<HomeLayoutProps> = ({ children, className, ...props }) => {
  const { isMedium } = useScreenSize()
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(false)

  const onLogout = useListener(async () => {
    const response = await logOut()
    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Logged Out!')
    }
  })

  const onMobileMenuClick = useListener(() => {
    setShowMobileNavMenu(true)
  })

  const onMobileNavBarMenuClose = useListener(() => {
    setShowMobileNavMenu(false)
  })

  return (
    <div
      className={classNames(
        'flex-auto self-center flex flex-col h-fit min-h-full max-w-[768px] w-full',
        className
      )}
      {...props}
    >
      <Header
        isAuthenticated={isAuthenticated}
        currentUser={currentUser}
        onLogout={onLogout}
        onMobileMenuClick={onMobileMenuClick}
      />
      <main className='bg-gray-200/80 flex-auto flex flex-col'>{children}</main>
      <Footer />
      {!isMedium && (
        <MobileNavBarMenuModal
          isOpen={showMobileNavMenu}
          onClose={onMobileNavBarMenuClose}
        />
      )}
    </div>
  )
}

export default HomeLayout
