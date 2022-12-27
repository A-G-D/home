import { MetaTags } from '@redwoodjs/web'
import Resume from 'src/components/Resume'

const ResumePage = () => {
  return (
    <>
      <MetaTags title='Resume' description='Resume page' />

      <div className='flex-auto flex-center'>
        <Resume />
      </div>
    </>
  )
}

export default ResumePage
