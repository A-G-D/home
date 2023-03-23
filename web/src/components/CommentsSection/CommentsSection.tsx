import { FC, HTMLAttributes } from 'react'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useForm } from '@redwoodjs/forms'
import classNames from 'classnames'
import { useAuth } from 'src/auth'
import { QUERY as QUERY_COMMENTS } from 'src/components/CommentsCell'
import GuestCommentForm from 'src/components/forms/GuestCommentForm'
import CommentForm from 'src/components/forms/CommentForm'
import CommentsCell from 'src/components/CommentsCell'

const CREATE_COMMENT = gql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      name
      body
      createdAt
    }
  }
`

export interface CommentsSectionProps extends HTMLAttributes<HTMLDivElement> {
  postId: string
}

const CommentsSection: FC<CommentsSectionProps> = ({
  className,
  postId,
  ...props
}) => {
  const { currentUser } = useAuth()
  const formMethods = useForm({ mode: 'onBlur' })
  const [createComment, { loading, error }] = useMutation(CREATE_COMMENT, {
    refetchQueries: [{ query: QUERY_COMMENTS, variables: { postId } }],
    onCompleted: () => {
      toast.success('Comment Submitted!')
      formMethods.reset()
    },
  })
  const onSubmit = (input) => {
    const name = currentUser.name ?? currentUser.email.split('@')[0]
    createComment({ variables: { input: { postId, name, ...input } } })
  }

  return (
    <div
      className={classNames('flex flex-col items-stretch gap-8', className)}
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
