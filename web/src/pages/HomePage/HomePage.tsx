import { MetaTags } from '@redwoodjs/web'

import AboutMe from 'src/components/AboutMe'
import Portfolio from 'src/components/Portfolio'
import ContactMe from 'src/components/ContactMe'
import TechStack from 'src/components/TechStack'

import './HomePage.scss'

const HomePage = () => {
  return (
    <>
      <MetaTags title='Home' description='Home page' />
      <div className='px-6 py-24 flex-auto flex flex-col gap-24'>
        <AboutMe />
        <TechStack />
        <Portfolio />
        <ContactMe />
      </div>
    </>
  )
}

export default HomePage
