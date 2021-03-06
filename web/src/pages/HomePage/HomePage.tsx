import { MetaTags } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import { BiLinkExternal } from 'react-icons/bi'
import { MdDoubleArrow, MdKeyboardArrowRight } from 'react-icons/md'
import Tippy from '@tippyjs/react'
import PuffUpElement from 'src/components/PuffUpElement'
import AuthorName from 'src/components/AuthorName'

import 'tippy.js/dist/tippy.css'
import './HomePage.scss'
import { getDevIcon, Library, updateElement } from 'src/lib/utils'
import { useResizeObserver } from 'src/lib/hooks'
import Slideshow from 'src/components/Slideshow'

import {
  Html5,
  Css3,
  Javascript,
  Typescript,
  Git,
  ReactJS,
  Tailwindcss,
  Sass,
  Less,
  Storybook,
  Jest,
  Webpack,
  Redwood,
  Github,
  Python,
  Jupyter,
  Cplusplus,
  Csharp,
  Lua,
  Bash,
  Screenshot,
} from 'src/assets'

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
  src?: string
  svg?: JSX.Element
  alt: string
}

const LinkImage = React.forwardRef(
  (
    { className, href, src, svg, alt }: LinkImagePropTypes,
    ref: React.RefObject<HTMLAnchorElement & HTMLImageElement>
  ): JSX.Element => {
    return !!href ? (
      <a ref={ref} className={className} href={href}>
        {!!src ? (
          <img src={src} alt={alt} />
        ) : (
          updateElement(svg, { className: 'h-full w-full' })
        )}
      </a>
    ) : !!src ? (
      <img ref={ref} className={className} src={src} alt={alt} />
    ) : (
      <div ref={ref} className={className}>
        {updateElement(svg, { className: 'h-full w-full' })}
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

const TechStackItem = ({
  containerClassName,
  contentClassName,
  iconPath,
  src,
  svg,
  alt,
  tooltip,
  tooltipOffset = 16,
}: {
  containerClassName: string
  contentClassName: string
  iconPath?: string
  src?: string
  svg?: JSX.Element
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
          svg={svg}
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
  const largeItemShadow =
    'transition-all drop-shadow-[0_0_4px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]'
  const smallItemShadow =
    'transition-all drop-shadow-[0_0_2px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]'
  return (
    <section className='bg-gray-200 px-8 py-8 flex flex-col gap-12 rounded-[8px]'>
      <h2 className='text-center font-semibold'>Technologies</h2>
      <div className='flex flex-col gap-12'>
        <ul className='flex flex-row flex-wrap justify-center gap-4'>
          <li>
            <TechStackItem
              containerClassName='w-[96px] h-[96px]'
              contentClassName='w-[64px] h-[64px]'
              svg={<Html5 className={largeItemShadow} />}
              alt='HTML5'
              tooltip={<TechTip>HTML</TechTip>}
              tooltipOffset={32}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[96px] h-[96px]'
              contentClassName='w-[64px] h-[64px]'
              svg={<Css3 className={largeItemShadow} />}
              alt='CSS3'
              tooltip={<TechTip>CSS</TechTip>}
              tooltipOffset={32}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[96px] h-[96px]'
              contentClassName='w-[64px] h-[64px]'
              svg={<Javascript className={largeItemShadow} />}
              alt='JavaScript'
              tooltip={<TechTip>JavaScript</TechTip>}
              tooltipOffset={32}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[96px] h-[96px]'
              contentClassName='w-[64px] h-[64px]'
              svg={<Typescript className={largeItemShadow} />}
              alt='TypeScript'
              tooltip={<TechTip>TypeScript</TechTip>}
              tooltipOffset={32}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[96px] h-[96px]'
              contentClassName='w-[64px] h-[64px]'
              svg={<Git className={largeItemShadow} />}
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
              svg={<ReactJS className={smallItemShadow} />}
              alt='ReactJS'
              tooltip={<TechTip href='https://reactjs.org'>ReactJS</TechTip>}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              svg={<Tailwindcss className={smallItemShadow} />}
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
              svg={<Sass className={smallItemShadow} />}
              alt='Sass'
              tooltip={<TechTip href='https://sass-lang.com'>Sass</TechTip>}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              svg={<Less className={smallItemShadow} />}
              alt='Less'
              tooltip={<TechTip href='https://lesscss.org'>Less</TechTip>}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              svg={<Storybook className={smallItemShadow} />}
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
              svg={<Jest className={smallItemShadow} />}
              alt='Jest'
              tooltip={<TechTip href='https://jestjs.io'>Jest</TechTip>}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              svg={<Webpack className={smallItemShadow} />}
              alt='Webpack'
              tooltip={<TechTip href='https://webpack.js.org'>Webpack</TechTip>}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName={[smallItemShadow, 'w-[32px] h-[32px]'].join(
                ' '
              )}
              src={Redwood}
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
              svg={<Github className={smallItemShadow} />}
              alt='GitHub'
              tooltip={<TechTip href='https://github.com'>GitHub</TechTip>}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              svg={<Python className={smallItemShadow} />}
              alt='Python'
              tooltip={<TechTip href='https://www.python.org'>Python</TechTip>}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              svg={<Jupyter className={smallItemShadow} />}
              alt='Jupyter'
              tooltip={<TechTip href='https://jupyter.org'>Jupyter</TechTip>}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              svg={<Cplusplus className={smallItemShadow} />}
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
              svg={<Csharp className={smallItemShadow} />}
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
              svg={<Lua className={smallItemShadow} />}
              alt='Lua'
              tooltip={<TechTip href='https://www.lua.org'>Lua</TechTip>}
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              svg={<Bash className={smallItemShadow} />}
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
      className={['relative object-cover overflow-hidden p-4', className].join(
        ' '
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      <div
        className={[
          'transition-all duration-[300ms]',
          shown ? 'blur-sm' : 'blur-none',
        ].join(' ')}
      >
        {children}
      </div>
      <div
        className={[
          'transition-all duration-[300ms] border-violet-300/80 absolute-fit',
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
          'transition-all duration-[600ms] absolute-fit p-4',
          shown ? '' : 'text-transparent invisible',
        ].join(' ')}
      >
        {overlay}
      </div>
    </div>
  )
}

const PortfolioSlideshow = () => {
  const slideDuration = 5000
  const initialIndex = 0

  return (
    <div className='flex gap-2 items-center w-full'>
      <Slideshow
        className='bg-violet-300/80 border-violet-800 border-2 shadow-[0_0_8px_4px] shadow-gray-700 flex-auto gap-2 px-2'
        initialIndex={initialIndex}
        slideDuration={slideDuration}
        controls={{
          leftControl: (
            <div className='text-4xl'>
              <MdKeyboardArrowRight className='rotate-180 hover:bg-violet-400 fill-violet-400 hover:fill-violet-800 hover:cursor-pointer rounded-full' />
            </div>
          ),
          rightControl: (
            <div className='text-4xl'>
              <MdKeyboardArrowRight className='hover:bg-violet-400 fill-violet-400 hover:fill-violet-800 hover:cursor-pointer rounded-full' />
            </div>
          ),
        }}
      >
        <OverlaidElement
          className='duration-1000 flex flex-center'
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
            className='aspect-auto h-full'
            src={Screenshot.EtchASketch}
            alt='Pixel Art Creator Screenshot'
          />
        </OverlaidElement>
        <OverlaidElement
          className='duration-1000 flex flex-center'
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
            className='aspect-auto h-full'
            src={Screenshot.RockPaperScissors}
            alt='Rock, Paper, Scissors Screenshot'
          />
        </OverlaidElement>
        <OverlaidElement
          className='duration-1000 flex flex-center'
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
            className='aspect-auto h-full'
            src={Screenshot.LandingPage}
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
      <Link
        className='flex items-center gap-2 text-link text-xl font-semibold'
        to={routes.projects()}
      >
        Go To Portfolio <MdDoubleArrow />
      </Link>
    </section>
  )
}

const ContactMe = () => {
  const logo: HTMLElement = document.querySelector('#agd-logo')

  return (
    <section className='bg-gray-200 px-8 py-8 flex flex-col gap-12 items-center rounded-[8px]'>
      <h2 className='text-center font-semibold'>Want to Work Together?</h2>
      <button
        className='bg-violet-500 hover:bg-violet-400 border-blue-800 border-2 shadow-lg text-violet-900 hover:text-violet-700 text-xl font-medium rounded-full max-w-max px-4 py-3'
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
