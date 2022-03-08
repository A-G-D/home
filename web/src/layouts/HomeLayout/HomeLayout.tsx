import { Link, routes } from '@redwoodjs/router'
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs'
import { RiCloseFill } from 'react-icons/ri'
import { SiGmail } from 'react-icons/si'

import React from 'react'
import Modal from 'react-modal'
import Tippy from '@tippyjs/react'

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
    <ul className='flex flex-col bg-cyan-600'>
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

const LinkItem = ({ children }) => {
  return (
    <li className='hover:bg-gray-200 px-[8px] py-[4px] rounded-[11px]'>
      {children}
    </li>
  )
}

const Links = () => {
  return (
    <ul className='flex flex-row justify-evenly items-center gap-x-3'>
      <LinkItem>
        <Tippy
          content={<Projects />}
          placement='bottom'
          interactive={true}
          arrow={true}
        >
          {/* Create projects page */}
          <Link to={routes.projects()}>Projects</Link>
        </Tippy>
      </LinkItem>
      <LinkItem>
        <Link to={routes.blog()}>Blog</Link>
      </LinkItem>
      <LinkItem>
        <Link to={routes.resume()} target='_blank' rel='noopener noreferrer'>
          Resume
        </Link>
      </LinkItem>
    </ul>
  )
}

const Title = () => {
  return (
    <div className='animate-slidemenu max-w-[128px] overflow-hidden flex gap-x-[48px] px-[32px] rounded-[64px] bg-violet-200'>
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

const Header = () => {
  return (
    <div className='bg-violet-600 px-6 py-3 flex flex-row justify-between'>
      <Title />
      <Links />
    </div>
  )
}

const Footer = () => {
  return (
    <div className='bg-violet-600 px-6 py-3 flex flex-col items-center'>
      <div>Copyright © 2022 Aloever Dulay</div>
      <div>
        Made with{' '}
        <a className='text-sky-700' href='https://redwoodjs.com'>
          RedwoodJS
        </a>
        .
      </div>
    </div>
  )
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <Background>
        <div className='flex flex-col h-full max-w-[720px]'>
          <Header />
          <div className='bg-gray-200 flex-auto'>{children}</div>
          <Footer />
        </div>
      </Background>
      {/* <BackgroundCanvas /> */}
    </>
  )
}

export default HomeLayout
