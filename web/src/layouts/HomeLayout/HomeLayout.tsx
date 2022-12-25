import { toast, Toaster } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'

import React, { FC } from 'react'
import AuthorName from 'src/components/AuthorName'
import Links from 'src/components/Links'
import Logo from 'src/components/Logo'

import './HomeLayout.scss'

type HomeLayoutProps = {
  children?: React.ReactNode
}

const UserRibbon = ({ currentUser, onLogout }) => {
  return (
    <div className='bg-gray-400 border-2 border-gray-600 absolute top-0 right-0 rounded-b-[12px] flex flex-row gap-2 px-4 py-2'>
      <div>{currentUser.email}</div>
      <div className='bg-gray-600 self-stretch w-[2px]' />
      <div className='hover:cursor-pointer' onClick={onLogout}>
        Logout
      </div>
    </div>
  )
}

const Header = ({ isAuthenticated, currentUser, onLogout }) => {
  return (
    <header
      id='home-layout-header'
      className='sticky top-0 w-full bg-primary-600/80 px-6 py-3 flex flex-row justify-between z-10'
    >
      <Logo />
      <Links />
      {isAuthenticated && (
        <UserRibbon currentUser={currentUser} onLogout={onLogout} />
      )}
      <Toaster />
    </header>
  )
}

const Footer = () => {
  return (
    <footer className='bg-primary-600/80 px-6 py-6 flex flex-col gap-4 items-center'>
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

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const onLogout = async () => {
    const response = await logOut()
    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Logged Out!')
    }
  }

  return (
    <div className='flex-auto self-center flex flex-col h-fit min-h-full max-w-[720px] w-full'>
      <Header
        isAuthenticated={isAuthenticated}
        currentUser={currentUser}
        onLogout={onLogout}
      />
      <main className='bg-gray-200/80 flex-auto flex flex-col'>{children}</main>
      <Footer />
    </div>
  )
}

export default HomeLayout
