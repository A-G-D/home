import { toast, Toaster } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'

import { FC, HTMLAttributes, useState } from 'react'
import AuthorName from 'src/components/AuthorName'
import Links from 'src/components/Links'
import Logo from 'src/components/Logo'

import { useListener, useScreenSize } from 'src/lib/hooks'
import classNames from 'classnames'
import MobileNavBarMenu from 'src/components/MobileNavBarMenu'
import { MdMenu } from 'react-icons/md'
import Component, { ComponentProps } from 'src/components/base/Component'
import MobileNavBarMenuModal from 'src/components/MobileNavBarMenuModal/MobileNavBarMenuModal'

interface UserRibbonProps extends ComponentProps {
  currentUser: any
  onLogout: () => void
}

const UserRibbon: FC<UserRibbonProps> = ({
  currentUser,
  onLogout,
  className,
  ...props
}) => {
  return (
    <Component
      className={classNames(
        'bg-gray-400 border-2 border-gray-600 absolute top-0 right-0 rounded-b-[12px] flex flex-row gap-2 px-4 py-2',
        className
      )}
      {...props}
    >
      <div>{currentUser.email}</div>
      <div className='bg-gray-600 self-stretch w-[2px]' />
      <div className='hover:cursor-pointer' onClick={onLogout}>
        Logout
      </div>
    </Component>
  )
}

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  isAuthenticated: boolean
  currentUser: any
  onLogout: () => void
  onMobileMenuClick: () => void
}

const Header: FC<HeaderProps> = ({
  isAuthenticated,
  currentUser,
  onLogout,
  onMobileMenuClick,
  className,
  ...props
}) => {
  const { isMedium } = useScreenSize()

  return (
    <header
      id='home-layout-header'
      className={classNames(
        'sticky top-0 w-full bg-primary-600/80 px-6 py-3 flex flex-row justify-between z-10',
        className
      )}
      {...props}
    >
      <Logo />
      {isMedium ? (
        <Links />
      ) : (
        <button className='p-2' onClick={onMobileMenuClick}>
          <MdMenu className='text-4xl text-primary-100' />
        </button>
      )}
      {isAuthenticated && (
        <UserRibbon currentUser={currentUser} onLogout={onLogout} />
      )}
      <Toaster />
    </header>
  )
}

interface FooterProps extends HTMLAttributes<HTMLElement> {}

const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer
      className={classNames(
        'bg-primary-600/80 px-6 py-6 flex flex-col gap-4 items-center',
        className
      )}
      {...props}
    >
      <div className='text-sm italic'>
        The background shader pattern is an edited fork from{' '}
        <a
          className='text-link font-bold'
          href='https://www.shadertoy.com/view/WldSRn'
        >
          this source
        </a>
        .
      </div>
      <div className='flex flex-col items-center font-semibold'>
        <div>
          Copyright © 2022 <AuthorName className='ml-1 text-lg' />
        </div>
        <div>
          Made with{' '}
          <a className='text-link font-bold' href='https://redwoodjs.com'>
            RedwoodJS
          </a>
          .
        </div>
      </div>
    </footer>
  )
}

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
        'flex-auto self-center flex flex-col h-fit min-h-full max-w-[720px] w-full',
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
