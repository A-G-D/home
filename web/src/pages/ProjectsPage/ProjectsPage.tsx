import { MetaTags } from '@redwoodjs/web'
import { Library } from 'src/lib/utils'

const getScreenshot = (path: string): string => {
  return Library.Pictures.get(`screenshots/${path}`)
}

interface ProjectItemPropTypes extends React.HTMLAttributes<HTMLDivElement> {
  projectTitle: string
  imgSrc?: string
  imgLeft?: boolean
  repo: {
    name: string
    url: string
  }
  site: {
    name: string
    url: string
  }
}

const ProjectItem = ({
  children,
  className,
  projectTitle,
  imgSrc,
  imgLeft = false,
  repo,
  site,
  ...props
}: ProjectItemPropTypes): JSX.Element => {
  return (
    <div
      className={[
        'bg-violet-400 flex justify-between items-stretch gap-4',
        imgLeft ? 'flex-row-reverse' : 'flex-row',
        className,
      ].join(' ')}
      {...props}
    >
      <div className='p-8 w-[50%]'>
        <h2 className='text-center'>{projectTitle}</h2>
        <div className='p-4 text-sm'>{children}</div>
      </div>
      <div className='bg-violet-600 flex flex-col gap-4 p-8'>
        <img
          className='object-cover min-w-64 min-h-64 w-64 h-64 rounded-md'
          src={imgSrc}
          alt='Project Screenshot'
        />
        <div>
          <div>
            Repo: <a href={repo.url}>{repo.name}</a>
          </div>
          <div>
            Site: <a href={site.url}>{site.name}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Exercises = () => {
  return (
    <div className='bg-gray-200 py-8 flex flex-col gap-24 items-stretch rounded-[8px]'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-center font-semibold'>Exercises</h2>

        <p className='text-center text-sm italic'>
          Small scale projects made as part of The Odin Project curriculum
        </p>
      </div>

      <ul className='flex flex-col gap-24'>
        <li>
          <ProjectItem
            projectTitle='Pixel Art Creator'
            imgSrc={getScreenshot('a-g-d.github.io_TOP-etch-a-sketch.png')}
            repo={{
              name: 'Etch-A-Sketch',
              url: 'https://github.com/A-G-D/TOP-etch-a-sketch',
            }}
            site={{
              name: 'Etch-A-Sketch',
              url: 'https://a-g-d.github.io/TOP-etch-a-sketch',
            }}
          >
            A pixel art creator webapp with a simply interface. Made purely with
            HTML, CSS, and vanilla JS.
          </ProjectItem>
        </li>

        <li>
          <ProjectItem
            projectTitle='Rock, Paper, Scissors'
            imgLeft={true}
            imgSrc={getScreenshot(
              'a-g-d.github.io_TOP-rock-paper-scissors.png'
            )}
            repo={{
              name: 'Rock, Paper, Scissors',
              url: 'https://github.com/A-G-D/TOP-rock-paper-scissors/',
            }}
            site={{
              name: 'Rock, Paper, Scissors',
              url: 'https://a-g-d.github.io/TOP-rock-paper-scissors/',
            }}
          >
            A simple rock, paper, scissors game webapp made with HTML, CSS, and
            vanilla JS.
          </ProjectItem>
        </li>

        <li>
          <ProjectItem
            projectTitle='Landing Page'
            imgSrc={getScreenshot('a-g-d.github.io_TOP-landing-page.png')}
            repo={{
              name: 'Landing Page',
              url: 'https://github.com/A-G-D/TOP-landing-page',
            }}
            site={{
              name: 'Landing Page',
              url: 'https://a-g-d.github.io/TOP-landing-page',
            }}
          >
            A static website landing page. Made with HTML, CSS, and vanilla JS.
          </ProjectItem>
        </li>
      </ul>
    </div>
  )
}

const Projects = () => {
  return (
    <div className='bg-gray-200 py-8 flex flex-col gap-24 items-stretch rounded-[8px]'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-center font-semibold'>Projects</h2>

        <p className='text-center text-sm italic'>
          Catalog of my completed, ongoing, and planned medium to large scale
          projects
        </p>
      </div>

      <ul>
        <li></li>
      </ul>
    </div>
  )
}

const ProjectsPage = () => {
  return (
    <>
      <MetaTags title='Projects' description='Projects page' />

      <div className='px-6 py-24 flex-auto flex flex-col gap-24'>
        <Exercises />
        <Projects />
      </div>
    </>
  )
}

export default ProjectsPage
