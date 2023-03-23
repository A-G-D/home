import { Form, Submit, TextAreaField, UseFormReturn } from '@redwoodjs/forms'
import { Toaster } from '@redwoodjs/web/toast'
import classNames from 'classnames'
import { FC, HTMLAttributes } from 'react'
import { useAuth } from 'src/auth'
import Component from 'src/components/base/Component/Component'
import UserInfo from 'src/components/UserInfo'

export interface CommentFormProps extends HTMLAttributes<HTMLDivElement> {
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
  postId,
  loading,
  error,
  formMethods,
  onSubmit,
  ...props
}) => {
  const { currentUser } = useAuth()
  const userName = currentUser.name ?? currentUser.email.split('@')[0]

  return (
    <div className={classNames('flex rounded-md', className)} {...props}>
      <Toaster />
      <div className='bg-primary-600 flex flex-col items-center gap-4 p-4 rounded-l-md'>
        <UserInfo username={userName} picture={currentUser.picture as any} />
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
        <Submit className='submit-button' disabled={loading}>
          <Component loading={loading}>Add Comment</Component>
        </Submit>
      </Form>
    </div>
  )
}

export default CommentForm
