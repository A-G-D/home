import { formattedDate } from 'web/src/lib/utils'

const Comment = ({ comment }) => {
  return (
    <div className='bg-gray-200 flex flex-col gap-4 p-8 rounded-sm'>
      <header className='flex justify-between'>
        <h2 className='font-semibold'>{comment.name}</h2>
        <time className='text-xs italic' dateTime={comment.createdAt}>
          {formattedDate(comment.createdAt)}
        </time>
      </header>
      <p className='text-sm'>{comment.body}</p>
    </div>
  )
}

export default Comment
