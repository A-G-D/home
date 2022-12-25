import { BiLinkExternal } from 'react-icons/bi'
import PuffUpElement from 'src/components/base/PuffUpElement'
import LinkImage from 'src/components/base/LinkImage'
import { getDevIcon } from 'src/lib/utils'
import Tippy from '@tippyjs/react'

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
} from 'src/assets'

import 'tippy.js/animations/scale.css'

interface TechTipPropTypes {
  children?: React.ReactNode
  href?: string
}

const TechTip = ({ children, href }: TechTipPropTypes) => {
  return (
    <div className='flex gap-1 px-2 py-1 rounded-[4px]'>
      {children}
      {href && (
        <a href={href} target='_blank'>
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
  tooltipInteractive,
}: {
  containerClassName: string
  contentClassName: string
  iconPath?: string
  src?: string
  svg?: JSX.Element
  alt: string
  tooltip: React.ReactNode
  tooltipOffset?: number
  tooltipInteractive?: boolean
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
        duration={200}
        placement='top'
        offset={[0, tooltipOffset]}
        arrow={false}
        animation='scale'
        hideOnClick={false}
        content={tooltip}
        interactive={tooltipInteractive}
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
              tooltipInteractive
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
              tooltipInteractive
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              svg={<Sass className={smallItemShadow} />}
              alt='Sass'
              tooltip={<TechTip href='https://sass-lang.com'>Sass</TechTip>}
              tooltipInteractive
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              svg={<Less className={smallItemShadow} />}
              alt='Less'
              tooltip={<TechTip href='https://lesscss.org'>Less</TechTip>}
              tooltipInteractive
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
              tooltipInteractive
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              svg={<Jest className={smallItemShadow} />}
              alt='Jest'
              tooltip={<TechTip href='https://jestjs.io'>Jest</TechTip>}
              tooltipInteractive
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              svg={<Webpack className={smallItemShadow} />}
              alt='Webpack'
              tooltip={<TechTip href='https://webpack.js.org'>Webpack</TechTip>}
              tooltipInteractive
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
              tooltipInteractive
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              svg={<Github className={smallItemShadow} />}
              alt='GitHub'
              tooltip={<TechTip href='https://github.com'>GitHub</TechTip>}
              tooltipInteractive
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              svg={<Python className={smallItemShadow} />}
              alt='Python'
              tooltip={<TechTip href='https://www.python.org'>Python</TechTip>}
              tooltipInteractive
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              svg={<Jupyter className={smallItemShadow} />}
              alt='Jupyter'
              tooltip={<TechTip href='https://jupyter.org'>Jupyter</TechTip>}
              tooltipInteractive
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
              tooltipInteractive
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
              tooltipInteractive
            />
          </li>
          <li>
            <TechStackItem
              containerClassName='w-[48px] h-[48px]'
              contentClassName='w-[32px] h-[32px]'
              svg={<Lua className={smallItemShadow} />}
              alt='Lua'
              tooltip={<TechTip href='https://www.lua.org'>Lua</TechTip>}
              tooltipInteractive
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
              tooltipInteractive
            />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default TechStack
