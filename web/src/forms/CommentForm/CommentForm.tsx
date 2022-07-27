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
import UserInfo from 'src/components/UserInfo'

interface CommentFormPropTypes extends WindowPropTypes {
  user: {
    name: string
    picture?: string
  }
  postId: string
  loading?: boolean
  error?: any
  formMethods?: UseFormReturn<any, any>
  onSubmit?: (
    values: Record<string, any>,
    event?: React.BaseSyntheticEvent<object, any, any>
  ) => void
}

const CommentForm = ({
  className,
  user,
  postId,
  loading,
  error,
  formMethods,
  onSubmit,
  ...props
}: CommentFormPropTypes): JSX.Element => {
  return (
    <div className='flex rounded-md'>
      <Toaster />
      <div className='bg-violet-600 flex flex-col items-center gap-4 p-4 rounded-l-md'>
        <UserInfo username={user.name} picture={user.picture} />
      </div>
      <Form
        className='bg-violet-400 flex-auto flex flex-col items-stretch gap-8 p-4 rounded-r-md'
        onSubmit={onSubmit}
        error={error}
        formMethods={formMethods}
      >
        <TextAreaField
          name='body'
          className='flex-auto input-field'
          errorClassName='flex-auto input-field input-field-error'
          validation={{ required: true }}
        />
        <Submit disabled={loading} className='submit-button'>
          Add Comment
        </Submit>
      </Form>
    </div>
  )
}

export default CommentForm
