import AuthorName from 'src/components/AuthorName'

const AboutMe = () => {
  return (
    <section className='bg-gray-200 px-8 py-8 flex flex-col gap-4 rounded-[8px]'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl text-center flex-center flex-wrap gap-2'>
          HI! I'm <AuthorName className='ml-2 text-4xl' />
        </h1>
        <h2 className='text-2xl text-center flex-center flex-wrap gap-2'>
          a{' '}
          <span>
            <span className='font-bold'>Software Engineer</span>.
          </span>
        </h2>
      </div>
      <div className='flex flex-col gap-3'>
        <p className='text-lg text-center'>
          I love turning visual ideas into reality. I value quality, simplicity,
          and efficiency. I'm a proponent of adhering to standards and to tried
          and tested solutions, but am also a sucker for novelty, innovation,
          and experimentation.
        </p>
        <p className='text-lg text-center'>
          In the past, I've had experience in game modding and CAD programming.
        </p>
        <p className='text-lg text-center'>
          My quest for growth and learning is never-ending.
        </p>
        <p className='text-lg text-center'>
          In the future, I plan to learn on creating digital arts via coding.
        </p>
      </div>
    </section>
  )
}

export default AboutMe
