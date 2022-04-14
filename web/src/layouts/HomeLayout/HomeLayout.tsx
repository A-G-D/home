import { Link, NavLink, Route, routes } from '@redwoodjs/router'
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { SiGmail } from 'react-icons/si'

import { useForm } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'

import React from 'react'
import Modal from 'react-modal'
import Tippy from '@tippyjs/react'
import AuthorName from 'src/components/AuthorName'
import ContactForm from 'src/forms/ContactForm'

import 'tippy.js/animations/shift-away.css'
import './HomeLayout.scss'

type HomeLayoutProps = {
  children?: React.ReactNode
}

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput) {
    createContact(input: $input) {
      id
    }
  }
`

const Background = ({ children }) => {
  return (
    <div
      id='background'
      className='bg-cover bg-no-repeat h-full flex-auto flex flex-row justify-center overflow-auto'
    >
      {children}
    </div>
  )
}

const ContactFormModal = ({ onClose, ...props }) => {
  const formMethods = useForm({ mode: 'onBlur' })
  const [createContact, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for reaching out!')
      formMethods.reset()
    },
  })
  const onSubmit = (input) => {
    createContact({ variables: { input } })
  }

  return (
    <Modal
      className='max-w-full m-auto z-[101]'
      style={{
        overlay: {
          maxWidth: '100%',
          display: 'flex',
          justifyContents: 'center',
          alignItems: 'center',
          overflowY: 'scroll',
          zIndex: '100',
        },
      }}
      {...props}
    >
      <ContactForm
        error={error}
        loading={loading}
        formMethods={formMethods}
        onClose={onClose}
        onSubmit={onSubmit}
      />
    </Modal>
  )
}

const SocialLinks = () => {
  const logo: HTMLElement = document.querySelector('#agd-logo')
  const [contactModalOpen, setContactModalOpen] = React.useState(false)
  const openContactModal = () => {
    setContactModalOpen(true)
  }
  const closeContactModal = (e) => {
    setContactModalOpen(false)
    setTimeout(() => {
      logo.blur()
    }, 0)
  }

  return (
    <ul className='flex flex-row justify-evenly items-center gap-x-3'>
      <li>
        <a href='https://github.com/A-G-D/'>
          <BsGithub />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/aloever-dulay-249226159'>
          <BsLinkedin />
        </a>
      </li>
      <li>
        <a href='https://twitter.com/__A_G_D__'>
          <BsTwitter />
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/agd.91939'>
          <BsInstagram />
        </a>
      </li>
      <li>
        <SiGmail className='hover:cursor-pointer' onClick={openContactModal} />
      </li>
      <ContactFormModal isOpen={contactModalOpen} onClose={closeContactModal} />
    </ul>
  )
}

const Portfolio = () => {
  const itemClassName =
    'hover:bg-violet-600 text-gray-300 hover:text-white text-sm font-medium flex-auto px-4 py-2'
  return (
    <div className='bg-purple-700 flex flex-col rounded-[4px]'>
      <div className='text-gray-300 font-medium px-2 py-2'>Exercises</div>
      <ul className='bg-indigo-900 flex flex-col py-1'>
        <li className='flex'>
          <a
            className={itemClassName}
            href='https://a-g-d.github.io/TOP-etch-a-sketch/'
          >
            Pixel Art Creator
          </a>
        </li>
        <li className='flex'>
          <a
            className={itemClassName}
            href='htpps://a-g-d.github.io/TOP-rock-paper-scissors/'
          >
            Rock, Paper, Scissors
          </a>
        </li>
        <li className='flex'>
          <a
            className={itemClassName}
            href='htpps://a-g-d.github.io/TOP-landing-page/'
          >
            Static Landing Page
          </a>
        </li>
      </ul>
      <div className='text-gray-300 px-2 py-2'>Projects</div>
      <ul className='bg-indigo-900 flex flex-col py-1'>
        <li className='flex'>
          <div className='text-gray-300 text-sm font-medium flex-auto px-4 py-2'>
            {'(No Projects Listed Yet)'}
          </div>
        </li>
      </ul>
    </div>
  )
}

const Links = () => {
  const activeNavStyle = 'border-b-indigo-900 text-fuchsia-900'
  const navStyle =
    'hover:border-b-indigo-700 hover:text-fuchsia-900 border-y-4 border-transparent text-white flex items-center gap-2 px-[8px] py-[4px] font-bold'

  const portfolioDropdownRef = React.useRef()

  return (
    <nav className='flex items-center'>
      <ul className='flex justify-evenly items-center gap-x-3'>
        <li>
          <div className='flex items-center'>
            <NavLink
              className={navStyle}
              activeClassName={activeNavStyle}
              to={routes.projects()}
            >
              Portfolio
            </NavLink>
            <span
              ref={portfolioDropdownRef}
              className='bg-violet-800 hover:bg-purple-700 rounded-md'
            >
              <MdOutlineKeyboardArrowDown />
            </span>
          </div>
        </li>
        <li>
          <NavLink
            className={navStyle}
            activeClassName={activeNavStyle}
            to={routes.blog()}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className={navStyle}
            activeClassName={activeNavStyle}
            to={routes.resume()}
            target='_blank'
            rel='noopener noreferrer'
          >
            Resume
          </NavLink>
        </li>
      </ul>
      <Tippy
        reference={portfolioDropdownRef}
        content={<Portfolio />}
        placement='bottom'
        interactive={true}
        arrow={false}
        animation='shift-away'
        duration={200}
        maxWidth={360}
      />
    </nav>
  )
}

const Logo = () => {
  return (
    <div
      id='agd-logo'
      className='focus:max-w-[512px] hover:max-w-[512px] transition-[max-width] duration-500 max-w-[128px] overflow-hidden flex items-center gap-x-8 px-[32px] rounded-full bg-violet-200'
      tabIndex={-1}
    >
      <Link to={routes.home()}>
        <img
          className='logo min-h-[64px] min-w-[64px]'
          src='https://avatars.githubusercontent.com/u/23192029?v=4'
          alt='AGD Logo'
        />
      </Link>
      <SocialLinks />
    </div>
  )
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
      className='sticky top-0 w-full bg-violet-600/80 px-6 py-3 flex flex-row justify-between z-10'
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
    <footer className='bg-violet-600/80 px-6 py-6 flex flex-col gap-4 items-center'>
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

const HomeLayout = ({ children }: HomeLayoutProps): JSX.Element => {
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
    <Background>
      <div className='flex flex-col h-fit min-h-full w-[720px] max-w-[720px]'>
        <Header
          isAuthenticated={isAuthenticated}
          currentUser={currentUser}
          onLogout={onLogout}
        />
        <main className='bg-gray-200/80 flex-auto flex flex-col'>
          {children}
        </main>
        <Footer />
      </div>
    </Background>
  )
}

export default HomeLayout
