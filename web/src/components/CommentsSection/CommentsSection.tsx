import { FC, HTMLAttributes } from 'react'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useForm } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { QUERY as CommentsQuery } from 'src/components/CommentsCell'
import GuestCommentForm from 'src/components/forms/GuestCommentForm'
import CommentForm from 'src/components/forms/CommentForm'
import CommentsCell from 'src/components/CommentsCell'
import classNames from 'classnames'

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
      className={classNames(
        'flex flex-col items-stretch gap-8 px-12 py-12',
        className
      )}
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
