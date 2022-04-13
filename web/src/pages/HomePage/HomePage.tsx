import { MetaTags } from '@redwoodjs/web'
import { BiLinkExternal } from 'react-icons/bi'
import { MdPlayArrow } from 'react-icons/md'
import Tippy from '@tippyjs/react'
import PuffUpElement from 'src/components/PuffUpElement'
import AuthorName from 'src/components/AuthorName'

import 'tippy.js/dist/tippy.css'
import './HomePage.scss'
import { getDevIcon, Library } from 'src/lib/utils'
import { useResizeObserver } from 'src/lib/hooks'
import Slideshow from 'src/components/Slideshow'

const getScreenshot = (path: string): string => {
  return Library.Pictures.get(`screenshots/${path}`)
}

const AboutMe = () => {
  return (
    <section className='bg-gray-200 px-8 py-8 flex flex-col gap-4 rounded-[8px]'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl text-center'>
          HI! I'm <AuthorName className='ml-2 text-4xl' />
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

interface LinkImagePropTypes extends React.HTMLAttributes<HTMLLinkElement> {
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

const TechStackItem = ({
  containerClassName,
  contentClassName,
  iconPath,
  src,
  alt,
  tooltip,
  tooltipOffset = 16,
}: {
  containerClassName: string
  contentClassName: string
  iconPath?: string
  src?: string
  alt: string
  tooltip: React.ReactNode
  tooltipOffset?: number
}): JSX.Element => {
  const ref = React.useRef()
  return (
    <>
      <PuffUpElement className={containerClassName}>
        <LinkImage
          ref={ref}
          className={contentClassName}
          src={iconPath ? getDevIcon(iconPath) : src}
          alt={alt}
        />
      </PuffUpElement>
      <Tippy
        reference={ref}
        duration={500}
        placement='top'
        offset={[0, tooltipOffset]}
        arrow={false}
        hideOnClick={false}
        content={tooltip}
        interactive={true}
      />
    </>
  )
}

const TechStack = () => {
  return (
    <section className='bg-gray-200 px-8 py-8 flex flex-col gap-12 rounded-[8px]'>
      <h2 className='text-center font-semibold'>Technologies</h2>
      <div className='flex flex-col gap-12'>
        <ul className='flex flex-row flex-wrap justify-center gap-4'>
          <li>
            <TechStackItem
              containerClassName='w-[96px] h-[96px]'
              contentClassName='w-[64px] h-[64px]'
              iconPath='html5/html5-original.svg'
              alt='HTML5'
              tooltip={<TechTip>HTML</TechTip>}
              tooltipOffset={32}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[96px] h-[96px]'
              contentClassName='w-[64px] h-[64px]'
              iconPath='css3/css3-original.svg'
              alt='CSS3'
              tooltip={<TechTip>CSS</TechTip>}
              tooltipOffset={32}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[96px] h-[96px]'
              contentClassName='w-[64px] h-[64px]'
              iconPath='javascript/javascript-original.svg'
              alt='JavaScript'
              tooltip={<TechTip>JavaScript</TechTip>}
              tooltipOffset={32}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[96px] h-[96px]'
              contentClassName='w-[64px] h-[64px]'
              iconPath='typescript/typescript-original.svg'
              alt='TypeScript'
              tooltip={<TechTip>TypeScript</TechTip>}
              tooltipOffset={32}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[96px] h-[96px]'
              contentClassName='w-[64px] h-[64px]'
              iconPath='git/git-original.svg'
              alt='Git'
              tooltip={<TechTip>Git</TechTip>}
              tooltipOffset={32}
            />
          </li>
        </ul>
        <ul className='flex flex-row flex-wrap justify-center gap-4'>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              iconPath='react/react-original.svg'
              alt='ReactJS'
              tooltip={<TechTip href='https://reactjs.org'>ReactJS</TechTip>}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              iconPath='tailwindcss/tailwindcss-plain.svg'
              alt='Tailwind CSS'
              tooltip={
                <TechTip href='https://tailwindcss.com'>Tailwind CSS</TechTip>
              }
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              iconPath='sass/sass-original.svg'
              alt='Sass'
              tooltip={<TechTip href='https://sass-lang.com'>Sass</TechTip>}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              iconPath='less/less-plain-wordmark.svg'
              alt='Less'
              tooltip={<TechTip href='https://lesscss.org'>Less</TechTip>}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              iconPath='storybook/storybook-original.svg'
              alt='StorybookJS'
              tooltip={
                <TechTip href='https://storybook.js.org'>StorybookJS</TechTip>
              }
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              iconPath='jest/jest-plain.svg'
              alt='Jest'
              tooltip={<TechTip href='https://jestjs.io'>Jest</TechTip>}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              iconPath='webpack/webpack-original.svg'
              alt='Webpack'
              tooltip={<TechTip href='https://webpack.js.org'>Webpack</TechTip>}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              src='https://avatars.githubusercontent.com/u/45050444?s=200&v=4'
              alt='RedwoodJS'
              tooltip={
                <TechTip href='https://redwoodjs.com'>RedwoodJS</TechTip>
              }
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              iconPath='github/github-original.svg'
              alt='GitHub'
              tooltip={<TechTip href='https://github.com'>GitHub</TechTip>}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              iconPath='python/python-original.svg'
              alt='Python'
              tooltip={<TechTip href='https://www.python.org'>Python</TechTip>}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              iconPath='jupyter/jupyter-original-wordmark.svg'
              alt='Jupyter'
              tooltip={<TechTip href='https://jupyter.org'>Jupyter</TechTip>}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              iconPath='cplusplus/cplusplus-original.svg'
              alt='C++'
              tooltip={
                <TechTip href='https://en.cppreference.com'>C++</TechTip>
              }
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              iconPath='csharp/csharp-original.svg'
              alt='C#'
              tooltip={
                <TechTip href='https://docs.microsoft.com/en-us/dotnet/csharp'>
                  C#
                </TechTip>
              }
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              iconPath='lua/lua-original.svg'
              alt='Lua'
              tooltip={<TechTip href='https://www.lua.org'>Lua</TechTip>}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              iconPath='bash/bash-original.svg'
              alt='Bash'
              tooltip={
                <TechTip href='https://www.gnu.org/software/bash/manual/html_node/index.html'>
                  Bash
                </TechTip>
              }
            />
          </li>
        </ul>
      </div>
    </section>
  )
}

const OverlaidElement = ({
  children,
  className,
  overlay,
  ...props
}: {
  children?: React.ReactNode
  className?: string
  overlay: JSX.Element
}) => {
  const [shown, setShown] = React.useState(false)
  const [borderHorizontal, setBorderHorizontal] = React.useState(0)
  const [borderVertical, setBorderVertical] = React.useState(0)
  const ref = useResizeObserver<HTMLDivElement>(
    {
      callback: (entries) => {
        const element = entries[0].target
        setBorderHorizontal(element.clientWidth / 2)
        setBorderVertical(element.clientHeight / 2)
      },
    },
    React.useRef()
  )
  const onMouseEnter = () => {
    setShown(true)
  }
  const onMouseLeave = () => {
    setShown(false)
  }
  return (
    <div
      ref={ref}
      className={['relative object-cover', className].join(' ')}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {children}
      <div
        className={[
          'transition-all duration-400 border-violet-400/80 absolute top-0 bottom-0 left-0 right-0',
        ].join(' ')}
        style={{
          borderTopWidth: shown ? borderVertical : 0,
          borderBottomWidth: shown ? borderVertical : 0,
          borderLeftWidth: shown ? borderHorizontal : 0,
          borderRightWidth: shown ? borderHorizontal : 0,
        }}
      />
      <div
        className={[
          'transition-all duration-300 absolute top-0 bottom-0 left-0 right-0 p-4',
          shown ? '' : 'text-transparent invisible',
        ].join(' ')}
      >
        {overlay}
      </div>
    </div>
  )
}

const PortfolioSlideshow = () => {
  const slideshowInterval = 3
  const itemsCount = 3
  const timerRef = React.useRef<NodeJS.Timer>()
  const [activeIndex, setActiveIndex] = React.useState(0)

  const onPrev = () => {
    setActiveIndex((index) => Math.max(index - 1, 0))
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActiveIndex((index) => Math.min(index - 1, 0))
    }, slideshowInterval * 1000)
  }
  const onNext = () => {
    setActiveIndex((index) => Math.min(index + 1, itemsCount - 1))
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActiveIndex((index) => Math.min(index + 1, itemsCount - 1))
    }, slideshowInterval * 1000)
  }

  React.useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((index) => Math.min(index + 1, itemsCount - 1))
    }, slideshowInterval * 1000)
    return () => {
      clearInterval(timerRef.current)
    }
  })

  return (
    <div className='flex gap-2 items-center w-full'>
      <Slideshow
        className='bg-violet-400/80 border-violet-800 border-2 flex-auto'
        initialIndex={activeIndex}
      >
        <OverlaidElement
          overlay={
            <>
              <p className='text-center font-medium'>Pixel Art Creator</p>
              <p className='text-justify mt-4'>
                A pixel art creator webapp with a simply interface. Made purely
                with HTML, CSS, and vanilla JS.
              </p>
              <p className='font-medium mt-4'>Features:</p>
              <ul className='mt-2 ml-8 list-disc'>
                <li>
                  Preserve canvas content after resizing canvas dimensions
                </li>
                <li>Different brush colors and opacity</li>
                <li>Color stacking based on opacity</li>
                <li>Different background colors</li>
                <li>
                  Option to choose between a static solid background color or an
                  animated background
                </li>
                <li>Save canvas locally as an SVG</li>
              </ul>
            </>
          }
        >
          <img
            src={getScreenshot('a-g-d.github.io_TOP-etch-a-sketch.png')}
            alt='Pixel Art Creator Screenshot'
          />
        </OverlaidElement>
        <OverlaidElement
          overlay={
            <>
              <p className='text-center font-medium'>Rock, Paper, Scissors</p>
              <p className='text-justify mt-4'>
                A simple rock, paper, scissors webapp made with HTML, CSS, and
                vanilla JS.
              </p>
              <ul className='mt-4 ml-8 list-disc'>
                <li>Random opponent name thru the use of an external API</li>
              </ul>
            </>
          }
        >
          <img
            src={getScreenshot('a-g-d.github.io_TOP-rock-paper-scissors.png')}
            alt='Rock, Paper, Scissors Screenshot'
          />
        </OverlaidElement>
        <OverlaidElement
          overlay={
            <>
              <p className='text-center font-medium'>
                Static Landing Page Sample
              </p>
              <p className='text-justify mt-4'>
                A static website landing page. Made with HTML, CSS, and vanilla
                JS.
              </p>
              <ul className='mt-4 ml-8 list-disc'>
                <li>
                  Responsive web design, tested on both desktop and mobile
                  devices
                </li>
              </ul>
            </>
          }
        >
          <img
            src={getScreenshot('a-g-d.github.io_TOP-landing-page.png')}
            alt='Landing Page Screenshot'
          />
        </OverlaidElement>
      </Slideshow>
    </div>
  )
}

const Portfolio = () => {
  return (
    <section className='bg-gray-200 px-8 py-8 flex flex-col gap-12 items-center rounded-[8px]'>
      <h2 className='text-center font-semibold'>Portfolio</h2>
      <PortfolioSlideshow />
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
    <div className='px-6 py-24 flex-auto flex flex-col gap-24'>
      <AboutMe />
      <TechStack />
      <Portfolio />
      <ContactMe />
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
