import type { CommentsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Comment from 'src/components/Comment'

export const QUERY = gql`
  query CommentsQuery {
    comments {
      id
      name
      body
      createdAt
      post {
        id
        title
        body
        createdAt
      }
    }
  }
`

export const Loading = () => (
  <div className='flex justify-center items-center gap-2'>
    <div className='spin' />
    Loading...
  </div>
)

export const Empty = () => (
  <div className='flex justify-center items-center'>No Comments Yet</div>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div className='flex justify-center items-center' style={{ color: 'red' }}>
    Error: {error.message}
  </div>
)

export const Success = ({ comments }: CellSuccessProps<CommentsQuery>) => {
  return (
    <ul className='flex flex-col gap-4'>
      {comments.map((comment) => {
        return (
          <li key={comment.id}>
            <Comment comment={comment}></Comment>
          </li>
        )
      })}
    </ul>
  )
}
