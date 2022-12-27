import React, { FC } from 'react'
import Background from 'src/components/Background'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <Background className='h-fit min-h-full' resolutionFactor={1 / 2}>
    {children}
  </Background>
)

export default MainLayout
