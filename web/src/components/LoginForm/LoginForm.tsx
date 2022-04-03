import {
  FieldError,
  Form,
  Label,
  PasswordField,
  Submit,
  TextField,
} from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import Window from 'src/components/Window'

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
    <Window
      className={[
        'bg-purple-300 flex flex-col rounded-lg w-96',
        className,
      ].join(' ')}
      childrenAttributes={{
        header: {
          children: <Window.Header>Login</Window.Header>,
          className:
            'bg-purple-800 text-gray-900 p-3 text-sm font-semibold rounded-t-lg',
        },
        body: {
          className: 'p-5 rounded-b-lg',
        },
      }}
      {...props}
    >
      <Form
        className='flex-auto flex flex-col items-stretch gap-8'
        onSubmit={onSubmit}
      >
        <div className='flex flex-col gap-4'>
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
          </div>

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
    </Window>
  )
}

export default LoginForm
