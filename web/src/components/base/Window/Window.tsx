import { HTMLAttributes } from 'react'

export interface WindowProps extends HTMLAttributes<HTMLElement> {
  childrenAttributes?: {
    header?: React.HTMLAttributes<HTMLDivElement>
    body?: React.HTMLAttributes<HTMLDivElement>
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
      className={['flex flex-col h-fit', className].join(' ')}
      {...props}
    >
      <header
        className={[
          'flex flex-row justify-between items-center',
          header?.className,
        ].join(' ')}
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
  children?: React.ReactNode
  controlBar?: React.ReactNode
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
