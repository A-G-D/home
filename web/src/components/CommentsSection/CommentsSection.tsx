import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useForm } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { QUERY as CommentsQuery } from 'src/components/CommentsCell'
import GuestCommentForm from 'src/forms/GuestCommentForm'
import CommentsCell from 'src/components/CommentsCell'
import CommentForm from 'src/forms/CommentForm'

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

export interface CommentsSectionPropTypes
  extends React.HTMLAttributes<HTMLDivElement> {
  postId: string
}

const CommentsSection = ({
  className,
  postId,
  ...props
}: CommentsSectionPropTypes): JSX.Element => {
  const { currentUser } = useAuth()
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
    <div
      className={[
        'flex flex-col items-stretch gap-8 px-12 py-12',
        className,
      ].join(' ')}
      {...props}
    >
      <CommentsCell postId={postId} />
      {currentUser == null ? (
        <GuestCommentForm
          postId={postId}
          loading={loading}
          error={error}
          formMethods={formMethods}
          onSubmit={onSubmit}
        />
      ) : (
        <CommentForm
          user={{ name: currentUser.email }}
          postId={postId}
          loading={loading}
          error={error}
          formMethods={formMethods}
          onSubmit={onSubmit}
        />
      )}
    </div>
  )
}

export default CommentsSection
