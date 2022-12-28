import { FC, HTMLAttributes, useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import classNames from 'classnames'
import { getDomain } from 'src/lib/utils'

export interface MobileNavBarMenuProps
  extends HTMLAttributes<HTMLUListElement> {
  onMenuSelect?: () => void
}

const MobileNavBarMenu: FC<MobileNavBarMenuProps> = ({
  onMenuSelect,
  className,
  ...props
}) => {
  const [navMenuOptions] = useState([
    {
      route: routes.projects(),
      label: 'Portfolio',
    },
    {
      route: routes.blog(),
      label: 'Blog',
    },
    {
      route: `${window.location.protocol}//resume.${getDomain()}`,
      label: 'Resume',
      target: '_blank',
    },
  ])

  return (
    <ul
      className={classNames('flex flex-col items-stretch', className)}
      {...props}
    >
      <li>
        <Link to={routes.projects()} onClick={onMenuSelect}>
          <p className='px-6 py-3 font-semibold text-white hover:bg-primary-700'>
            Portfolio
          </p>
        </Link>
      </li>
      <li>
        <Link to={routes.blog()} onClick={onMenuSelect}>
          <p className='px-6 py-3 font-semibold text-white hover:bg-primary-700'>
            Blog
          </p>
        </Link>
      </li>
      <li>
        <a
          href={`${window.location.protocol}//resume.${getDomain()}`}
          target='_blank'
          onClick={onMenuSelect}
        >
          <p className='px-6 py-3 font-semibold text-white hover:bg-primary-700'>
            Resume
          </p>
        </a>
      </li>
    </ul>
  )
}

export default MobileNavBarMenu
