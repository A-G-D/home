import { FC, HTMLAttributes, useState } from 'react'
import classNames from 'classnames'
import { useListener, useScreenSize } from 'src/lib/hooks'
import MobileNavBarMenuModal from 'src/components/MobileNavBarMenuModal'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

export interface HomeLayoutProps extends HTMLAttributes<HTMLDivElement> {}

const HomeLayout: FC<HomeLayoutProps> = ({ children, className, ...props }) => {
  const { isMedium } = useScreenSize()
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(false)

  const onMobileMenuClick = useListener(() => {
    setShowMobileNavMenu(true)
  })

  const onMobileNavBarMenuClose = useListener(() => {
    setShowMobileNavMenu(false)
  })

  return (
    <div
      id='home-layout'
      className={classNames(
        'flex-auto self-center flex flex-col h-fit min-h-full max-w-[768px] w-full',
        className
      )}
      {...props}
    >
      <Header onMobileMenuClick={onMobileMenuClick} />
      <main className='bg-gray-200/80 flex-auto flex flex-col'>{children}</main>
      <Footer />
      {!isMedium && (
        <MobileNavBarMenuModal
          isOpen={showMobileNavMenu}
          onClose={onMobileNavBarMenuClose}
        />
      )}
    </div>
  )
}

export default HomeLayout
