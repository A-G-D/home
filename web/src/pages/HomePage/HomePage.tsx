import { MetaTags } from '@redwoodjs/web'
import { HTMLAttributes } from 'react'

import Tippy, { useSingleton } from '@tippyjs/react'
import { roundArrow } from 'tippy.js'

import 'tippy.js/dist/tippy.css'
import './HomePage.scss'

const AboutMe = () => {
  return (
    <div className='bg-gray-200 px-8 py-8 flex flex-col gap-4 rounded-[8px]'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl text-center'>
          HI! I'm <span className='font-bold'>Aloever Dulay</span>
        </h1>
        <h2 className='text-2xl text-center'>
          a <span className='font-bold'>Front End Web Developer</span>.
        </h2>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-lg text-center'>
          I love turning visual ideas into reality. I value quality, simplicity,
          and efficiency. I'm a proponent of both adherence to standards as well
          as in novelty and innovation.
        </p>
        <p className='text-lg text-center'>
          In the past, I've had experience in software development, game
          modding, and CAD programming. My quest for growth and learning is
          never-ending.
        </p>
        <p className='text-lg text-center'>
          One day, I will become Full Stack Web Developer.
        </p>
      </div>
    </div>
  )
}

interface LinkImagePropTypes extends HTMLAttributes<HTMLLinkElement> {
  className?: string
  href?: string
  src: string
  alt: string
}

const LinkImage = React.forwardRef(
  (
    { className, href, src, alt }: LinkImagePropTypes,
    ref: React.RefObject<HTMLAnchorElement & HTMLImageElement>
  ): JSX.Element => {
    return (
      (!!href && (
        <a ref={ref} className={className} href={href}>
          <img src={src} alt={alt} />
        </a>
      )) || <img ref={ref} className={className} src={src} alt={alt} />
    )
  }
)

const TechTip = ({ children }) => {
  return <div className='bg-violet-400 px-2 py-1 rounded-[4px]'>{children}</div>
}

const TechStack = () => {
  const [source, target] = useSingleton()

  return (
    <div className='bg-gray-200 px-8 py-8 flex flex-col gap-12 rounded-[8px]'>
      <h1 className='text-center font-semibold'>Technologies</h1>
      <div className='flex flex-col gap-12'>
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
          <LinkImage
            className='w-[64px] h-[64px]'
            src='https://avatars.githubusercontent.com/u/18133?s=200&v=4'
            alt='Git'
          />
        </div>
        <div className='flex flex-row justify-center gap-4'>
          <Tippy
            // className='bg-violet-400'
            singleton={source}
            duration={100}
            placement='top'
            arrow={true}
          />
          <Tippy singleton={target} content={<TechTip>ReactJS</TechTip>}>
            <LinkImage
              className='w-[32px] h-[32px]'
              href='https://reactjs.org'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png'
              alt='ReactJS'
            />
          </Tippy>
          <Tippy singleton={target} content={<TechTip>StorybookJS</TechTip>}>
            <LinkImage
              className='w-[32px] h-[32px]'
              href='https://storybook.js.org'
              src='https://avatars.githubusercontent.com/u/22632046?s=200&v=4'
              alt='StorybookJS'
            />
          </Tippy>
          <Tippy singleton={target} content={<TechTip>Jest</TechTip>}>
            <LinkImage
              className='w-[32px] h-[32px]'
              href='https://jestjs.io'
              src='https://github.com/facebook/jest/blob/main/website/static/img/favicon/favicon-32x32.png?raw=true'
              alt='Jest'
            />
          </Tippy>
          <Tippy singleton={target} content={<TechTip>RedwoodJS</TechTip>}>
            <LinkImage
              className='w-[32px] h-[32px]'
              href='https://redwoodjs.com'
              src='https://avatars.githubusercontent.com/u/45050444?s=200&v=4'
              alt='RedwoodJS'
            />
          </Tippy>
          <Tippy singleton={target} content={<TechTip>Sass</TechTip>}>
            <LinkImage
              className='w-[32px] h-[32px]'
              href='https://sass-lang.com'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/220px-Sass_Logo_Color.svg.png'
              alt='Sass'
            />
          </Tippy>
          <Tippy singleton={target} content={<TechTip>Less</TechTip>}>
            <LinkImage
              className='w-[32px] h-[32px]'
              href='https://lesscss.org'
              src='https://lesscss.org/public/img/less_logo.png'
              alt='Less'
            />
          </Tippy>
          <Tippy singleton={target} content={<TechTip>GitHub</TechTip>}>
            <LinkImage
              className='w-[32px] h-[32px]'
              href='https://github.com'
              src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
              alt='GitHub'
            />
          </Tippy>
        </div>
      </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className='px-6 py-24 flex-auto flex flex-col gap-24'>
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
