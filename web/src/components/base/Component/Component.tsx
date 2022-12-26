import { forwardRef, HTMLAttributes } from 'react'
import Spinner from 'src/components/base/Spinner'
import classNames from 'classnames'

export interface ComponentProps extends HTMLAttributes<HTMLDivElement> {
  loading?: boolean
}

/**
 * A basic component that has a loading state
 */
const Component = forwardRef<HTMLDivElement, ComponentProps>(
  ({ loading = false, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(
          { 'flex flex-col justify-center': loading },
          className
        )}
        {...props}
      >
        {loading ? <Spinner className='self-center' /> : children}
      </div>
    )
  }
)

export default Component
