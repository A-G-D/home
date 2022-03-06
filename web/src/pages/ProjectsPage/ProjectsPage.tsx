import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ProjectItem = ({ children, title }) => {
  return <>
    <h2>{title}</h2>
    {children}
  </>
}

const ProjectsPage = () => {
  return (
    <>
      <MetaTags title="Projects" description="Projects page" />

      <h1>Projects</h1>
      <p>These page contains a collection of my projects that I think are worth publicly sharing.</p>

      <ProjectItem title='Canvas'>
        A digital canvas webapp. Provides basic features for creating raster images. Installable as a PWA.
      </ProjectItem>

      <ProjectItem title='Modular-UI-React'>
        A UI Framework for React designed to be modular and easily extensible.
      </ProjectItem>
    </>
  )
}

export default ProjectsPage
