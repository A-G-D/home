import {
  FieldError,
  Form,
  Label,
  PasswordField,
  Submit,
  TextField,
} from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'

export interface LoginFormPropTypes
  extends React.HTMLAttributes<HTMLDivElement> {
  onSubmit?: (
    values: Record<string, any>,
    event?: React.BaseSyntheticEvent<object, any, any>
  ) => void
  usernameRef?: React.MutableRefObject<HTMLInputElement>
}

const LoginForm = ({
  className,
  onSubmit,
  usernameRef,
  ...props
}: LoginFormPropTypes): JSX.Element => {
  return (
    <div
      className={['flex flex-col rounded-[8px] w-96', className].join(' ')}
      {...props}
    >
      <header className='bg-purple-800 rw-segment-header flex-center rounded-t-[8px]'>
        <h2 className='text-gray-900 rw-heading rw-heading-secondary'>Login</h2>
      </header>

      <div className='bg-purple-300 rounded-b-[8px] rw-segment-main'>
        <Form className='rw-form-wrapper' onSubmit={onSubmit}>
          <Label
            name='username'
            className='rw-label'
            errorClassName='rw-label rw-label-error'
          >
            Username
          </Label>
          <TextField
            name='username'
            className='rw-input'
            errorClassName='rw-input rw-input-error'
            ref={usernameRef}
            validation={{
              required: {
                value: true,
                message: 'Username is required',
              },
            }}
          />

          <FieldError name='username' className='rw-field-error' />

          <Label
            name='password'
            className='rw-label'
            errorClassName='rw-label rw-label-error'
          >
            Password
          </Label>
          <PasswordField
            name='password'
            className='rw-input'
            errorClassName='rw-input rw-input-error'
            autoComplete='current-password'
            validation={{
              required: {
                value: true,
                message: 'Password is required',
              },
            }}
          />

          <div className='rw-forgot-link'>
            <Link to={routes.forgotPassword()} className='rw-forgot-link'>
              Forgot Password?
            </Link>
          </div>

          <FieldError name='password' className='rw-field-error' />

          <div className='rw-button-group'>
            <Submit className='bg-violet-600 text-gray-900 rw-button'>
              Login
            </Submit>
          </div>
        </Form>

        <div className='rw-login-link'>
          <span>Don&apos;t have an account?</span>{' '}
          <Link to={routes.signup()} className='rw-link'>
            Sign up!
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
