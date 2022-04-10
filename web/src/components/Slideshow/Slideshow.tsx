import React from 'react'
import { useResizeObserver } from 'src/lib/hooks'
import { updateElement } from 'src/lib/utils'

export interface SlideshowPropTypes
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement | React.ReactElement[]
  activeIndex?: number
}

const Slideshow = ({
  children,
  className,
  activeIndex = 0,
  ...props
}: SlideshowPropTypes): JSX.Element => {
  const [left, setLeft] = React.useState(0)
  const [gap, setGap] = React.useState(0)
  const ref = useResizeObserver<HTMLDivElement>(
    (entries) => {
      const target = entries[0].target
      setLeft(-activeIndex * target.clientWidth)
    },
    [activeIndex]
  )

  const itemCount = React.Children.count(children)
  activeIndex = Math.min(Math.max(activeIndex, 0), itemCount - 1)

  React.useEffect(() => {
    if (ref.current != null) {
      const style = getComputedStyle(ref.current)
      setLeft(-activeIndex * ref.current.clientWidth)
      setGap(
        Number.parseInt(style.paddingLeft) + Number.parseInt(style.paddingRight)
      )
    }
  }, [activeIndex])

  return (
    <div
      ref={ref}
      className={['Slideshow flex overflow-hidden', className].join(' ')}
      style={{ gap }}
      {...props}
    >
      {React.Children.map(children, (child) => {
        return updateElement(child, {
          className:
            'relative transition-all min-w-full min-h-full max-w-full max-h-full w-full h-full',
          style: { left },
        })
      })}
    </div>
  )
}

export default Slideshow
