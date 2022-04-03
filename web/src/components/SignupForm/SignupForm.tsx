import { Link, routes } from '@redwoodjs/router'
import {
  FieldError,
  Form,
  Label,
  PasswordField,
  Submit,
  TextField,
} from '@redwoodjs/forms'
import Window from 'src/components/Window'

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
    <Window
      className={[
        'bg-purple-300 flex flex-col rounded-lg w-96',
        className,
      ].join(' ')}
      childrenAttributes={{
        header: {
          children: <Window.Header>Signup</Window.Header>,
          className:
            'bg-purple-800 text-gray-900 p-3 text-sm font-semibold rounded-t-lg',
        },
        body: {
          className: 'p-5 rounded-b-lg',
        },
      }}
      {...props}
    >
      <div className='flex flex-col gap-4'>
        <Form className='flex flex-col items-stretch gap-4' onSubmit={onSubmit}>
          <div className='flex flex-col'>
            <Label
              name='username'
              className='input-label'
              errorClassName='rw-label rw-label-error'
            >
              Username
            </Label>
            <TextField
              name='username'
              className='input-field'
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
          </div>

          <div className='flex flex-col'>
            <Label
              name='password'
              className='input-label'
              errorClassName='rw-label rw-label-error'
            >
              Password
            </Label>
            <PasswordField
              name='password'
              className='input-field'
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
          </div>

          <div className='rw-button-group'>
            <Submit className='bg-violet-600 text-gray-900 rw-button'>
              Sign Up
            </Submit>
          </div>
        </Form>

        <div className='m-0 rw-login-link'>
          <span>Already have an account?</span>{' '}
          <Link to={routes.login()} className='rw-link'>
            Log in!
          </Link>
        </div>
      </div>
    </Window>
  )
}

export default SignupForm
