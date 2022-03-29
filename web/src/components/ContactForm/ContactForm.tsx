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
    <>
      <div className='flex flex-row justify-between px-4 py-3'>
        <div className='w-[16px]' />
        <div className='flex-auto text-center'>What Can I Help You With?</div>
        <div className='w-[16px] flex flex-row justify-end items-center'>
          <RiCloseFill className='hover:cursor-pointer' onClick={onClose} />
        </div>
      </div>
      <Toaster />
      <Form
        className='flex flex-col flex-auto px-4 py-3'
        onSubmit={onSubmit}
        error={error}
        formMethods={formMethods}
        {...props}
      >
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

        <Submit disabled={loading}>Submit</Submit>
      </Form>
    </>
  )
}

export default ContactForm
