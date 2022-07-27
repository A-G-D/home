import {
  FieldError,
  Form,
  Label,
  Submit,
  TextAreaField,
  TextField,
  UseFormReturn,
} from '@redwoodjs/forms'
import { Toaster } from '@redwoodjs/web/toast'
import Window, { WindowPropTypes } from 'src/components/base/Window'

interface GuestCommentFormPropTypes extends WindowPropTypes {
  postId: string
  loading?: boolean
  error?: any
  formMethods?: UseFormReturn<any, any>
  onSubmit?: (
    values: Record<string, any>,
    event?: React.BaseSyntheticEvent<object, any, any>
  ) => void
}

const GuestCommentForm = ({
  className,
  postId,
  loading,
  error,
  formMethods,
  onSubmit,
  ...props
}: GuestCommentFormPropTypes): JSX.Element => {
  return (
    <Window
      className={['bg-violet-400 rounded-md min-w-full', className].join(' ')}
      childrenAttributes={{
        header: {
          children: <Window.Header>Leave a Comment</Window.Header>,
          className:
            'bg-violet-600 text-gray-900 text-sm font-semibold p-3 rounded-t-md',
        },
        body: {
          className: 'p-5 rounded-b-md',
        },
      }}
      {...props}
    >
      <Toaster />
      <Form
        className='flex flex-col items-stretch gap-8 w-full'
        onSubmit={onSubmit}
        error={error}
        formMethods={formMethods}
      >
        <div className='flex flex-col items-stretch gap-4'>
          <div className='flex flex-col items-stretch'>
            <Label
              name='name'
              className='input-label'
              errorClassName='input-label input-label-error'
            >
              Name
            </Label>
            <TextField
              name='name'
              className='input-field'
              errorClassName='input-field input-field-error'
              validation={{ required: true }}
            />
            <FieldError name='name' className='input-error' />
          </div>
          <div className='flex flex-col'>
            <Label
              name='body'
              className='input-label'
              errorClassName='input-label input-label-error'
            >
              Comment
            </Label>
            <TextAreaField
              name='body'
              className='input-field'
              errorClassName='input-field input-field-error'
              validation={{ required: true }}
            />
            <FieldError name='body' className='input-error' />
          </div>
        </div>
        <Submit disabled={loading} className='submit-button'>
          Submit
        </Submit>
      </Form>
    </Window>
  )
}

export default GuestCommentForm
