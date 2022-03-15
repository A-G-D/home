import { MetaTags } from '@redwoodjs/web'
import { HTMLAttributes } from 'react'

import { BiLinkExternal } from 'react-icons/bi'
import Tippy, { useSingleton } from '@tippyjs/react'

import 'tippy.js/dist/tippy.css'
import './HomePage.scss'

const AboutMe = () => {
  return (
    <section className='bg-gray-200 px-8 py-8 flex flex-col gap-4 rounded-[8px]'>
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
          One day, I will become a Full Stack Web Developer.
        </p>
      </div>
    </section>
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

const PuffUpElement = React.forwardRef(
  (
    { children, className, ...props }: HTMLAttributes<HTMLElement>,
    ref: React.RefObject<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        ref={ref}
        className={['flex justify-center items-center', className].join(' ')}
        {...props}
      >
        {React.Children.map(children, (child: React.ReactElement) =>
          React.cloneElement(child, {
            className: [
              'hover:w-full hover:h-full transition-all',
              child.props.className,
            ].join(' '),
          })
        )}
      </div>
    )
  }
)

interface TechTipPropTypes {
  children?: React.ReactNode
  href?: string
}

const TechTip = ({ children, href }: TechTipPropTypes) => {
  return (
    <div className='flex gap-1 px-2 py-1 rounded-[4px]'>
      {children}
      {href && (
        <a href={href}>
          <BiLinkExternal />
        </a>
      )}
    </div>
  )
}

const TechStack = () => {
  return (
    <section className='bg-gray-200 px-8 py-8 flex flex-col gap-12 rounded-[8px]'>
      <h2 className='text-center font-semibold'>Technologies</h2>
      <div className='flex flex-col gap-12'>
        <ul className='flex flex-row justify-center gap-4'>
          <li>
            <Tippy
              duration={500}
              placement='top'
              arrow={false}
              hideOnClick={false}
              content={<TechTip>HTML</TechTip>}
            >
              <PuffUpElement className='w-[96px] h-[96px]'>
                <LinkImage
                  className='w-[64px] h-[64px]'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/130px-HTML5_logo_and_wordmark.svg.png'
                  alt='HTML5'
                />
              </PuffUpElement>
            </Tippy>
          </li>
          <li>
            <Tippy
              duration={500}
              placement='top'
              arrow={false}
              hideOnClick={false}
              content={<TechTip>CSS</TechTip>}
            >
              <PuffUpElement className='w-[96px] h-[96px]'>
                <LinkImage
                  className='w-[64px] h-[64px]'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png'
                  alt='CSS3'
                />
              </PuffUpElement>
            </Tippy>
          </li>
          <li>
            <Tippy
              duration={500}
              placement='top'
              arrow={false}
              hideOnClick={false}
              content={<TechTip>Javascript</TechTip>}
            >
              <PuffUpElement className='w-[96px] h-[96px]'>
                <LinkImage
                  className='w-[64px] h-[64px]'
                  src='https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png'
                  alt='Javascript'
                />
              </PuffUpElement>
            </Tippy>
          </li>
          <li>
            <Tippy
              duration={500}
              placement='top'
              arrow={false}
              hideOnClick={false}
              content={<TechTip>Typescript</TechTip>}
            >
              <PuffUpElement className='w-[96px] h-[96px]'>
                <LinkImage
                  className='w-[64px] h-[64px]'
                  src='https://github.com/microsoft/TypeScript-Website/blob/v2/packages/typescriptlang-org/static/icons/ts-logo-512.png?raw=true'
                  alt='Typescript'
                />
              </PuffUpElement>
            </Tippy>
          </li>
          <li>
            <Tippy
              duration={500}
              placement='top'
              arrow={false}
              hideOnClick={false}
              content={<TechTip>Git</TechTip>}
            >
              <PuffUpElement className='w-[96px] h-[96px]'>
                <LinkImage
                  className='w-[64px] h-[64px]'
                  src='https://avatars.githubusercontent.com/u/18133?s=200&v=4'
                  alt='Git'
                />
              </PuffUpElement>
            </Tippy>
          </li>
        </ul>
        <ul className='flex flex-row justify-center gap-4'>
          <li>
            <Tippy
              duration={500}
              placement='top'
              arrow={false}
              hideOnClick={false}
              content={<TechTip href='https://reactjs.org'>ReactJS</TechTip>}
              interactive={true}
            >
              <PuffUpElement className='w-[48px] h-[48px]'>
                <LinkImage
                  className='w-[32px] h-[32px]'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png'
                  alt='ReactJS'
                />
              </PuffUpElement>
            </Tippy>
          </li>
          <li>
            <Tippy
              duration={500}
              placement='top'
              arrow={false}
              hideOnClick={false}
              content={
                <TechTip href='https://storybook.js.org'>StorybookJS</TechTip>
              }
              interactive={true}
            >
              <PuffUpElement className='w-[48px] h-[48px]'>
                <LinkImage
                  className='w-[32px] h-[32px]'
                  src='https://avatars.githubusercontent.com/u/22632046?s=200&v=4'
                  alt='StorybookJS'
                />
              </PuffUpElement>
            </Tippy>
          </li>
          <li>
            <Tippy
              duration={500}
              placement='top'
              arrow={false}
              hideOnClick={false}
              content={<TechTip href='https://jestjs.io'>Jest</TechTip>}
              interactive={true}
            >
              <PuffUpElement className='w-[48px] h-[48px]'>
                <LinkImage
                  className='w-[32px] h-[32px]'
                  src='https://github.com/facebook/jest/blob/main/website/static/img/favicon/favicon-32x32.png?raw=true'
                  alt='Jest'
                />
              </PuffUpElement>
            </Tippy>
          </li>
          <li>
            <Tippy
              duration={500}
              placement='top'
              arrow={false}
              hideOnClick={false}
              content={
                <TechTip href='https://redwoodjs.com'>RedwoodJS</TechTip>
              }
              interactive={true}
            >
              <PuffUpElement className='w-[48px] h-[48px]'>
                <LinkImage
                  className='w-[32px] h-[32px]'
                  src='https://avatars.githubusercontent.com/u/45050444?s=200&v=4'
                  alt='RedwoodJS'
                />
              </PuffUpElement>
            </Tippy>
          </li>
          <li>
            <Tippy
              duration={500}
              placement='top'
              arrow={false}
              hideOnClick={false}
              content={<TechTip href='https://sass-lang.com'>Sass</TechTip>}
              interactive={true}
            >
              <PuffUpElement className='w-[48px] h-[48px]'>
                <LinkImage
                  className='w-[32px] h-[32px]'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/220px-Sass_Logo_Color.svg.png'
                  alt='Sass'
                />
              </PuffUpElement>
            </Tippy>
          </li>
          <li>
            <Tippy
              duration={500}
              placement='top'
              arrow={false}
              hideOnClick={false}
              content={<TechTip href='https://lesscss.org'>Less</TechTip>}
              interactive={true}
            >
              <PuffUpElement className='w-[48px] h-[48px]'>
                <LinkImage
                  className='w-[32px] h-[32px]'
                  src='https://lesscss.org/public/img/less_logo.png'
                  alt='Less'
                />
              </PuffUpElement>
            </Tippy>
          </li>
          <li>
            <Tippy
              duration={500}
              placement='top'
              arrow={false}
              hideOnClick={false}
              content={
                <TechTip href='https://tailwindcss.com'>Tailwind CSS</TechTip>
              }
              interactive={true}
            >
              <PuffUpElement className='w-[48px] h-[48px]'>
                <LinkImage
                  className='w-[32px] h-[32px]'
                  src='https://avatars.githubusercontent.com/u/67109815?s=200&v=4'
                  alt='Tailwind CSS'
                />
              </PuffUpElement>
            </Tippy>
          </li>
          <li>
            <Tippy
              duration={500}
              placement='top'
              arrow={false}
              hideOnClick={false}
              content={<TechTip href='https://github.com'>GitHub</TechTip>}
              interactive={true}
            >
              <PuffUpElement className='w-[48px] h-[48px]'>
                <LinkImage
                  className='w-[32px] h-[32px]'
                  src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                  alt='GitHub'
                />
              </PuffUpElement>
            </Tippy>
          </li>
        </ul>
      </div>
    </section>
  )
}

const ContactMe = () => {
  const logo: HTMLElement = document.querySelector('#agd-logo')

  return (
    <section className='bg-gray-200 px-8 py-8 flex flex-col gap-12 items-center rounded-[8px]'>
      <h2 className='text-center font-semibold'>Want to Work Together?</h2>
      <button
        className='bg-green-500 border-blue-800 border-2 shadow-lg text-xl rounded-full max-w-max px-4 py-3'
        onClick={() => {
          logo.focus()
        }}
      >
        Contact Me
      </button>
    </section>
  )
}

const Body = () => {
  return (
    <main className='px-6 py-24 flex-auto flex flex-col gap-24'>
      <AboutMe />
      <TechStack />
      <ContactMe />
    </main>
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
