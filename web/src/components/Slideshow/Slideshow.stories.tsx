import Slideshow from './Slideshow'
import * as CarouselStories from 'src/components/Carousel/Carousel.stories'

const Template = (args) => <Slideshow {...args} />

export const Default = Template.bind({})
Default.args = {
  children: [...CarouselStories.Default.args.children],
  className: 'bg-gray-400 gap-8 p-4',
  initialIndex: 0,
}

export const TimedSlides = Template.bind({})
TimedSlides.args = {
  ...Default.args,
  slideDuration: 3000,
}

export default { title: 'Components/Slideshow' }
