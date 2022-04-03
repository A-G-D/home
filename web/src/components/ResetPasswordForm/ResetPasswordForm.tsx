import {
  FieldError,
  Form,
  Label,
  PasswordField,
  Submit,
} from '@redwoodjs/forms'
import Window from 'src/components/Window'

export interface ResetPasswordFormPropTypes
  extends React.HTMLAttributes<HTMLDivElement> {
  passwordRef?: React.MutableRefObject<HTMLInputElement>
  enabled?: boolean
  onSubmit?: (
    values: Record<string, any>,
    event?: React.BaseSyntheticEvent<object, any, any>
  ) => void
}

const ResetPasswordForm = ({
  className,
  passwordRef,
  enabled,
  onSubmit,
  ...props
}: ResetPasswordFormPropTypes): JSX.Element => {
  return (
    <Window
      className={[
        'bg-purple-300 flex flex-col rounded-lg w-96',
        className,
      ].join(' ')}
      childrenAttributes={{
        header: {
          children: <Window.Header>Reset Password</Window.Header>,
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
