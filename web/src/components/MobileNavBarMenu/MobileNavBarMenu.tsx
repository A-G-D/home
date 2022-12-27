import { FC, HTMLAttributes, useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import classNames from 'classnames'

export interface MobileNavBarMenuProps
  extends HTMLAttributes<HTMLUListElement> {
  onMenuSelect?: (option: string) => void
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
      route: routes.resume(),
      label: 'Resume',
    },
  ])

  return (
    <ul
      className={classNames('flex flex-col items-stretch', className)}
      {...props}
    >
      {navMenuOptions.map(({ route, label }) => (
        <li key={route}>
          <Link to={route} onClick={() => onMenuSelect(route)}>
            <p className='px-6 py-3 font-semibold text-white hover:bg-primary-700'>
              {label}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MobileNavBarMenu
