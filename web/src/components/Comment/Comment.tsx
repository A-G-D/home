import { BiLike } from 'react-icons/bi'
import { BsReply } from 'react-icons/bs'
import { IoEllipsisHorizontal } from 'react-icons/io5'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { TiUser } from 'react-icons/ti'
import Tippy from '@tippyjs/react'
import { formattedDateTime } from 'src/lib/utils'

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

interface CommentOptionsPropTypes
  extends React.HTMLAttributes<HTMLUListElement> {
  comment?: CommentData
  onShare?: CommentActionHandler
  onReport?: CommentActionHandler
}

const CommentOptions = ({
  className,
  comment,
  onShare,
  onReport,
  ...props
}: CommentOptionsPropTypes): JSX.Element => {
  return (
    <ul
      className={[
        'bg-violet-300 flex flex-col items-stretch rounded py-1',
        className,
      ].join(' ')}
      {...props}
    >
      <li>
        <button
          className='bg-violet-300 hover:bg-violet-400 text-gray-600 hover:text-gray-700 text-sm text-center font-semibold w-full px-4 py-2 hover:cursor-pointer'
          onClick={(e) => {
            onShare(e, comment)
          }}
        >
          Share
        </button>
      </li>
      <li>
        <button
          className='bg-violet-300 hover:bg-violet-400 text-gray-600 hover:text-gray-700 text-sm text-center font-semibold w-full px-4 py-2 hover:cursor-pointer'
          onClick={(e) => {
            onReport(e, comment)
          }}
        >
          Report
        </button>
      </li>
    </ul>
  )
}

interface CommenterInfoPropTypes extends React.HTMLAttributes<HTMLDivElement> {
  picture: string
  username: string
}

const CommenterInfo = ({
  className,
  picture,
  username,
  ...props
}: CommenterInfoPropTypes): JSX.Element => {
  return (
    <div
      className={[
        'bg-violet-600 flex flex-col items-center gap-4 p-4 rounded-l-md',
        className,
      ].join(' ')}
      {...props}
    >
      {!!picture ? (
        <img
          className='shadow-[0px_0px_8px_4px_gray] shadow-gray-700 bg-violet-400 border-violet-500 border-2 object-cover overflow-hidden text-xs w-[96px] h-[96px] rounded-full'
          src={picture}
          alt='Profile Picture'
        />
      ) : (
        <TiUser className='shadow-[0px_0px_8px_4px_gray] shadow-gray-700 text-gray-600 bg-violet-400 border-violet-500 border-2 overflow-hidden w-[96px] h-[96px] rounded-full' />
      )}
      <div className='bg-violet-300 text-gray-800 text-md font-semibold px-4 py-1 rounded-full'>
        {username}
      </div>
    </div>
  )
}

interface CommentInfoPropTypes extends React.HTMLAttributes<HTMLDivElement> {
  comment: CommentData
  onLike?: CommentActionHandler
  onReply?: CommentActionHandler
  onDelete?: CommentActionHandler
  onShare?: CommentActionHandler
  onReport?: CommentActionHandler
}

const CommentInfo = ({
  className,
  comment,
  onLike,
  onReply,
  onDelete,
  onShare,
  onReport,
  ...props
}: CommentInfoPropTypes): JSX.Element => {
  const dateTime = formattedDateTime(comment.createdAt)
  return (
    <div
      className={['bg-violet-400 flex flex-col rounded-r-md', className].join(
        ' '
      )}
      {...props}
    >
      <header className='flex justify-between items-center p-4 rounded-t-md'>
        <time className='text-xs italic' dateTime={comment.createdAt}>
          {dateTime.date + ' ' + dateTime.time}
        </time>
        <Tippy
          className='shadow-md shadow-gray-900'
          content={
            <CommentOptions
              comment={comment}
              onShare={onShare}
              onReport={onReport}
            />
          }
          placement='bottom'
          trigger='click'
          interactive={true}
          arrow={false}
          animation='shift-away'
          duration={200}
          maxWidth={360}
        >
          <button>
            <IoEllipsisHorizontal />
          </button>
        </Tippy>
      </header>
      <div className='flex-auto px-4'>
        <p className='bg-purple-300 w-full h-full text-sm p-4 rounded-sm'>
          {comment.body}
        </p>
      </div>
      <footer className='flex gap-4 p-4 rounded-b-md'>
        {onLike && (
          <button
            className='flex gap-1'
            onClick={(e) => {
              onLike(e, comment)
            }}
          >
            <BiLike />
            <span className='text-xs font-semibold'>Like</span>
          </button>
        )}
        {onReply && (
          <button
            className='flex gap-1'
            onClick={(e) => {
              onReply(e, comment)
            }}
          >
            <BsReply />
            <span className='text-xs font-semibold'>Reply</span>
          </button>
        )}
        {onDelete && (
          <button
            className='flex gap-1'
            onClick={(e) => {
              onDelete(e, comment)
            }}
          >
            <RiDeleteBin6Line />
            <span className='text-xs font-semibold'>Delete</span>
          </button>
        )}
      </footer>
    </div>
  )
}

export interface CommentPropTypes extends React.HTMLAttributes<HTMLDivElement> {
  comment: CommentData
  onLike?: CommentActionHandler
  onReply?: CommentActionHandler
  onDelete?: CommentActionHandler
  onShare?: CommentActionHandler
  onReport?: CommentActionHandler
}

const Comment = ({
  className,
  comment,
  onLike,
  onReply,
  onDelete,
  onShare,
  onReport,
  ...props
}: CommentPropTypes): JSX.Element => {
  return (
    <div className={['flex'].join(' ')} {...props}>
      <CommenterInfo picture='' username={comment.name} />
      <CommentInfo
        className='flex-auto'
        comment={comment}
        onLike={onLike}
        onReply={onReply}
        onDelete={onDelete}
        onShare={onShare}
        onReport={onReport}
      />
    </div>
  )
}

export default Comment
