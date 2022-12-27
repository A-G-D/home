import { FC } from 'react'
import classNames from 'classnames'
import Window, { WindowProps } from 'src/components/base/Window'

export interface ResumeWrapperProps extends WindowProps {}

const ResumeWrapper: FC<ResumeWrapperProps> = ({
  title,
  children,
  className,
  ...props
}) => {
  const headerControlBar = (
    <div className='flex flex-row justify-between items-center gap-x-[6px]'>
      <div className='h-[14px] w-[14px] rounded-full bg-red-500' />
      <div className='h-[14px] w-[14px] rounded-full bg-yellow-500' />
      <div className='h-[14px] w-[14px] rounded-full bg-green-500' />
    </div>
  )

  return (
    <Window
      className={classNames('mx-4 my-8 rounded-lg w-fit', className)}
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
          className: 'bg-primary-800 text-white p-3 rounded-t-lg',
        },
        body: {
          className: 'bg-primary-200 rounded-b-lg p-3',
        },
      }}
      {...props}
    >
      {children}
    </Window>
  )
}

export default ResumeWrapper
