import type { CommentsQuery } from 'types/graphql'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'
import { FC } from 'react'
import classNames from 'classnames'
import { useAuth } from 'src/auth'
import { useListener } from 'src/lib/hooks'
import Comment from 'src/components/base/Comment'
import Spinner from 'src/components/base/Spinner'

export const QUERY = gql`
  query CommentsQuery($postId: String!) {
    comments(postId: $postId) {
      id
      name
      body
      likes
      createdAt
      postId
    }
  }
`

export const DELETE_COMMENT = gql`
  mutation DeleteCommentMutation($id: String!) {
    deleteComment(id: $id) {
      postId
    }
  }
`

type CommentsDisplayProps = React.HTMLAttributes<HTMLElement>

const CommentsDisplay: FC<CommentsDisplayProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={classNames('flex flex-col items-stretch gap-8', className)}
      {...props}
    >
      <h2 className='bg-primary-600 text-center text-gray-200 text-md font-semibold p-3 rounded-md'>
        Comments
      </h2>
      <div className='flex flex-col items-stretch'>{children}</div>
    </section>
  )
}

export const Loading = () => (
  <CommentsDisplay>
    <div className='flex-center gap-2'>
      <Spinner />
      Loading...
    </div>
  </CommentsDisplay>
)

export const Empty = () => (
  <CommentsDisplay>
    <div className='text-center'>No Comments Yet</div>
  </CommentsDisplay>
)

export const Failure = ({ error }: CellFailureProps) => (
  <CommentsDisplay>
    <div className='text-center' style={{ color: 'red' }}>
      Error: {error.message}
    </div>
  </CommentsDisplay>
)

export const Success = ({ comments }: CellSuccessProps<CommentsQuery>) => {
  const { hasRole } = useAuth()
  const [deleteComment] = useMutation(DELETE_COMMENT, {
    refetchQueries: [
      {
        query: QUERY,
        variables: { postId: comments[0].postId },
      },
    ],
  })

  const isModerator = hasRole('admin') || hasRole('moderator')

  const onLike = useListener((e, comment) => {})

  const onReply = useListener((e, comment) => {})

  const onDelete = useListener((e, comment) => {
    if (confirm('Confirm Delete Reply')) {
      deleteComment({ variables: { id: comment.id } })
    }
  })

  return (
    <CommentsDisplay>
      <ul className='flex flex-col gap-8'>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              <Comment
                comment={comment}
                onLike={onLike}
                onReply={onReply}
                onDelete={isModerator ? onDelete : null}
              />
            </li>
          )
        })}
      </ul>
    </CommentsDisplay>
  )
}
