import AuthorName from 'src/components/AuthorName'

const AboutMe = () => {
  return (
    <section className='bg-gray-200 px-8 py-8 flex flex-col gap-4 rounded-[8px]'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl text-center'>
          HI! I'm <AuthorName className='ml-2 text-4xl' />
        </h1>
        <h2 className='text-2xl text-center'>
          a <span className='font-bold'>Front End Web Developer</span>.
        </h2>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-lg text-center'>
          I love turning visual ideas into reality. I value quality, simplicity,
          and efficiency. I'm a proponent of both adherence to standards as well
          as in novelty and innovation.
        </p>
        <p className='text-lg text-center'>
          In the past, I've had experience in software development, game
          modding, and CAD programming. My quest for growth and learning is
          never-ending.
        </p>
        <p className='text-lg text-center'>
          One day, I will become a Full Stack Web Developer.
        </p>
      </div>
    </section>
  )
}

export default AboutMe
