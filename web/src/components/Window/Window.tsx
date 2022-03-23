export interface WindowPropTypes extends React.HTMLAttributes<HTMLDivElement> {
  childrenAttributes?: {
    header?: React.HTMLAttributes<HTMLDivElement>
    body?: React.HTMLAttributes<HTMLDivElement>
  }
}

const Window = ({
  childrenAttributes: { header, body } = {},
  children,
  className,
}: WindowPropTypes): JSX.Element => {
  return (
    <article className={['flex flex-col w-fit h-fit', className].join(' ')}>
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

Window.Header = ({ children, controlBar }): JSX.Element => {
  return (
    <>
      <div>{controlBar}</div>
      <div>{children}</div>
      <div className='invisible'>{controlBar}</div>
    </>
  )
}

export default Window
