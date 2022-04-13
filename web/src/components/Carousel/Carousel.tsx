import React from 'react'
import { useEvent, usePrev, useResizeObserver } from 'src/lib/hooks'
import { clamp, rotate, toArray, updateElement } from 'src/lib/utils'

export interface CarouselPropTypes
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement | React.ReactElement[]
  activeIndex?: number
}

const Carousel = React.forwardRef(
  (
    { children, className, activeIndex = 0, ...props }: CarouselPropTypes,
    ref: React.MutableRefObject<HTMLDivElement>
  ): JSX.Element => {
    const indexRef = React.useRef(0)
    const [width, setWidth] = React.useState(0)
    const [gap, setGap] = React.useState(0)
    const [items, setItems] = React.useState(
      toArray<React.ReactElement>(children)
    )

    const iRef = React.useRef<HTMLDivElement>()
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

    React.useEffect(() => {
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
        className={[
          'Carousel flex items-center overflow-hidden',
          className,
        ].join(' ')}
        style={{ gap }}
        {...props}
      >
        {items.map((child, i) => {
          return updateElement(child, {
            className:
              'relative transition-[left] min-w-full min-h-full max-w-full max-h-full w-full h-full',
            style: { left: -activeIndex * width },
          })
        })}
      </div>
    )
  }
)

export default Carousel
