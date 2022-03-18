import React from 'react'

interface MarginPropTypes {
  thickness?: number
  offset?: number
  border?: number
  className?: string
  style?: object
}

export interface NotePagePropTypes extends React.HTMLAttributes<HTMLElement> {
  options?: {
    margin?: {
      top?: MarginPropTypes
      bottom?: MarginPropTypes
      left?: MarginPropTypes
      right?: MarginPropTypes
    }
    hLineColor?: string
    vLineColor?: string
    lineHeight?: number
    lineDividerThickness?: number
    fontSize?: number
    bodyClassName?: string
    bodyStyles?: object
  }
}

const traverseElementTree = (
  element: HTMLElement,
  onTraverse: (child: HTMLElement) => void
) => {
  for (let i = 0; i < element.children.length; ++i) {
    const child = element.children[i] as HTMLElement
    traverseElementTree(child, onTraverse)
  }
  onTraverse(element)
}

const MarginDefaultProps = {
  thickness: 0,
  offset: 0,
  border: 1,
  className: '',
  style: {},
}

const NotePage = ({
  children,
  className,
  dangerouslySetInnerHTML,
  options: {
    margin: {
      top = MarginDefaultProps,
      bottom = MarginDefaultProps,
      left = MarginDefaultProps,
      right = MarginDefaultProps,
    } = {
      top: MarginDefaultProps,
      bottom: MarginDefaultProps,
      left: MarginDefaultProps,
      right: MarginDefaultProps,
    },
    hLineColor = 'blue',
    vLineColor = 'pink',
    lineHeight = 1.2,
    lineDividerThickness = 1,
    fontSize = 12,
    bodyClassName = '',
    bodyStyles = null,
  } = {
    margin: {
      top: MarginDefaultProps,
      bottom: MarginDefaultProps,
      left: MarginDefaultProps,
      right: MarginDefaultProps,
    },
    hLineColor: 'blue',
    vLineColor: 'pink',
    lineHeight: 1.2,
    lineDividerThickness: 1,
    fontSize: 12,
    bodyClassName: '',
    bodyStyles: null,
  },
  ...props
}: NotePagePropTypes): JSX.Element => {
  const styleClasses = 'relative'

  const ref: React.RefObject<HTMLElement> = React.useRef()
  const innerRef: React.RefObject<HTMLDivElement> = React.useRef()
  const [lines, setLines] = React.useState(0)
  const [state, setState] = React.useState(0) // dummy state for forcing rerender

  const rowHeight = lineHeight * fontSize

  React.useEffect(() => {
    traverseElementTree(innerRef.current, (child) => {
      const currentGap = window.getComputedStyle(child).rowGap
      const style = child.style
      if (child === innerRef.current) {
        style.paddingTop = '0px'
        style.paddingBottom = '0px'
      } else {
        style.padding = '0px'
      }
      style.fontSize = fontSize + 'px'
      style.lineHeight = lineHeight.toString()
      style.rowGap =
        Math.ceil(Number.parseInt(currentGap) / rowHeight) * rowHeight + 'px'
    })
    setState((value) => value + 1)
  }, [])

  React.useEffect(() => {
    const bodyHeight = innerRef.current.clientHeight
    setLines(Math.ceil(bodyHeight / rowHeight) + 1)
  })

  const topFlag = top.thickness > 0
  const bottomFlag = bottom.thickness > 0
  const leftFlag = left.thickness > 0
  const rightFlag = right.thickness > 0

  return (
    <section
      ref={ref}
      className={[className, styleClasses].join(' ')}
      style={{
        ...props.style,
        minWidth: left.thickness + right.thickness,
        minHeight: top.thickness + bottom.thickness,
      }}
      {...props}
    >
      {Array.from({ length: lines }, (v, i) => {
        const topOffset = rowHeight * i + top.thickness
        return (
          <div
            key={`hrule-${topOffset}`}
            className='bg-blue-400 absolute left-0 right-0'
            style={{ top: topOffset, height: lineDividerThickness }}
          />
        )
      })}
      {leftFlag && (
        <div
          key='vrule-left'
          className='bg-pink-400 absolute top-0 bottom-0 w-[1px] h-full'
          style={{ left: left.thickness }}
        />
      )}
      {rightFlag && (
        <div
          key='vrule-right'
          className='bg-pink-400 absolute top-0 bottom-0 w-[1px] h-full'
          style={{ right: right.thickness }}
        />
      )}
      {topFlag && (
        <div className='flex items-stretch' style={{ height: top.thickness }}>
          {leftFlag && (
            <div
              className=''
              style={{ width: left.thickness, minWidth: left.thickness }}
            ></div>
          )}
          <div className='flex-auto'></div>
          {rightFlag && (
            <div
              className=''
              style={{ width: right.thickness, minWidth: right.thickness }}
            ></div>
          )}
        </div>
      )}
      <div className='flex items-stretch'>
        {leftFlag && (
          <div
            className=''
            style={{ width: left.thickness, minWidth: left.thickness }}
          ></div>
        )}
        <div
          ref={innerRef}
          className={['flex-auto', bodyClassName].join(' ')}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
          style={{
            ...bodyStyles,
            paddingLeft: left.offset,
            paddingRight: right.offset,
          }}
        >
          {children}
        </div>
        {rightFlag && (
          <div
            className=''
            style={{ width: right.thickness, minWidth: right.thickness }}
          ></div>
        )}
      </div>
      {bottomFlag && (
        <div
          className='flex items-stretch'
          style={{ height: bottom.thickness }}
        >
          {leftFlag && (
            <div
              className=''
              style={{ width: left.thickness, minWidth: left.thickness }}
            ></div>
          )}
          <div className='flex-auto'></div>
          {rightFlag && (
            <div
              className=''
              style={{ width: right.thickness, minWidth: right.thickness }}
            ></div>
          )}
        </div>
      )}
    </section>
  )
}

export default NotePage
