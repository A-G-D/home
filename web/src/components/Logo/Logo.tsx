import { Link, routes } from '@redwoodjs/router'
import { AGDLogo } from 'src/assets'
import SocialLinks from 'src/components/SocialLinks'

const Logo = () => {
  return (
    <div
      id='agd-logo'
      className='focus:max-w-[512px] hover:max-w-[512px] transition-[max-width] duration-500 max-w-[128px] overflow-hidden flex items-center gap-x-8 px-[32px] rounded-full bg-primary-100'
      tabIndex={-1}
    >
      <Link to={routes.home()}>
        <img
          className='logo min-h-[64px] min-w-[64px]'
          src={AGDLogo}
          alt='AGD Logo'
        />
      </Link>
      <SocialLinks />
    </div>
  )
}

export default Logo
