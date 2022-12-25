import { Link, routes, useMatch } from '@redwoodjs/router'
import Tippy from '@tippyjs/react'
import classNames from 'classnames'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import PortfolioMenu from 'src/components/PortfolioMenu'

import 'tippy.js/animations/shift-away.css'

const Links = () => {
  const activeNavStyle = 'border-b-primary-900 text-primary-900'
  const inactiveNavStyle = 'text-white'
  const navStyle =
    'hover:border-b-primary-800 hover:text-primary-900 border-y-4 border-transparent flex items-center gap-2 px-[8px] py-[4px] font-bold'

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
              className={classNames(
                navStyle,
                portfolioMatchInfo.match ? activeNavStyle : inactiveNavStyle
              )}
              to={routes.projects()}
            >
              Portfolio
            </Link>
            <span
              ref={portfolioDropdownRef}
              className='bg-primary-700 hover:bg-primary-600 rounded-md p-[2px]'
            >
              <MdOutlineKeyboardArrowDown className='text-white' />
            </span>
          </div>
        </li>
        <li>
          <Link
            className={classNames(
              navStyle,
              blogMatchInfo.match ? activeNavStyle : inactiveNavStyle
            )}
            to={routes.blog()}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={classNames(
              navStyle,
              resumeMatchInfo.match ? activeNavStyle : inactiveNavStyle
            )}
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
