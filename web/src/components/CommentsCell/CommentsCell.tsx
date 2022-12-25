import type { CommentsQuery } from 'types/graphql'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'
import Comment from 'src/components/base/Comment'
import { useAuth } from '@redwoodjs/auth'
import { FC } from 'react'

export const QUERY = gql`
  query CommentsQuery($postId: String!) {
    comments(postId: $postId) {
      id
      name
      body
      createdAt
      postId
    }
  }
`

export const DELETE = gql`
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
      className={['flex flex-col items-stretch gap-8', className].join(' ')}
      {...props}
    >
      <h2 className='bg-violet-600 text-center text-gray-800 text-md font-semibold p-3 rounded-md'>
        Comments
      </h2>
      <div className='flex flex-col items-stretch'>{children}</div>
    </section>
  )
}

export const Loading = () => (
  <CommentsDisplay>
    <div className='flex-center gap-2'>
      <div className='spin' />
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
  const [deleteComment] = useMutation(DELETE, {
    refetchQueries: [
      {
        query: QUERY,
        variables: { postId: comments[0].postId },
      },
    ],
  })

  const isModerator = hasRole('admin') || hasRole('moderator')

  const onLike = (e, comment) => {}
  const onReply = (e, comment) => {}
  const onDelete = (e, comment) => {
    if (confirm('Confirm Delete Reply')) {
      deleteComment({ variables: { id: comment.id } })
    }
  }

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
