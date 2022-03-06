import { MetaTags } from '@redwoodjs/web'

const AboutMe = () => {
  const aboutMeText = `I'm an aspiring Full-Stack Web Developer.
In the past, I've had experience in game modding, software development, and CAD programming.`
  return <div className='py-6'>{aboutMeText}</div>
}

const TechStack = () => {
  return <div className='py-6'>
    <h1>Tech Stack:</h1>
    <ul>
      <li>RedwoodJS</li>
      <li>React</li>
      <li>Storybook</li>
    </ul>
  </div>
}

const Body = () => {
  return <div className='bg-gray-200 px-6 py-3 flex flex-col flex-auto'>
    <AboutMe/>
    <TechStack/>
  </div>
}

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Body/>
    </>
  )
}

export default HomePage
