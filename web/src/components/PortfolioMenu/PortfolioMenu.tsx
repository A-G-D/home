const PortfolioMenu = () => {
  const itemClassName =
    'hover:bg-primary-600 text-gray-300 hover:text-white text-sm font-medium flex-auto px-4 py-2'
  return (
    <div className='bg-primary-700 shadow-md shadow-black flex flex-col py-[4px] rounded-[4px]'>
      <div className='text-gray-300 font-medium px-2 py-2'>Exercises</div>
      <ul className='bg-primary-900 flex flex-col py-1'>
        <li className='flex'>
          <a
            className={itemClassName}
            href='https://a-g-d.github.io/TOP-etch-a-sketch/'
          >
            Pixel Art Creator
          </a>
        </li>
        <li className='flex'>
          <a
            className={itemClassName}
            href='htpps://a-g-d.github.io/TOP-rock-paper-scissors/'
          >
            Rock, Paper, Scissors
          </a>
        </li>
        <li className='flex'>
          <a
            className={itemClassName}
            href='htpps://a-g-d.github.io/TOP-landing-page/'
          >
            Static Landing Page
          </a>
        </li>
      </ul>
      <div className='text-gray-300 px-2 py-2'>Projects</div>
      <ul className='bg-primary-900 flex flex-col py-1'>
        <li className='flex'>
          <div className='text-gray-300 text-sm font-medium flex-auto px-4 py-2'>
            {'(No Projects Listed Yet)'}
          </div>
        </li>
      </ul>
    </div>
  )
}

export default PortfolioMenu
