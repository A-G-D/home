import { Link, routes } from '@redwoodjs/router'
import {
  FieldError,
  Form,
  Label,
  PasswordField,
  Submit,
  TextField,
} from '@redwoodjs/forms'
import Window from 'src/components/base/Window'
import { FC, MutableRefObject } from 'react'
import classNames from 'classnames'

export interface SignupFormProps extends React.HTMLAttributes<HTMLDivElement> {
  onSubmit?: (
    values: Record<string, any>,
    event?: React.BaseSyntheticEvent<object, any, any>
  ) => void
  usernameRef?: MutableRefObject<HTMLInputElement>
}

const SignupForm: FC<SignupFormProps> = ({
  className,
  onSubmit,
  usernameRef,
  ...props
}) => {
  return (
    <Window
      className={classNames(
        'bg-primary-300 flex flex-col rounded-lg w-96',
        className
      )}
      childrenAttributes={{
        header: {
          children: <Window.Header>Signup</Window.Header>,
          className:
            'bg-primary-800 text-gray-900 p-3 text-sm font-semibold rounded-t-lg',
        },
        body: {
          className: 'p-5 rounded-b-lg',
        },
      }}
      {...props}
    >
      <div className='flex flex-col gap-4'>
        <Form className='flex flex-col items-stretch gap-8' onSubmit={onSubmit}>
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
          </div>

          <Submit className='self-center submit-button'>Sign Up</Submit>
        </Form>

        <div className='self-center text-gray-700 text-sm'>
          <span>Already have an account?</span>{' '}
          <Link
            to={routes.login()}
            className='underline text-blue-500 hover:text-blue-600'
          >
            Log in!
          </Link>
        </div>
      </div>
    </Window>
  )
}

export default SignupForm
