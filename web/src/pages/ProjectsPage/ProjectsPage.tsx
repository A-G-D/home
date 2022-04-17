import { MetaTags } from '@redwoodjs/web'
import { Library } from 'src/lib/utils'
import { Screenshot } from 'src/assets'

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
        'from-violet-400 flex justify-between items-stretch gap-4',
        imgLeft ? 'flex-row-reverse' : 'flex-row',
        imgLeft ? 'bg-gradient-to-l' : 'bg-gradient-to-r',
        className,
      ].join(' ')}
      {...props}
    >
      <div className='p-8 w-[50%]'>
        <h2 className='text-center font-medium'>{projectTitle}</h2>
        <div className='p-4 text-sm'>{children}</div>
      </div>
      <div className='transition bg-violet-600 hover:bg-violet-400 flex flex-col gap-4 p-8'>
        <img
          className='object-cover min-w-64 min-h-64 max-w-64 max-h-64 w-64 h-64 rounded-md'
          src={imgSrc}
          alt='Project Screenshot'
        />
        <div>
          <div>
            <span className='text-sm font-semibold'>Repo:</span>{' '}
            <a
              className='text-gray-700 hover:text-gray-900 text-sm underline'
              href={repo.url}
            >
              {repo.name}
            </a>
          </div>
          <div>
            <span className='text-sm font-semibold'>Site:</span>{' '}
            <a
              className='text-gray-700 hover:text-gray-900 text-sm underline'
              href={site.url}
            >
              {site.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Exercises = () => {
  const layoutHeader: HTMLElement = document.querySelector(
    '#home-layout-header'
  )
  const headerHeight = layoutHeader ? layoutHeader.offsetHeight : 0

  return (
    <div className='bg-gray-200 py-6 flex flex-col gap-12 items-stretch rounded-[8px]'>
      <div
        className='bg-gray-200/80 py-2 sticky flex flex-col gap-4'
        style={{ top: headerHeight }}
      >
        <h2 className='text-center font-semibold'>Exercises</h2>

        <p className='text-center text-sm italic'>
          Small scale projects made as part of The Odin Project curriculum
        </p>
      </div>

      <ul className='flex flex-col gap-24 py-12'>
        <li>
          <ProjectItem
            projectTitle='Pixel Art Creator'
            imgSrc={Screenshot.EtchASketch}
            repo={{
              name: 'Etch-A-Sketch',
              url: 'https://github.com/A-G-D/TOP-etch-a-sketch',
            }}
            site={{
              name: 'Etch-A-Sketch',
              url: 'https://a-g-d.github.io/TOP-etch-a-sketch',
            }}
          >
            <p className='text-justify'>
              A pixel art creator webapp with a simply interface. Made purely
              with HTML, CSS, and vanilla JS.
            </p>
            <p className='font-medium mt-4'>Features:</p>
            <ul className='mt-2 ml-8 list-disc'>
              <li>Preserve canvas content after resizing canvas dimensions</li>
              <li>Different brush colors and opacity</li>
              <li>Color stacking based on opacity</li>
              <li>Different background colors</li>
              <li>
                Option to choose between a static solid background color or an
                animated background
              </li>
              <li>Save canvas locally as an SVG</li>
            </ul>
          </ProjectItem>
        </li>

        <li>
          <ProjectItem
            projectTitle='Rock, Paper, Scissors'
            imgLeft={true}
            imgSrc={Screenshot.RockPaperScissors}
            repo={{
              name: 'Rock, Paper, Scissors',
              url: 'https://github.com/A-G-D/TOP-rock-paper-scissors/',
            }}
            site={{
              name: 'Rock, Paper, Scissors',
              url: 'https://a-g-d.github.io/TOP-rock-paper-scissors/',
            }}
          >
            <p className='text-justify'>
              A simple rock, paper, scissors webapp made with HTML, CSS, and
              vanilla JS.
            </p>
            <ul className='mt-4 ml-8 list-disc'>
              <li>Random opponent name thru the use of an external API</li>
            </ul>
          </ProjectItem>
        </li>

        <li>
          <ProjectItem
            projectTitle='Static Landing Page'
            imgSrc={Screenshot.LandingPage}
            repo={{
              name: 'Landing Page',
              url: 'https://github.com/A-G-D/TOP-landing-page',
            }}
            site={{
              name: 'Landing Page',
              url: 'https://a-g-d.github.io/TOP-landing-page',
            }}
          >
            <p className='text-justify'>
              A static website landing page. Made with HTML, CSS, and vanilla
              JS.
            </p>
            <ul className='mt-4 ml-8 list-disc'>
              <li>
                Responsive web design, tested on both desktop and mobile devices
              </li>
            </ul>
          </ProjectItem>
        </li>
      </ul>
    </div>
  )
}

const Projects = () => {
  const layoutHeader: HTMLElement = document.querySelector(
    '#home-layout-header'
  )
  const headerHeight = layoutHeader ? layoutHeader.offsetHeight : 0

  return (
    <div className='bg-gray-200 py-8 flex flex-col gap-12 items-stretch rounded-[8px]'>
      <div
        className='bg-gray-200/80 sticky flex flex-col gap-4'
        style={{ top: headerHeight }}
      >
        <h2 className='text-center font-semibold'>Projects</h2>

        <p className='text-center text-sm italic'>
          Catalog of my completed, ongoing, and planned medium to large scale
          projects
        </p>
      </div>

      <ul className='flex flex-col gap-24 py-12'>
        <li>
          <div className='bg-gradient-to-b from-violet-400 text-center text-xl font-semibold py-12'>
            No Projects to Show Yet
          </div>
        </li>
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
