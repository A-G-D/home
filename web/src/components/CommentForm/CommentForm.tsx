import Window from 'src/components/Window'
import {
  FieldError,
  Form,
  FormError,
  FormProps,
  Label,
  Submit,
  TextAreaField,
  TextField,
  useForm,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { QUERY as CommentsQuery } from 'src/components/CommentsCell'

const CREATE = gql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      name
      body
      createdAt
    }
  }
`

interface CommentFormPropTypes extends FormProps {
  postId: string
}

const CommentForm = ({
  className,
  postId,
  ...props
}: CommentFormPropTypes): JSX.Element => {
  const formMethods = useForm({ mode: 'onBlur' })
  const [createComment, { loading, error }] = useMutation(CREATE, {
    refetchQueries: [{ query: CommentsQuery, variables: { postId } }],
    onCompleted: () => {
      toast.success('Comment Submitted!')
      formMethods.reset()
    },
  })
  const onSubmit = (input) => {
    createComment({ variables: { input: { postId, ...input } } })
  }

  return (
    <Window
      className={['bg-purple-300 rounded-md min-w-full', className].join(' ')}
      childrenAttributes={{
        header: {
          children: <Window.Header>Leave a Comment</Window.Header>,
          className:
            'bg-purple-800 text-gray-900 text-sm font-semibold p-3 rounded-t-md',
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

export default CommentForm
