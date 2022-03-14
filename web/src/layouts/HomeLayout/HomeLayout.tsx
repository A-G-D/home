import { Link, NavLink, routes } from '@redwoodjs/router'
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { RiCloseFill } from 'react-icons/ri'
import { SiGmail } from 'react-icons/si'

import React from 'react'
import Modal from 'react-modal'
import Tippy from '@tippyjs/react'

import 'tippy.js/animations/shift-away.css'
import './HomeLayout.scss'
import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextAreaField,
  TextField,
  useForm,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'

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

const ContactForm = ({ onClose, ...props }) => {
  const formsMethod = useForm({ mode: 'onBlur' })
  const [createContact, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for reaching out!')
      formsMethod.reset()
    },
  })
  const submitForm = (fields) => {
    createContact({ variables: { input: fields } })
  }

  return (
    <Modal
      className='bg-violet-600 flex flex-col rounded-[8px] w-[720px] h-[50%] m-auto'
      style={{
        overlay: {
          display: 'flex',
          justifyContents: 'center',
          alignItems: 'center',
          overflowY: 'scroll',
        },
      }}
      {...props}
    >
      <div className='flex flex-row justify-between px-4 py-3'>
        <div className='w-[16px]' />
        <div className='flex-auto text-center'>What Can I Help You With?</div>
        <div className='w-[16px] flex flex-row justify-end items-center'>
          <RiCloseFill className='hover:cursor-pointer' onClick={onClose} />
        </div>
      </div>
      <Toaster />
      <Form
        className='flex flex-col flex-auto px-4 py-3'
        onSubmit={submitForm}
        error={error}
        formMethods={formsMethod}
      >
        <Label name='name' errorClassName='error'>
          Name
        </Label>
        <TextField
          name='name'
          validation={{
            required: false,
            pattern: {
              value: /(?:[_a-zA-Z0-9]+)(?: [_a-zA-Z0-9]+)*/,
              message: 'Please enter a valid name.',
            },
          }}
          errorClassName='error'
        />
        <FieldError name='name' className='error' />

        <Label name='email' errorClassName='error'>
          Email
        </Label>
        <TextField
          name='email'
          validation={{
            required: true,
            pattern: {
              value: /^[._a-zA-Z0-9]+@[^.]+\..+$/,
              message: 'Please enter a valid email address.',
            },
          }}
          errorClassName='error'
        />
        <FieldError name='email' className='error' />

        <Label name='message' errorClassName='error'>
          Message
        </Label>
        <TextAreaField
          className='flex-auto'
          name='message'
          validation={{ required: true }}
          errorClassName='error'
        />
        <FieldError name='message' className='error' />

        <Submit disabled={loading}>Submit</Submit>
      </Form>
    </Modal>
  )
}

const SocialLinks = () => {
  const [contactModalOpen, setContactModalOpen] = React.useState(false)
  const openContactModal = () => {
    setContactModalOpen(true)
  }
  const closeContactModal = () => {
    setContactModalOpen(false)
  }

  return (
    <div className='flex flex-row justify-evenly items-center gap-x-3'>
      <a href='https://github.com/A-G-D/'>
        <BsGithub />
      </a>
      <a href='https://www.linkedin.com/in/aloever-dulay-249226159'>
        <BsLinkedin />
      </a>
      <a href='https://twitter.com/__A_G_D__'>
        <BsTwitter />
      </a>
      <a href='https://www.instagram.com/agd.91939'>
        <BsInstagram />
      </a>
      <SiGmail className='hover:cursor-pointer' onClick={openContactModal} />
      <ContactForm isOpen={contactModalOpen} onClose={closeContactModal} />
    </div>
  )
}

const Projects = () => {
  return (
    <ul className='px-6 py-3 flex flex-col rounded-[8px]'>
      <li>
        <a href='https://a-g-d.github.io/digital-canvas/'>Digital Canvas</a>
      </li>
      <li>
        <a href='htpps://modular-ui-react.github.io/modular-ui-react'>
          Modular-UI React Framework
        </a>
      </li>
    </ul>
  )
}

const Links = () => {
  const activeNavStyle = 'border-b-indigo-900 text-fuchsia-900'
  const navStyle =
    'hover:border-b-indigo-700 hover:text-fuchsia-900 border-y-4 border-transparent flex items-center gap-2 px-[8px] py-[4px] font-bold'

  return (
    <nav className='flex items-center'>
      <ul className='flex justify-evenly items-center gap-x-3'>
        <li>
          <Tippy
            content={<Projects />}
            placement='bottom'
            interactive={true}
            arrow={false}
            animation='shift-away'
            duration={200}
            maxWidth={360}
          >
            <NavLink
              className={navStyle}
              activeClassName={activeNavStyle}
              to={routes.projects()}
            >
              Projects <MdOutlineKeyboardArrowDown />
            </NavLink>
          </Tippy>
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
    </nav>
  )
}

const Title = () => {
  return (
    <div className='hover:max-w-[512px] transition-[max-width] duration-500 max-w-[128px] overflow-hidden flex items-center gap-x-8 px-[32px] rounded-[64px] bg-violet-200'>
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

const Header = ({ isAuthenticated, currentUser, logOut }) => {
  return (
    <header className='sticky top-0 bg-violet-600/80 px-6 py-3 flex flex-row justify-between'>
      <Title />
      <Links />
      {isAuthenticated && (
        <UserRibbon currentUser={currentUser} onLogout={logOut} />
      )}
    </header>
  )
}

const Footer = () => {
  return (
    <footer className='bg-violet-600/80 px-6 py-6 flex flex-col gap-4 items-center'>
      <div className='text-sm italic'>
        Resume The background shader pattern is an edited fork from{' '}
        <a
          className='text-pink-600 font-bold'
          href='https://www.shadertoy.com/view/WldSRn'
        >
          this source
        </a>
        .
      </div>
      <div className='flex flex-col items-center font-semibold'>
        <div>Copyright © 2022 Aloever Dulay</div>
        <div>
          Made with{' '}
          <a className='text-red-600 font-bold' href='https://redwoodjs.com'>
            RedwoodJS
          </a>
          .
        </div>
      </div>
    </footer>
  )
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <Background>
      <div className='flex flex-col min-h-full w-[720px] max-w-[720px]'>
        <Header
          isAuthenticated={isAuthenticated}
          currentUser={currentUser}
          logOut={logOut}
        />
        <div className='bg-gray-200/80 flex-auto flex flex-col'>{children}</div>
        <Footer />
      </div>
    </Background>
  )
}

export default HomeLayout
