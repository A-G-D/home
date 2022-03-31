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
import Window from 'src/components/Window'

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
          className: 'bg-purple-800 p-3 rounded-t-[6px]',
        },
        body: {
          className: 'p-5 rounded-b-[6px]',
        },
      }}
      {...props}
    >
      <Toaster />
      <Form
        className='flex-auto flex flex-col items-stretch gap-4'
        onSubmit={onSubmit}
        error={error}
        formMethods={formMethods}
        {...props}
      >
        <div className='flex flex-col'>
          <Label name='name' errorClassName='error'>
            Name
          </Label>
          <TextField
            name='name'
            validation={{
              required: false,
              pattern: {
                value: /(?:[_a-zA-Z0-9]+)(?: [_a-zA-Z0-9]+)*/,
                message: 'Please enter a valid name.',
              },
            }}
            errorClassName='error'
          />
          <FieldError name='name' className='error' />
        </div>

        <div className='flex flex-col'>
          <Label name='email' errorClassName='error'>
            Email
          </Label>
          <TextField
            name='email'
            validation={{
              required: true,
              pattern: {
                value: /^[._a-zA-Z0-9]+@[^.]+\..+$/,
                message: 'Please enter a valid email address.',
              },
            }}
            errorClassName='error'
          />
          <FieldError name='email' className='error' />
        </div>

        <div className='flex flex-col'>
          <Label name='message' errorClassName='error'>
            Message
          </Label>
          <TextAreaField
            className='flex-auto'
            name='message'
            validation={{ required: true }}
            errorClassName='error'
          />
          <FieldError name='message' className='error' />
        </div>

        <Submit
          className='bg-violet-600 self-stretch p-2 rounded-[8px]'
          disabled={loading}
        >
          Submit
        </Submit>
      </Form>
    </Window>
  )
}

export default ContactForm