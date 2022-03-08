import { Link, routes } from '@redwoodjs/router'
import Tippy from '@tippyjs/react'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { RiCloseFill } from 'react-icons/ri'
import { FaKeybase } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

import React from 'react'
import Modal from 'react-modal'

import './HomeLayout.scss'
import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'

// const FRAME_RATE = 10

// window.onload = () => {
//   const background: HTMLDivElement = document.querySelector('#background')
//   const canvas: HTMLCanvasElement = document.querySelector('#background-canvas')
//   const canvasContext = canvas.getContext('2d')

//   canvasContext.imageSmoothingEnabled = true

//   let time = 0
//   setInterval(drawBackgroundImage, 1000 / FRAME_RATE)

//   function drawBackgroundImage() {
//     canvas.width = background.clientWidth / 2
//     canvas.height = background.clientHeight / 2
//     const imgData = canvasContext.getImageData(
//       0,
//       0,
//       canvas.width,
//       canvas.height
//     )
//     const data = imgData.data
//     const width = imgData.width
//     const height = imgData.height
//     const min = Math.max(1, Math.min(width, height))
//     const maxX = width / min
//     const maxY = height / min

//     for (let i = 0; i < data.length; i += 4) {
//       const r = data[i + 0]
//       const g = data[i + 1]
//       const b = data[i + 2]
//       const a = data[i + 3]
//       const index = i / 4
//       const y = Math.floor(index / width)
//       const x = index - y * width
//       const ny = y / (min - 1) - 0.5 * maxY
//       const nx = x / (min - 1) - 0.5 * maxX
//       const color = onBackgroundPeriod(
//         [r, g, b, a],
//         [nx, ny, time],
//         [maxX, maxY]
//       )
//       data[i + 0] = color[0]
//       data[i + 1] = color[1]
//       data[i + 2] = color[2]
//       data[i + 3] = color[3]
//     }

//     console.log(maxX, maxY)
//     canvasContext.putImageData(imgData, 0, 0)
//     background.style.backgroundImage = `url(${canvas.toDataURL()})`
//     time += 1 / FRAME_RATE
//   }

//   function onBackgroundPeriod(colors, [x, y, time], [maxX, maxY]) {
//     // Shader pattern copied from https://www.shadertoy.com/view/NdKXzw then
//     // translated to JavaScript.

//     const clamp = (value, min, max) => Math.max(Math.min(value, max), min)
//     const length = (vx, vy) => Math.sqrt(vx * vx + vy * vy)
//     const mix = (lo, hi, value) => lo * (1 - value) + hi * a
//     const smoothstep = (lo, hi, value) => {
//       let t = clamp((value - lo) / (hi - lo), 0, 1)
//       return t * t * (3 - 2 * t)
//     }

//     const MIN_DIAM = 0.5
//     const MAX_DIAM = 0.8

//     // let uvx = x - 0.5 * maxX
//     // let uvy = y - 0.5 * maxY
//     let uvx = x
//     let uvy = y
//     const a = Math.PI / 4
//     const c = Math.cos(a)
//     const s = Math.sin(a)

//     const mat = [c, -s, s, c]
//     const nuvx = mat[0] * uvx + mat[2] * uvy
//     const nuvy = mat[1] * uvx + mat[3] * uvy
//     uvx = 8 * nuvx
//     uvy = 8 * nuvy

//     const gvx = uvx % 1
//     const gvy = uvy % 1
//     const idx = Math.floor(uvx)
//     const idy = Math.floor(uvy)
//     let m = 0

//     const nd = 1

//     for (let i = -nd; i <= nd; ++i) {
//       for (let j = -nd; j <= nd; ++j) {
//         const d = length(gvx - i, gvy - j)
//         const dist = length(idx + i, idy + j)
//         const truc = Math.sin(dist - 7 * time) * 0.5 + 0.5

//         let rx = mix(MIN_DIAM, MAX_DIAM, truc)
//         let ry = rx - 0.00009

//         m += smoothstep(rx, ry, d) * 0.3
//       }
//     }

//     // return rgba as array
//     return [
//       0xff * (m + 0.4),
//       0xff * (m * 0.6 + 0.6),
//       0xff * (m * 0.5 + 0.4),
//       0xff,
//     ]
//     // return [0, 0xff * (x + maxX * 0.5 + 0.1), 0xff * (y + maxY * 0.5 + 0.1), 0xff]
//   }
// }

type HomeLayoutProps = {
  children?: React.ReactNode
}

// const BackgroundCanvas = () => {
//   return <canvas id='background-canvas' className='hidden' />
// }

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

const SocialLinks = () => {
  const [contactModalOpen, setContactModalOpen] = React.useState(false)
  const openContactModal = () => {
    setContactModalOpen(true)
  }
  const closeContactModal = () => {
    setContactModalOpen(false)
  }
  const submitForm = ({ name, email, message }) => {
    console.log({ name, email, message })
    closeContactModal()
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
        <a href='https://keybase.io/A_G_D'>
          <FaKeybase />
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/agd.91939'>
          <BsInstagram />
        </a>
      </li>
      <li>
        {/* <a href='mailto:aloeverdulay@gmail.com?subject=Mail from Personal Portfolio'> */}
        <SiGmail className='hover:cursor-pointer' onClick={openContactModal} />
        <Modal
          className='bg-violet-600 flex flex-col rounded-[8px] w-[720px] h-[50%] m-auto'
          isOpen={contactModalOpen}
          style={{
            overlay: {
              display: 'flex',
              justifyContents: 'center',
              alignItems: 'center',
            },
          }}
        >
          <ul className='flex flex-row justify-between px-4 py-3'>
            <li className='w-[16px]' />
            <li className='flex-auto text-center'>What Can I Help You With?</li>
            <li className='w-[16px] flex flex-row justify-end items-center'>
              <RiCloseFill
                className='hover:cursor-pointer'
                onClick={closeContactModal}
              />
            </li>
          </ul>
          <Form
            className='flex flex-col flex-auto px-4 py-3'
            onSubmit={submitForm}
            config={{ mode: 'onBlur' }}
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

            <Submit>Submit</Submit>
          </Form>
        </Modal>
        {/* </a> */}
      </li>
    </ul>
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
        <Link to={routes.resume()}>Resume</Link>
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
