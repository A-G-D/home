import Window from 'src/components/Window'
import {
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
      className={['bg-gray-200 rounded-[6px] min-w-full', className].join(' ')}
      childrenAttributes={{
        header: {
          children: <Window.Header>Leave a Comment</Window.Header>,
          className: 'bg-gray-400 p-3 rounded-t-[6px]',
        },
        body: {
          className: 'p-5 rounded-b-[6px]',
        },
      }}
      {...props}
    >
      <Toaster />
      <Form
        className='flex flex-col items-stretch gap-4 w-full'
        onSubmit={onSubmit}
        formMethods={formMethods}
      >
        <FormError
          error={error}
          titleClassName='font-semibold'
          wrapperClassName='bg-red-100 text-red-900 text-sm p-3 rounded'
        />
        <div className='flex flex-col'>
          <Label name='name' className=''>
            Name
          </Label>
          <TextField name='name' className='' validation={{ required: true }} />
        </div>
        <div className='flex flex-col'>
          <Label name='body' className=''>
            Comment
          </Label>
          <TextAreaField
            name='body'
            className=''
            validation={{ required: true }}
          />
        </div>
        <Submit
          disabled={loading}
          className='bg-gray-600 self-stretch p-2 rounded-[8px]'
        >
          Submit
        </Submit>
      </Form>
    </Window>
  )
}

export default CommentForm
