import {
  FieldError,
  Form,
  Label,
  PasswordField,
  Submit,
  TextField,
} from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import Window from 'src/components/base/Window'

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
          className: 'flex flex-col items-stretch gap-4 p-5 rounded-b-lg',
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
              errorClassName='input-label input-label-error'
            >
              Username
            </Label>
            <TextField
              name='username'
              className='input-field'
              errorClassName='input-field input-field-error'
              ref={usernameRef}
              validation={{
                required: {
                  value: true,
                  message: 'Username is required',
                },
              }}
            />
            <FieldError name='username' className='input-error' />
          </div>

          <div className='flex flex-col'>
            <Label
              name='password'
              className='input-label'
              errorClassName='input-label input-label-error'
            >
              Password
            </Label>
            <PasswordField
              name='password'
              className='input-field'
              errorClassName='input-field input-field-error'
              autoComplete='current-password'
              validation={{
                required: {
                  value: true,
                  message: 'Password is required',
                },
              }}
            />
            <FieldError name='password' className='input-error' />
          </div>

          <Link
            to={routes.forgotPassword()}
            className='self-end underline text-gray-500 hover:text-blue-700 text-xs'
          >
            Forgot Password?
          </Link>
        </div>

        <Submit className='self-center submit-button'>Login</Submit>
      </Form>

      <div className='self-center text-gray-700 text-sm'>
        <span>Don&apos;t have an account?</span>{' '}
        <Link
          to={routes.signup()}
          className='underline text-blue-500 hover:text-blue-600'
        >
          Sign up!
        </Link>
      </div>
    </Window>
  )
}

export default LoginForm
