import classNames from 'classnames'
import { HTMLAttributes, ReactNode } from 'react'

export interface WindowProps extends HTMLAttributes<HTMLElement> {
  childrenAttributes?: {
    header?: HTMLAttributes<HTMLDivElement>
    body?: HTMLAttributes<HTMLDivElement>
  }
}

const Window = ({
  childrenAttributes: { header, body } = {},
  children,
  className,
  ...props
}: WindowProps): JSX.Element => {
  return (
    <article
      className={classNames('flex flex-col h-fit', className)}
      {...props}
    >
      <header
        className={classNames(
          'flex flex-row justify-between items-center',
          header?.className
        )}
      >
        {header?.children}
      </header>
      <div className={[body?.className].join(' ')}>
        {body?.children}
        {children}
      </div>
    </article>
  )
}

Window.Header = ({
  children,
  controlBar,
  controlBarPosition = 'right',
}: {
  children?: ReactNode
  controlBar?: ReactNode
  controlBarPosition?: string
}): JSX.Element => {
  const placeLeft = controlBarPosition === 'left'
  return (
    <>
      <div className={placeLeft ? '' : 'invisible'}>{controlBar}</div>
      <div>{children}</div>
      <div className={placeLeft ? 'invisible' : ''}>{controlBar}</div>
    </>
  )
}

export default Window
