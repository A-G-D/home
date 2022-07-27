import { useResizeObserver } from "src/lib/hooks"

export interface OverlaidElementPropTypes extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
  overlay: JSX.Element
}

const OverlaidElement: React.FC<OverlaidElementPropTypes> = ({
  children,
  className,
  overlay,
  ...props
}) => {
  const [shown, setShown] = React.useState(false)
  const [borderHorizontal, setBorderHorizontal] = React.useState(0)
  const [borderVertical, setBorderVertical] = React.useState(0)
  const ref = useResizeObserver<HTMLDivElement>(
    {
      callback: (entries) => {
        const element = entries[0].target
        setBorderHorizontal(element.clientWidth / 2)
        setBorderVertical(element.clientHeight / 2)
      },
    },
    React.useRef()
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
      className={['relative object-cover overflow-hidden p-4', className].join(
        ' '
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      <div
        className={[
          'transition-all duration-[300ms]',
          shown ? 'blur-sm' : 'blur-none',
        ].join(' ')}
      >
        {children}
      </div>
      <div
        className={[
          'transition-all duration-[300ms] border-violet-300/80 absolute-fit',
        ].join(' ')}
        style={{
          borderTopWidth: shown ? borderVertical : 0,
          borderBottomWidth: shown ? borderVertical : 0,
          borderLeftWidth: shown ? borderHorizontal : 0,
          borderRightWidth: shown ? borderHorizontal : 0,
        }}
      />
      <div
        className={[
          'transition-all duration-[600ms] absolute-fit p-4',
          shown ? '' : 'text-transparent invisible',
        ].join(' ')}
      >
        {overlay}
      </div>
    </div>
  )
}

export default OverlaidElement
