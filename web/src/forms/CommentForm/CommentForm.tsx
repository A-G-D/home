import { Form, Submit, TextAreaField, UseFormReturn } from '@redwoodjs/forms'
import { Toaster } from '@redwoodjs/web/toast'
import classNames from 'classnames'
import { FC, HTMLAttributes } from 'react'
import UserInfo from 'src/components/UserInfo'

export interface CommentFormProps extends HTMLAttributes<HTMLDivElement> {
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

const CommentForm: FC<CommentFormProps> = ({
  className,
  user,
  postId,
  loading,
  error,
  formMethods,
  onSubmit,
  ...props
}) => {
  return (
    <div className={classNames('flex rounded-md', className)} {...props}>
      <Toaster />
      <div className='bg-primary-600 flex flex-col items-center gap-4 p-4 rounded-l-md'>
        <UserInfo username={user.name} picture={user.picture} />
      </div>
      <Form
        className='bg-primary-400 flex-auto flex flex-col items-stretch gap-8 p-4 rounded-r-md'
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
