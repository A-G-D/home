export interface AuthorNamePropTypes
  extends React.HTMLAttributes<HTMLSpanElement> {}

const AuthorName = ({
  children,
  className,
  ...props
}: AuthorNamePropTypes): JSX.Element => {
  return (
    <span
      className={['font-handwritten font-black', className].join(' ')}
      {...props}
    >
      Aloever Dulay
    </span>
  )
}

export default AuthorName
