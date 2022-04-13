import React from 'react'
import { MdPlayArrow } from 'react-icons/md'
import { usePrev } from 'src/lib/hooks'
import { toArray } from 'src/lib/utils'
import Carousel from 'src/components/Carousel'

const getTranslationFactor = (itemCount, index, activeIndex) => {
  const mid = Math.floor(itemCount / 2)
  if (index > mid + activeIndex) {
    return -itemCount
  }
  return 0
}

export interface SlideshowPropTypes
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement | React.ReactElement[]
  carouselClassName?: string
  initialIndex?: number
  cyclic?: boolean
}

const Slideshow = ({
  children,
  className,
  carouselClassName,
  initialIndex = 0,
  cyclic = false,
  ...props
}: SlideshowPropTypes): JSX.Element => {
  const [activeIndex, setActiveIndex] = React.useState(initialIndex)
  const prevIndex = usePrev(activeIndex, 0)
  const indexRef = React.useRef(0)
  const [items, setItems] = React.useState(
    toArray<React.ReactElement>(children)
  )

  const carouselRef = React.useRef<HTMLDivElement>()

  indexRef.current = activeIndex

  React.useEffect(() => {
    if (carouselRef.current != null) {
      for (let i = 0; i < carouselRef.current.children.length; ++i) {
        const child = carouselRef.current.children[i] as HTMLElement
        child.addEventListener('transitionend', () => {
          const width = carouselRef.current.clientWidth
          const factor = getTranslationFactor(items.length, i, indexRef.current)
          child.style.transform = `translateX(${factor * width}px)`
        })
      }
    }
  }, [])

  const onPrev = () => {
    setActiveIndex((index) => (index - 1 + items.length) % items.length)
  }
  const onNext = () => {
    setActiveIndex((index) => (index + 1) % items.length)
  }

  return (
    <div
      className={['Carousel relative flex items-center', className].join(' ')}
      {...props}
    >
      <div className='text-4xl'>
        <MdPlayArrow
          className='rotate-180 fill-violet-400 hover:fill-violet-800 hover:cursor-pointer'
          onClick={onPrev}
        />
      </div>
      <Carousel
        ref={carouselRef}
        className={carouselClassName}
        activeIndex={activeIndex}
      >
        {children}
      </Carousel>
      <div className='text-4xl'>
        <MdPlayArrow
          className='fill-violet-400 hover:fill-violet-800 hover:cursor-pointer'
          onClick={onNext}
        />
      </div>
      <div className='absolute bottom-0 left-0 right-0 flex flex-center gap-4 h-16'>
        {React.Children.map(children, (child, index) => {
          return (
            <div
              className={[
                'w-4 h-4 rounded-full',
                index === activeIndex ? 'bg-violet-600' : 'bg-violet-200/50',
              ].join(' ')}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Slideshow
