import { useRef } from 'react'
import { Link, routes, useMatch } from '@redwoodjs/router'
import Tippy from '@tippyjs/react'
import classNames from 'classnames'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import PortfolioMenu from 'src/components/PortfolioMenu'
import { getDomain } from 'src/lib/utils'

import 'tippy.js/animations/shift-away.css'

const Links = () => {
  const activeNavStyle = 'border-b-primary-900 text-primary-900'
  const inactiveNavStyle = 'text-white'
  const navStyle =
    'hover:border-b-primary-800 hover:text-primary-900 border-y-4 border-transparent flex items-center gap-2 px-[8px] py-[4px] font-bold'

  const portfolioDropdownRef = useRef()
  const portfolioMatchInfo = useMatch(routes.projects())
  const blogMatchInfo = useMatch(routes.blog())

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
              className='bg-primary-800 hover:bg-transparent text-white hover:text-primary-800 border border-primary-800 rounded-md p-[2px]'
            >
              <MdOutlineKeyboardArrowDown />
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
          <a
            className={classNames(navStyle, inactiveNavStyle)}
            href={`${window.location.protocol}//resume.${getDomain()}`}
            target='_blank'
          >
            Resume
          </a>
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
