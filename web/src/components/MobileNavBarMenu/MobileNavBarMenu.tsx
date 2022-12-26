import { FC, HTMLAttributes } from 'react'
import { Link, routes } from '@redwoodjs/router'
import classNames from 'classnames'

const navMenuOptions = [
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
]

export interface MobileNavBarMenuProps
  extends HTMLAttributes<HTMLUListElement> {
  onMenuSelect?: (option: string) => void
}

const MobileNavBarMenu: FC<MobileNavBarMenuProps> = ({
  onMenuSelect,
  className,
  ...props
}) => {
  return (
    <ul
      className={classNames('flex flex-col items-stretch', className)}
      {...props}
    >
      {navMenuOptions.map(({ route, label }) => (
        <li>
          <Link to={route} onClick={() => onMenuSelect(route)}>
            <p className='px-4 py-2 font-semibold text-white hover:bg-primary-700'>
              {label}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MobileNavBarMenu
