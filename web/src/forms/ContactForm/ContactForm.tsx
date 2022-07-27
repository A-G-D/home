import { RiCloseFill } from 'react-icons/ri'
import {
  FieldError,
  FieldValues,
  Form,
  FormError,
  Label,
  Submit,
  TextAreaField,
  TextField,
  UseFormReturn,
  FormProps,
} from '@redwoodjs/forms'
import { Toaster } from '@redwoodjs/web/toast'
import Window from 'src/components/base/Window'

export interface ContactFormPropTypes extends FormProps {
  formMethods?: UseFormReturn<FieldValues, any>
  error?: any
  loading?: boolean
  onClose?: React.MouseEventHandler<SVGElement>
  onSubmit?: (
    values: Record<string, any>,
    event?: React.BaseSyntheticEvent<object, any, any>
  ) => void
}

const ContactForm = ({
  className,
  onClose,
  onSubmit,
  formMethods,
  error,
  loading,
  ...props
}: ContactFormPropTypes): JSX.Element => {
  return (
    <Window
      className={[
        'bg-purple-300 flex-auto flex flex-col rounded-[8px] max-w-full w-[720px] h-[50%]',
        className,
      ].join(' ')}
      childrenAttributes={{
        header: {
          children: (
            <Window.Header
              controlBar={
                <RiCloseFill
                  className='hover:cursor-pointer hover:bg-black/40 rounded-full'
                  onClick={onClose}
                />
              }
            >
              What Can I Help You With?
            </Window.Header>
          ),
          className:
            'bg-purple-800 text-gray-900 p-3 text-sm font-semibold rounded-t-[6px]',
        },
        body: {
          className: 'p-5 rounded-b-[6px]',
        },
      }}
      {...props}
    >
      <Toaster />
      <Form
        className='flex-auto flex flex-col items-stretch gap-8'
        onSubmit={onSubmit}
        error={error}
        formMethods={formMethods}
        {...props}
      >
        <div className='flex flex-col items-stretch gap-4'>
          <div className='flex flex-col'>
            <Label
              className='input-label'
              name='name'
              errorClassName='input-label input-label-error'
            >
              Name
            </Label>
            <TextField
              className='input-field'
              name='name'
              validation={{
                required: false,
                pattern: {
                  value: /(?:[_a-zA-Z0-9]+)(?: [_a-zA-Z0-9]+)*/,
                  message: 'Please enter a valid name.',
                },
              }}
              errorClassName='input-field input-field-error'
            />
            <FieldError name='name' className='input-error' />
          </div>

          <div className='flex flex-col'>
            <Label
              className='input-label'
              name='email'
              errorClassName='input-label input-label-error'
            >
              Email
            </Label>
            <TextField
              className='input-field'
              name='email'
              validation={{
                required: true,
                pattern: {
                  value: /^[._a-zA-Z0-9]+@[^.]+\..+$/,
                  message: 'Please enter a valid email address.',
                },
              }}
              errorClassName='input-field input-field-error'
            />
            <FieldError name='email' className='input-error' />
          </div>

          <div className='flex flex-col'>
            <Label
              className='input-label'
              name='message'
              errorClassName='input-label input-label-error'
            >
              Message
            </Label>
            <TextAreaField
              className='input-field flex-auto'
              name='message'
              validation={{ required: true }}
              errorClassName='input-field input-field-error flex-auto'
            />
            <FieldError name='message' className='input-error' />
          </div>
        </div>

        <Submit className='submit-button' disabled={loading}>
          Submit
        </Submit>
      </Form>
    </Window>
  )
}

export default ContactForm
