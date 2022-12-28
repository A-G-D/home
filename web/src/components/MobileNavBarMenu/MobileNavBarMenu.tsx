import { FC, HTMLAttributes, useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import classNames from 'classnames'
import { getDomain } from 'src/lib/utils'

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
      {navMenuOptions.map(({ route, label, target }) => (
        <li key={route}>
          <Link to={route} target={target} onClick={() => onMenuSelect(route)}>
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
