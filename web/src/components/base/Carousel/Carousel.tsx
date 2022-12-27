import classNames from 'classnames'
import React, {
  forwardRef,
  HTMLAttributes,
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useResizeObserver } from 'src/lib/hooks'
import { clamp, toArray, updateElement } from 'src/lib/utils'

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactElement | ReactElement[]
  activeIndex?: number
}

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    { children, className, activeIndex = 0, ...props },
    ref: MutableRefObject<HTMLDivElement>
  ) => {
    const indexRef = useRef(0)
    const [width, setWidth] = useState(0)
    const [gap, setGap] = useState(0)
    const [items, setItems] = useState(toArray<ReactElement>(children))

    const iRef = useRef<HTMLDivElement>()
    ref = ref ?? iRef

    useResizeObserver(
      {
        callback: (entries) => {
          const target = entries[0].target
          setWidth(target.clientWidth)
        },
      },
      ref,
      [activeIndex]
    )

    activeIndex = clamp(activeIndex, 0, items.length - 1)
    indexRef.current = activeIndex

    useEffect(() => {
      if (ref.current != null) {
        const style = getComputedStyle(ref.current)
        setWidth(ref.current.clientWidth)
        setGap(
          Number.parseInt(style.paddingLeft) +
            Number.parseInt(style.paddingRight)
        )
      }
    }, [activeIndex])

    return (
      <div
        ref={ref}
        className={classNames(
          'Carousel flex items-stretch overflow-hidden',
          className
        )}
        style={{ gap }}
        {...props}
      >
        {items.map((child, i) => {
          return updateElement(child, {
            className:
              'relative top-0 bottom-0 transition-[left] min-w-full  max-w-full w-full',
            style: { left: -activeIndex * width },
          })
        })}
      </div>
    )
  }
)

export default Carousel
