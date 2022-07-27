import { useListener } from 'src/lib/hooks'

const ContactMe = () => {
  const logo: HTMLElement = document.querySelector('#agd-logo')
  const onButtonClick = useListener(() => {
    logo.focus()
  })

  return (
    <section className='bg-gray-200 px-8 py-8 flex flex-col gap-12 items-center rounded-[8px]'>
      <h2 className='text-center font-semibold'>Want to Work Together?</h2>
      <button
        className='bg-violet-500 hover:bg-violet-400 border-blue-800 border-2 shadow-lg text-violet-900 hover:text-violet-700 text-xl font-medium rounded-full max-w-max px-4 py-3'
        onClick={onButtonClick}
      >
        Contact Me
      </button>
    </section>
  )
}

export default ContactMe
