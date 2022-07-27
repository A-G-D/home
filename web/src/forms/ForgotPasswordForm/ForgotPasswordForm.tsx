import { FieldError, Form, Label, Submit, TextField } from '@redwoodjs/forms'
import Window from 'src/components/base/Window'

export interface ForgotPasswordFormPropTypes
  extends React.HTMLAttributes<HTMLDivElement> {
  usernameRef?: React.MutableRefObject<HTMLInputElement>
  onSubmit?: (
    values: Record<string, any>,
    event?: React.BaseSyntheticEvent<object, any, any>
  ) => void
}

const ForgotPasswordForm = ({
  className,
  usernameRef,
  onSubmit,
  ...props
}: ForgotPasswordFormPropTypes): JSX.Element => {
  return (
    <Window
      className={[
        'bg-purple-300 flex flex-col rounded-lg w-96',
        className,
      ].join(' ')}
      childrenAttributes={{
        header: {
          children: <Window.Header>Forgot Password</Window.Header>,
          className:
            'bg-purple-800 text-gray-900 p-3 text-sm font-semibold rounded-t-lg',
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
