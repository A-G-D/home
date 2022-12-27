import { FieldError, Form, Label, Submit, TextField } from '@redwoodjs/forms'
import classNames from 'classnames'
import { FC } from 'react'
import Window from 'src/components/base/Window'

export interface ForgotPasswordFormProps
  extends React.HTMLAttributes<HTMLDivElement> {
  usernameRef?: React.MutableRefObject<HTMLInputElement>
  onSubmit?: (
    values: Record<string, any>,
    event?: React.BaseSyntheticEvent<object, any, any>
  ) => void
}

const ForgotPasswordForm: FC<ForgotPasswordFormProps> = ({
  className,
  usernameRef,
  onSubmit,
  ...props
}) => {
  return (
    <Window
      className={classNames(
        'bg-primary-200 flex flex-col rounded-lg w-96',
        className
      )}
      childrenAttributes={{
        header: {
          children: <Window.Header>Forgot Password</Window.Header>,
          className:
            'bg-primary-500 text-gray-200 p-3 text-sm font-semibold rounded-t-lg',
        },
        body: {
          className: 'p-5 rounded-b-lg',
        },
      }}
      {...props}
    >
      <Form className='flex flex-col gap-8' onSubmit={onSubmit}>
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
              required: true,
            }}
          />

          <FieldError name='username' className='input-error' />
        </div>

        <Submit className='self-center submit-button'>Submit</Submit>
      </Form>
    </Window>
  )
}

export default ForgotPasswordForm
