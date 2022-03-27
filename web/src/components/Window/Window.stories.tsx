import Window from './Window'

export const generated = () => {
  const headerControlBar = (
    <div className='flex flex-row justify-between items-center gap-x-[6px]'>
      <div className='h-[14px] w-[14px] rounded-full bg-red-500' />
      <div className='h-[14px] w-[14px] rounded-full bg-yellow-400' />
      <div className='h-[14px] w-[14px] rounded-full bg-green-500' />
    </div>
  )

  return (
    <Window
      className='bg-purple-300 mx-4 my-8 rounded-[6px]'
      childrenAttributes={{
        header: {
          children: (
            <Window.Header controlBar={headerControlBar}>Header</Window.Header>
          ),
          className: 'bg-purple-800 p-3 rounded-t-[6px]',
        },
        body: {
          className: 'p-3 rounded-b-[6px]',
        },
      }}
    >
      Body
    </Window>
  )
}

export default { title: 'Components/Window' }
