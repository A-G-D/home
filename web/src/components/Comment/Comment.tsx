import { formattedDate } from 'src/lib/utils'

interface CommentData {
  id: string
  name: string
  body: string
  createdAt: string
  postId: string
}

export type CommentActionHandler = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  comment: CommentData
) => void

export interface CommentPropTypes extends React.HTMLAttributes<HTMLDivElement> {
  comment: CommentData
  onLike?: CommentActionHandler
  onReply?: CommentActionHandler
  onDelete?: CommentActionHandler
}

const Comment = ({
  className,
  comment,
  onLike,
  onReply,
  onDelete,
  ...props
}: CommentPropTypes): JSX.Element => {
  return (
    <div
      className={[
        'bg-gray-200 flex flex-col gap-4 p-4 rounded-sm',
        className,
      ].join(' ')}
      {...props}
    >
      <header className='flex justify-between'>
        <h2 className='font-semibold'>{comment.name}</h2>
        <time className='text-xs italic' dateTime={comment.createdAt}>
          {formattedDate(comment.createdAt)}
        </time>
      </header>
      <p className='text-sm'>{comment.body}</p>
      <footer className='flex gap-4'>
        {onLike && (
          <button
            className='text-xs'
            onClick={(e) => {
              onLike(e, comment)
            }}
          >
            Like
          </button>
        )}
        {onReply && (
          <button
            className='text-xs'
            onClick={(e) => {
              onReply(e, comment)
            }}
          >
            Reply
          </button>
        )}
        {onDelete && (
          <button
            className='text-xs'
            onClick={(e) => {
              onDelete(e, comment)
            }}
          >
            Delete
          </button>
        )}
      </footer>
    </div>
  )
}

export default Comment
