import Carousel from './Carousel'
import { Library } from 'src/lib/utils'

const getScreenshot = (path: string): string => {
  return Library.Pictures.get(`screenshots/${path}`)
}

const Template = (args) => <Carousel {...args} />

export const Default = Template.bind({})
Default.args = {
  children: [
    <img
      className='duration-1000 self-center'
      src={getScreenshot('a-g-d.github.io_TOP-etch-a-sketch.png')}
      alt='Slide Item 1'
    />,
    <img
      className='duration-1000 self-center'
      src={getScreenshot('a-g-d.github.io_TOP-rock-paper-scissors.png')}
      alt='Slide Item 2'
    />,
    <img
      className='duration-1000 self-center'
      src={getScreenshot('a-g-d.github.io_TOP-landing-page.png')}
      alt='Slide Item 3'
    />,
  ],
  className: 'bg-gray-400 p-4',
  activeIndex: 1,
}

export const WrappedImages = Template.bind({})
WrappedImages.args = {
  children: [
    <div className='bg-blue-400 duration-1000 flex items-center'>
      <img
        src={getScreenshot('a-g-d.github.io_TOP-etch-a-sketch.png')}
        alt='Slide Item 1'
      />
    </div>,
    <div className='bg-green-400 duration-1000 flex items-center'>
      <img
        src={getScreenshot('a-g-d.github.io_TOP-rock-paper-scissors.png')}
        alt='Slide Item 2'
      />
    </div>,
    <div className='bg-red-400 duration-1000 flex items-center'>
      <img
        src={getScreenshot('a-g-d.github.io_TOP-landing-page.png')}
        alt='Slide Item 3'
      />
    </div>,
  ],
  className: 'bg-gray-400 p-4',
  activeIndex: 1,
}

export default { title: 'Components/Carousel' }
