import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { getRootContainer } from 'src/lib/utils'
import Window from 'web/src/components/Window/Window'

const ResumeWrapper = ({ children, title }) => {
  const headerControlBar = (
    <div className='flex flex-row justify-between items-center gap-x-[6px]'>
      <div className='h-[14px] w-[14px] rounded-full bg-red-500' />
      <div className='h-[14px] w-[14px] rounded-full bg-yellow-400' />
      <div className='h-[14px] w-[14px] rounded-full bg-green-500' />
    </div>
  )

  return (
    <Window
      className='bg-purple-300 mx-4 my-8 rounded-[6px] w-fit'
      childrenAttributes={{
        header: {
          children: (
            <Window.Header
              controlBar={headerControlBar}
              controlBarPosition='left'
            >
              {title}
            </Window.Header>
          ),
          className: 'bg-purple-800 p-3 rounded-t-[6px]',
        },
        body: {
          className: 'p-3 rounded-b-[6px]',
        },
      }}
    >
      {children}
    </Window>
  )
}

const Resume = () => {
  const scale = window.devicePixelRatio
  return (
    <ResumeWrapper title='resume.pdf'>
      <iframe
        title='resume.pdf'
        src='https://drive.google.com/file/d/1L1KcofeMWaRl7QzFn7I2Z9m03KcpsruT/preview'
        width={(210 * 4) / scale}
        height={(297 * 4) / scale}
      />
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
