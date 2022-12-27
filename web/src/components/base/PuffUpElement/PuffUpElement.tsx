import classNames from 'classnames'
import {
  Children,
  cloneElement,
  forwardRef,
  HTMLAttributes,
  JSXElementConstructor,
  ReactElement,
} from 'react'

type JSXNode = ReactElement<any, string | JSXElementConstructor<any>>

export interface PuffUpElement extends HTMLAttributes<HTMLDivElement> {}

const PuffUpElement = forwardRef<HTMLDivElement, PuffUpElement>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames('flex justify-center items-center', className)}
        {...props}
      >
        {Children.map(children as JSXNode, (child: ReactElement) =>
          cloneElement(child, {
            className: classNames(
              'transition-all hover:w-full hover:h-full',
              child.props.className
            ),
          })
        )}
      </div>
    )
  }
)

export default PuffUpElement
