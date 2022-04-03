import { Link, routes } from '@redwoodjs/router'
import {
  FieldError,
  Form,
  Label,
  PasswordField,
  Submit,
  TextField,
} from '@redwoodjs/forms'

export interface SignupFormPropTypes
  extends React.HTMLAttributes<HTMLDivElement> {
  onSubmit?: (
    values: Record<string, any>,
    event?: React.BaseSyntheticEvent<object, any, any>
  ) => void
  usernameRef?: React.MutableRefObject<HTMLInputElement>
}

const SignupForm = ({
  className,
  onSubmit,
  usernameRef,
  ...props
}: SignupFormPropTypes): JSX.Element => {
  return (
    <div
      className={['flex-col w-96 rounded-[8px] rw-segment', className].join(
        ' '
      )}
      {...props}
    >
      <header className='bg-purple-800 rounded-t-[8px] flex-center rw-segment-header'>
        <h2 className='text-gray-900 rw-heading rw-heading-secondary'>
          Signup
        </h2>
      </header>

      <div className='bg-purple-300 rounded-b-[8px] rw-segment-main'>
        <div className='rw-form-wrapper'>
          <Form onSubmit={onSubmit} className='rw-form-wrapper'>
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
            <FieldError name='password' className='rw-field-error' />

            <div className='rw-button-group'>
              <Submit className='bg-violet-600 text-gray-900 rw-button'>
                Sign Up
              </Submit>
            </div>
          </Form>
        </div>

        <div className='rw-login-link'>
          <span>Already have an account?</span>{' '}
          <Link to={routes.login()} className='rw-link'>
            Log in!
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignupForm
