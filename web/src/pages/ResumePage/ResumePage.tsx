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
      <iframe
        src='https://drive.google.com/file/d/1L1KcofeMWaRl7QzFn7I2Z9m03KcpsruT/preview'
        width={210 * 4}
        height={297 * 4}
      ></iframe>
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
