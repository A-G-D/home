import { MetaTags } from '@redwoodjs/web'
import { HTMLAttributes } from 'react'

const AboutMe = () => {
  const aboutMeText = `I love turning visual ideas into reality. I value quality, simplicity, and efficiency. I'm a proponent of both adherence to standards as well as in novelty and innovation. In the past, I've had experience in software development, game modding, and CAD programming. My quest for growth and learning is never-ending. I'm also an aspiring Full-stack Web Developer.`
  return (
    <div className='bg-gray-200 px-6 py-6 flex flex-col gap-4 rounded-[8px]'>
      <div>
        <div className='text-2xl text-bold text-center'>
          HI! I'm Aloever Dulay
        </div>
        <div className='text-xl text-center'>
          a <span className='font-semibold'>Frontend Web Developer</span>.
        </div>
      </div>
      <div className='text-lg text-center'>{aboutMeText}</div>
    </div>
  )
}

interface LinkImagePropTypes extends HTMLAttributes<HTMLLinkElement> {
  className?: string
  href?: string
  src: string
  alt: string
}

const LinkImage = ({
  className,
  href,
  src,
  alt,
}: LinkImagePropTypes): JSX.Element => {
  return (
    (!!href && (
      <a className={className} href={href}>
        <img src={src} alt={alt} />
      </a>
    )) || <img className={className} src={src} alt={alt} />
  )
}

const TechStack = () => {
  return (
    <div className='bg-gray-200 py-6 flex flex-col gap-8 rounded-[8px]'>
      <h1 className='text-center font-semibold'>Technologies</h1>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-row justify-center gap-8'>
          <LinkImage
            className='w-[64px] h-[64px]'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/130px-HTML5_logo_and_wordmark.svg.png'
            alt='HTML5'
          />
          <LinkImage
            className='w-[64px] h-[64px]'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png'
            alt='CSS3'
          />
          <LinkImage
            className='w-[64px] h-[64px]'
            src='https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png'
            alt='Javascript'
          />
          <LinkImage
            className='w-[64px] h-[64px]'
            src='https://github.com/microsoft/TypeScript-Website/blob/v2/packages/typescriptlang-org/static/icons/ts-logo-512.png?raw=true'
            alt='Typescript'
          />
        </div>
        <div className='flex flex-row justify-center gap-4'>
          <LinkImage
            className='w-[32px] h-[32px]'
            href='https://reactjs.org'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png'
            alt='ReactJS'
          />
          <LinkImage
            className='w-[32px] h-[32px]'
            href='https://storybook.js.org'
            src='https://avatars.githubusercontent.com/u/22632046?s=200&v=4'
            alt='StorybookJS'
          />
          <LinkImage
            className='w-[32px] h-[32px]'
            href='https://redwoodjs.com'
            src='https://avatars.githubusercontent.com/u/45050444?s=200&v=4'
            alt='RedwoodJS'
          />
          <LinkImage
            className='w-[32px] h-[32px]'
            href='https://jestjs.io'
            src='https://github.com/facebook/jest/blob/main/website/static/img/favicon/favicon-32x32.png?raw=true'
            alt='Jest'
          />
        </div>
      </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className='px-6 py-12 flex-auto flex flex-col gap-16'>
      <AboutMe />
      <TechStack />
    </div>
  )
}

const HomePage = () => {
  return (
    <>
      <MetaTags title='Home' description='Home page' />
      <Body />
    </>
  )
}

export default HomePage
