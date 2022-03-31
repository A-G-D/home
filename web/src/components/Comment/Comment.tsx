import { formattedDate } from 'web/src/lib/utils'

export interface CommentPropTypes extends React.HTMLAttributes<HTMLDivElement> {
  comment: {
    name: string
    body: string
    createdAt: string
  }
  onLike?: React.MouseEventHandler<HTMLButtonElement>
  onReply?: React.MouseEventHandler<HTMLButtonElement>
}

const Comment = ({
  className,
  comment,
  onLike,
  onReply,
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
        <button className='text-xs' onClick={onLike}>
          Like
        </button>
        <button className='text-xs' onClick={onReply}>
          Reply
        </button>
      </footer>
    </div>
  )
}

export default Comment