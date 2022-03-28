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

type CommentsDisplayPropTypes = React.HTMLAttributes<HTMLElement>

const CommentsDisplay = ({ children, className }: CommentsDisplayPropTypes) => {
  return (
    <section
      className={['flex flex-col items-stretch rounded-[6px]', className].join(
        ' '
      )}
    >
      <h2 className='bg-purple-800 text-center text-md p-3 rounded-t-[6px]'>
        Comments
      </h2>
      <div className='bg-purple-300 flex flex-col items-stretch p-5 rounded-b-[6px]'>
        {children}
      </div>
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
  return (
    <CommentsDisplay>
      <ul className='flex flex-col gap-4'>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              <Comment comment={comment}></Comment>
            </li>
          )
        })}
      </ul>
    </CommentsDisplay>
  )
}
