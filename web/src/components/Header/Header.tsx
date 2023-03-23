import { Toaster } from '@redwoodjs/web/dist/toast'
import { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'
import { MdMenu } from 'react-icons/md'
import { useScreenSize } from 'src/lib/hooks'
import Links from 'src/components/Links'
import Logo from 'src/components/Logo'

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  onMobileMenuClick: () => void
}

const Header: FC<HeaderProps> = ({
  onMobileMenuClick,
  className,
  ...props
}) => {
  const { isMedium } = useScreenSize()

  return (
    <header
      id='home-layout-header'
      className={classNames(
        'sticky top-0 w-full bg-primary-600/80 px-6 py-3 flex flex-row justify-between z-10',
        className
      )}
      {...props}
    >
      <Logo />
      {isMedium ? (
        <Links />
      ) : (
        <button className='p-2' onClick={onMobileMenuClick}>
          <MdMenu className='text-4xl text-primary-100' />
        </button>
      )}
      <Toaster />
    </header>
  )
}

export default Header
