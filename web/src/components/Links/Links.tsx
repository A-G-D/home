import { Link, routes, useMatch } from '@redwoodjs/router'
import Tippy from '@tippyjs/react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import PortfolioMenu from 'src/components/PortfolioMenu'

import 'tippy.js/animations/shift-away.css'

const Links = () => {
  const activeNavStyle = 'border-b-indigo-900 text-fuchsia-900'
  const inactiveNavStyle = 'text-white'
  const navStyle =
    'hover:border-b-indigo-700 hover:text-fuchsia-900 border-y-4 border-transparent flex items-center gap-2 px-[8px] py-[4px] font-bold'

  const portfolioDropdownRef = React.useRef()
  const portfolioMatchInfo = useMatch(routes.projects())
  const blogMatchInfo = useMatch(routes.blog())
  const resumeMatchInfo = useMatch(routes.resume())

  return (
    <nav className='flex items-center'>
      <ul className='flex justify-evenly items-center gap-x-3'>
        <li>
          <div className='flex items-center'>
            <Link
              className={[
                navStyle,
                portfolioMatchInfo.match ? activeNavStyle : inactiveNavStyle,
              ].join(' ')}
              to={routes.projects()}
            >
              Portfolio
            </Link>
            <span
              ref={portfolioDropdownRef}
              className='bg-violet-800 hover:bg-purple-700 rounded-md'
            >
              <MdOutlineKeyboardArrowDown />
            </span>
          </div>
        </li>
        <li>
          <Link
            className={[
              navStyle,
              blogMatchInfo.match ? activeNavStyle : inactiveNavStyle,
            ].join(' ')}
            to={routes.blog()}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={[
              navStyle,
              resumeMatchInfo.match ? activeNavStyle : inactiveNavStyle,
            ].join(' ')}
            to={routes.resume()}
            target='_blank'
            rel='noopener noreferrer'
          >
            Resume
          </Link>
        </li>
      </ul>
      <Tippy
        reference={portfolioDropdownRef}
        content={<PortfolioMenu />}
        placement='bottom'
        interactive={true}
        arrow={false}
        animation='shift-away'
        duration={200}
        maxWidth={360}
      />
    </nav>
  )
}

export default Links
