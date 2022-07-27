import PuffUpElement from './PuffUpElement'

export const generated = () => {
  return (
    <PuffUpElement className='bg-gray-200 w-[96px] h-[96px]'>
      <img
        className='bg-gray-600 w-[64px] h-[64px]'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/130px-HTML5_logo_and_wordmark.svg.png'
        alt='HTML5'
      />
    </PuffUpElement>
  )
}

export default { title: 'Components/PuffUpElement' }
