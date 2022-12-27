import classNames from 'classnames'

export interface AuthorNamePropTypes
  extends React.HTMLAttributes<HTMLSpanElement> {}

const AuthorName = ({
  children,
  className,
  ...props
}: AuthorNamePropTypes): JSX.Element => {
  return (
    <span
      className={classNames('font-handwritten font-black', className)}
      {...props}
    >
      Aloever Dulay
    </span>
  )
}

export default AuthorName
