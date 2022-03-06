import { Link, routes } from '@redwoodjs/router'
import Tippy from '@tippyjs/react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaKeybase } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import './HomeLayout.scss'

type HomeLayoutProps = {
  children?: React.ReactNode
}

const Background = () => {
  return <div className=''></div>
}

const SocialLinks = () => {
  return (
    <ul className='flex flex-row justify-evenly items-center gap-x-3'>
      <li><a href='https://github.com/A-G-D/'><BsGithub/></a></li>
      <li><a href='https://www.linkedin.com/in/aloever-dulay-249226159'><BsLinkedin/></a></li>
      <li><a href='https://keybase.io/A_G_D'><FaKeybase/></a></li>
      <li><a href='mailto:aloeverdulay@gmail.com?subject=Mail from Personal PProjectsortfolio'><SiGmail/></a></li>
    </ul>
  )
}

const Projects = () => {
  return <ul className='flex flex-col bg-cyan-600'>
    <li><a href='https://a-g-d.github.io/digital-canvas/'>Digital Canvas</a></li>
    <li><a href='htpps://modular-ui-react.github.io/modular-ui-react'>Modular-UI React Framework</a></li>
  </ul>
}

const Links = () => {
  return (
    <ul className='flex flex-row justify-evenly items-center gap-x-3'>
      <li><Link to={routes.blog()}>Blog</Link></li>Projects
      <li><Tippy content={<Projects/>} placement='right' interactive={true} arrow={true}>
        {/* Create projects page */}
        <Link to={routes.projects()}>Projects</Link>
      </Tippy></li>
      <li>Resume</li>
    </ul>
  )
}

const Title = () => {
  return <div className='animate-slidemenu max-w-[128px] overflow-hidden flex gap-x-[48px] px-[32px] rounded-[64px] bg-violet-200'>
    {/* <Tippy content={<SocialLinks/>} placement='right' interactive={true} delay={20} arrow={true}> */}
      <Link to={routes.home()}>
        <img className='logo min-h-[64px] min-w-[64px]' src='https://avatars.githubusercontent.com/u/23192029?v=4' alt='AGD Logo'/>
      </Link>
      <SocialLinks/>
    {/* </Tippy> */}
  </div>
}

const Header = () => {
  return (
    <div className='bg-violet-600 px-6 py-3 flex flex-row justify-between'>
      <Title/>
      <Links/>
    </div>
  )
}

const Footer = () => {
  return <div className='bg-violet-600 px-6 py-3 flex flex-col items-center'>
    <div>Copyright © 2022 Aloever Dulay</div>
    <div>Made with <a className='text-sky-700' href='https://redwoodjs.com'>RedwoodJS</a>.</div>
  </div>
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <div className='flex flex-col h-full max-w-[720px]'>
    <Header/>
    {children}
    <Footer/>
  </div>
}

export default HomeLayout
