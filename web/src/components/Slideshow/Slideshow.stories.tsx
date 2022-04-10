import Slideshow from './Slideshow'
import { Library } from 'src/lib/utils'

const getScreenshot = (path: string): string => {
  return Library.Pictures.get(`screenshots/${path}`)
}

const Template = (args) => <Slideshow {...args} />

export const Default = Template.bind({})
Default.args = {
  children: [
    <img
      src={getScreenshot('a-g-d.github.io_TOP-etch-a-sketch.png')}
      alt='Slide Item 1'
    />,
    <img
      src={getScreenshot('a-g-d.github.io_TOP-rock-paper-scissors.png')}
      alt='Slide Item 2'
    />,
    <img
      src={getScreenshot('a-g-d.github.io_TOP-landing-page.png')}
      alt='Slide Item 3'
    />,
  ],
  className: 'bg-gray-400 p-4',
  activeIndex: 1,
}

export default { title: 'Components/Slideshow' }
