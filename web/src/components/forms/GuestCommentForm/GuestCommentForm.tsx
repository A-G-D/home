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
import classNames from 'classnames'
import { FC } from 'react'
import Component from 'src/components/base/Component'
import Window, { WindowProps } from 'src/components/base/Window'

export interface GuestCommentFormProps extends WindowProps {
  postId: string
  loading?: boolean
  error?: any
  formMethods?: UseFormReturn<any, any>
  onSubmit?: (
    values: Record<string, any>,
    event?: React.BaseSyntheticEvent<object, any, any>
  ) => void
}

const GuestCommentForm: FC<GuestCommentFormProps> = ({
  className,
  postId,
  loading,
  error,
  formMethods,
  onSubmit,
  ...props
}) => {
  return (
    <Window
      className={classNames('bg-primary-200 rounded-md min-w-full', className)}
      childrenAttributes={{
        header: {
          children: <Window.Header>Leave a Comment</Window.Header>,
          className:
            'bg-primary-500 text-gray-200 text-sm font-semibold p-3 rounded-t-md',
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
        <Submit className='submit-button' disabled={loading}>
          <Component loading={loading}>Submit</Component>
        </Submit>
      </Form>
    </Window>
  )
}

export default GuestCommentForm
