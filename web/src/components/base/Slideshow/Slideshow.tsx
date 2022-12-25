import React from 'react'
import { MdPlayArrow } from 'react-icons/md'
import { toArray } from 'src/lib/utils'
import Carousel from 'src/components/base/Carousel'

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
  slideDuration?: number
  cyclic?: boolean
  controls?: {
    leftControl?: JSX.Element
    rightControl?: JSX.Element
  }
}

const Slideshow = ({
  children,
  className,
  carouselClassName,
  initialIndex = 0,
  slideDuration = 0,
  cyclic = false,
  controls = {},
  ...props
}: SlideshowPropTypes): JSX.Element => {
  const [activeIndex, setActiveIndex] = React.useState(initialIndex)
  const indexRef = React.useRef(0)
  const [items, setItems] = React.useState(
    toArray<React.ReactElement>(children)
  )

  const carouselRef = React.useRef<HTMLDivElement>()
  const timerRef = React.useRef<NodeJS.Timer>()

  indexRef.current = activeIndex

  const onPrev = () => {
    setActiveIndex((index) => (index - 1 + items.length) % items.length)
  }
  const onNext = () => {
    setActiveIndex((index) => (index + 1) % items.length)
  }

  const resetSlideDuration = () => {
    if (slideDuration < 150) return

    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      onNext()
    }, slideDuration)
  }

  const onPrevClick = () => {
    onPrev()
    resetSlideDuration()
  }
  const onNextClick = () => {
    onNext()
    resetSlideDuration()
  }

  React.useEffect(() => {
    if (carouselRef.current != null) {
      const carouselItems = Array.from(carouselRef.current.children)
      const callbacks = []
      for (let i = 0; i < carouselItems.length; ++i) {
        const item = carouselItems[i] as HTMLElement
        const callback = () => {
          const width = carouselRef.current.clientWidth
          const factor = getTranslationFactor(items.length, i, indexRef.current)
          item.style.transform = `translateX(${factor * width}px)`
        }
        item.addEventListener('transitionend', callback)
        callbacks.push(callback)
      }

      return () => {
        for (let i = 0; i < carouselItems.length; ++i) {
          const item = carouselItems[i] as HTMLElement
          item.removeEventListener('transitionend', callbacks[i])
        }
      }
    }
  }, [])

  React.useEffect(() => {
    if (slideDuration < 150) return

    timerRef.current = setInterval(() => {
      onNext()
    }, slideDuration)

    return () => {
      clearInterval(timerRef.current)
    }
  }, [slideDuration])

  return (
    <div
      className={['Slideshow relative flex items-center', className].join(' ')}
      {...props}
    >
      {controls?.leftControl ? (
        React.cloneElement(controls?.leftControl, { onClick: onPrevClick })
      ) : (
        <div className='text-4xl'>
          <MdPlayArrow
            className='rotate-180 fill-violet-400 hover:fill-violet-800 hover:cursor-pointer'
            onClick={onPrevClick}
          />
        </div>
      )}
      <Carousel
        ref={carouselRef}
        className={carouselClassName}
        activeIndex={activeIndex}
      >
        {children}
      </Carousel>
      {controls?.rightControl ? (
        React.cloneElement(controls?.rightControl, { onClick: onNextClick })
      ) : (
        <div className='text-4xl'>
          <MdPlayArrow
            className='fill-violet-400 hover:fill-violet-800 hover:cursor-pointer'
            onClick={onNextClick}
          />
        </div>
      )}
      <div className='absolute bottom-0 left-0 right-0 flex flex-center gap-4 h-16'>
        {React.Children.map(children, (child, index) => {
          return (
            <div
              key={child.key}
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
