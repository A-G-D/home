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
        className='bg-primary-500 hover:bg-white border-primary-500 border-2 shadow-lg text-white hover:text-primary-500 text-xl font-medium rounded-full max-w-max px-4 py-3 transition'
        onClick={onButtonClick}
      >
        Contact Me
      </button>
    </section>
  )
}

export default ContactMe
