import {
  FieldError,
  Form,
  Label,
  PasswordField,
  Submit,
} from '@redwoodjs/forms'
import { FC, HTMLAttributes } from 'react'
import Window from 'src/components/base/Window'

export interface ResetPasswordFormProps extends HTMLAttributes<HTMLDivElement> {
  passwordRef?: React.MutableRefObject<HTMLInputElement>
  enabled?: boolean
  onSubmit?: (
    values: Record<string, any>,
    event?: React.BaseSyntheticEvent<object, any, any>
  ) => void
}

const ResetPasswordForm: FC<ResetPasswordFormProps> = ({
  className,
  passwordRef,
  enabled,
  onSubmit,
  ...props
}) => {
  return (
    <Window
      className={[
        'bg-primary-200 flex flex-col rounded-lg w-96',
        className,
      ].join(' ')}
      childrenAttributes={{
        header: {
          children: <Window.Header>Reset Password</Window.Header>,
          className:
            'bg-primary-500 text-gray-200 p-3 text-sm font-semibold rounded-t-lg',
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
        <div className='flex flex-col'>
          <Label
            name='password'
            className='input-label'
            errorClassName='input-label input-label-error'
          >
            New Password
          </Label>
          <PasswordField
            name='password'
            autoComplete='new-password'
            className='input-field'
            errorClassName='input-field-error input-field-error'
            disabled={!enabled}
            ref={passwordRef}
            validation={{
              required: {
                value: true,
                message: 'Password is required',
              },
            }}
          />

          <FieldError name='password' className='input-error' />
        </div>

        <Submit className='self-center submit-button' disabled={!enabled}>
          Submit
        </Submit>
      </Form>
    </Window>
  )
}

export default ResetPasswordForm
