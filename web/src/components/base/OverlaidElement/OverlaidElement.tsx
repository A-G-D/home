import classNames from 'classnames'
import { FC, HTMLAttributes, useRef, useState } from 'react'
import { useResizeObserver } from 'src/lib/hooks'

export interface OverlaidElementPropTypes
  extends HTMLAttributes<HTMLDivElement> {
  overlay: JSX.Element
}

const OverlaidElement: FC<OverlaidElementPropTypes> = ({
  children,
  className,
  overlay,
  ...props
}) => {
  const [shown, setShown] = useState(false)
  const [borderHorizontal, setBorderHorizontal] = useState(0)
  const [borderVertical, setBorderVertical] = useState(0)
  const ref = useResizeObserver<HTMLDivElement>(
    {
      callback: (entries) => {
        const element = entries[0].target
        setBorderHorizontal(element.clientWidth / 2)
        setBorderVertical(element.clientHeight / 2)
      },
    },
    useRef()
  )
  const onMouseEnter = () => {
    setShown(true)
  }
  const onMouseLeave = () => {
    setShown(false)
  }
  return (
    <div
      ref={ref}
      className={classNames(
        'relative object-cover overflow-hidden p-4',
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      <div
        className={classNames(
          'transition-all duration-[300ms]',
          shown ? 'blur-sm' : 'blur-none'
        )}
      >
        {children}
      </div>
      <div
        className={classNames(
          'transition-all duration-[300ms] border-violet-300/80 absolute-fit'
        )}
        style={{
          borderTopWidth: shown ? borderVertical : 0,
          borderBottomWidth: shown ? borderVertical : 0,
          borderLeftWidth: shown ? borderHorizontal : 0,
          borderRightWidth: shown ? borderHorizontal : 0,
        }}
      />
      <div
        className={classNames(
          'transition-all duration-[600ms] absolute-fit p-4',
          shown ? '' : 'text-transparent invisible'
        )}
      >
        {overlay}
      </div>
    </div>
  )
}

export default OverlaidElement
