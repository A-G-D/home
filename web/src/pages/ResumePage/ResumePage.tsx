import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ResumeWrapper = ({ children, title }) => {
  return (
    <div className='flex flex-col gap-[4px] mx-4 my-8 py-4 px-3 h-max w-max rounded-[6px] bg-purple-300'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row justify-between items-center gap-x-[6px]'>
          <div className='h-[14px] w-[14px] rounded-[50%] bg-red-500' />
          <div className='h-[14px] w-[14px] rounded-[50%] bg-yellow-400' />
          <div className='h-[14px] w-[14px] rounded-[50%] bg-green-500' />
        </div>
        <div>{title}</div>
        <div>
          <div className='flex flex-row justify-between gap-x-[6px]'>
            <div className='h-[12px] w-[12px]' />
            <div className='h-[12px] w-[12px]' />
            <div className='h-[12px] w-[12px]' />
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

const Resume = () => {
  return (
    <ResumeWrapper title='resume.pdf'>
      <section className='w-[794px] h-[1123px] bg-white flex flex-col border border-black px-6'>
        <h1 className='text-center'>Aloever Dulay</h1>
        <p className='text-center'>aloeverdulay@gmail.com</p>
        <p className='text-center'>
          Blk 71 Lot 1, The Prestige Subdivision, Indangan, Davao City,
          Philippines
        </p>
        <div className='h-[2px] w-[100%] bg-gray-600' />
        <section className='flex flex-col'>
          <h2>Related Skills</h2>
          <div className='flex flex-row'>
            <ul className='flex flex-col flex-auto'>
              <li>Html, Markdown</li>
              <li>CSS, Sass, Less</li>
              <li>Javascript, Typescript, Python, Lua, C++, C#, Bash</li>
              <li>React, TailwindCSS</li>
            </ul>
            <ul className='flex flex-col flex-auto'>
              <li>Jest</li>
              <li>Webpack</li>
              <li>Storybook</li>
              <li>RedwoodJS</li>
            </ul>
            <ul className='flex flex-col flex-auto'>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>
        </section>
        <div className='h-[2px] w-[100%] bg-gray-600' />
        <section className='flex flex-col'>
          <h2>Other Skills</h2>
          <ul className='flex flex-col'>
            <li>Gimp, Canva</li>
            <li>Microsoft Office, LibreOffice, Google Docs</li>
            <li>Problem solving, Troubleshooting, Design optimization</li>
          </ul>
        </section>
        <div className='h-[2px] w-[100%] bg-gray-600' />
        <section className='flex flex-col'>
          <h2>Education</h2>
          <p>University of Southeastern Philippines</p>
          <p>Bachelor of Science in Mechanical Engineering (BSME)</p>
          <p>2015-2021</p>
        </section>
        <div className='h-[2px] w-[100%] bg-gray-600' />
        <section className='flex flex-col'>
          <h2>Interests</h2>
          <ul>
            <li>Movies and Animations</li>
            <li>Music</li>
            <li>Mobile Games</li>
            <li>Math and Physics</li>
          </ul>
        </section>
      </section>
    </ResumeWrapper>
  )
}

const ResumePage = () => {
  return (
    <>
      <MetaTags title='Resume' description='Resume page' />

      <Resume />
    </>
  )
}

export default ResumePage
