import classNames from 'classnames'
import { FC } from 'react'
import Component, { ComponentProps } from '../base/Component'

export interface UserRibbonProps extends ComponentProps {
  currentUser: any
  onLogout: () => void
}

const UserRibbon: FC<UserRibbonProps> = ({
  currentUser,
  onLogout,
  className,
  ...props
}) => (
  <Component
    className={classNames(
      'bg-gray-400 border-2 border-gray-600 absolute top-0 right-0 rounded-b-[12px] flex flex-row gap-2 px-4 py-2',
      className
    )}
    {...props}
  >
    <div>{currentUser.email}</div>
    <div className='bg-gray-600 self-stretch w-[2px]' />
    <div className='hover:cursor-pointer' onClick={onLogout}>
      Logout
    </div>
  </Component>
)

export default UserRibbon
