import React from 'react'

type JSXNode = React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
>

const PuffUpElement = React.forwardRef(
  (
    { children, className, ...props }: React.HTMLAttributes<HTMLDivElement>,
    ref: React.ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        ref={ref}
        className={['flex justify-center items-center', className].join(' ')}
        {...props}
      >
        {React.Children.map(children as JSXNode, (child: React.ReactElement) =>
          React.cloneElement(child, {
            className: [
              'transition-all hover:w-full hover:h-full',
              child.props.className,
            ].join(' '),
          })
        )}
      </div>
    )
  }
)

export default PuffUpElement
