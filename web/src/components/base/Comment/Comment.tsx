import { BiLike } from 'react-icons/bi'
import { BsReply } from 'react-icons/bs'
import { IoEllipsisHorizontal } from 'react-icons/io5'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { formattedDateTime } from 'src/lib/utils'
import Tippy from '@tippyjs/react'
import UserInfo from 'src/components/UserInfo'
import { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'

interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string
  iconElement: JSX.Element
}

const IconButton: FC<IconButtonProps> = ({
  text,
  iconElement,
  className,
  ...props
}) => (
  <button className={classNames('flex gap-1', className)} {...props}>
    {iconElement}
    <span className='text-xs font-semibold'>{text}</span>
  </button>
)

export interface CommentData {
  id: string
  name: string
  body: string
  likes?: number
  createdAt: string
  postId?: string
}

export type CommentActionHandler = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  comment: CommentData
) => void

export interface CommentOptionsProps extends HTMLAttributes<HTMLUListElement> {
  comment?: CommentData
  onShare?: CommentActionHandler
  onReport?: CommentActionHandler
}

const CommentOptions: FC<CommentOptionsProps> = ({
  className,
  comment,
  onShare,
  onReport,
  ...props
}) => {
  return (
    <ul
      className={classNames(
        'bg-primary-800 flex flex-col items-stretch rounded py-1',
        className
      )}
      {...props}
    >
      <li>
        <button
          className='hover:bg-primary-600 text-gray-300 hover:text-white text-sm text-center font-semibold w-full px-4 py-2 hover:cursor-pointer'
          onClick={(e) => {
            onShare(e, comment)
          }}
        >
          Share
        </button>
      </li>
      <li>
        <button
          className='hover:bg-primary-600 text-gray-300 hover:text-white text-sm text-center font-semibold w-full px-4 py-2 hover:cursor-pointer'
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

export interface CommenterInfoProps extends HTMLAttributes<HTMLDivElement> {
  picture: string
  username: string
}

const CommenterInfo: FC<CommenterInfoProps> = ({
  className,
  picture,
  username,
  ...props
}) => {
  return (
    <div
      className={classNames(
        'bg-primary-600 flex flex-col items-center gap-4 p-4 rounded-l-md',
        className
      )}
      {...props}
    >
      <UserInfo username={username} picture={picture} />
    </div>
  )
}

export interface CommentInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  comment: CommentData
  onLike?: CommentActionHandler
  onReply?: CommentActionHandler
  onDelete?: CommentActionHandler
  onShare?: CommentActionHandler
  onReport?: CommentActionHandler
}

const CommentInfo: FC<CommentInfoProps> = ({
  className,
  comment,
  onLike,
  onReply,
  onDelete,
  onShare,
  onReport,
  ...props
}) => {
  const dateTime = formattedDateTime(comment.createdAt).dateTime
  return (
    <div
      className={classNames(
        'bg-primary-200 flex flex-col rounded-r-md',
        className
      )}
      {...props}
    >
      <header className='flex justify-between items-center p-4 rounded-t-md'>
        <time className='text-xs italic' dateTime={comment.createdAt}>
          {dateTime}
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
          <button className='hover:bg-primary-500 p-1 rounded-full'>
            <IoEllipsisHorizontal />
          </button>
        </Tippy>
      </header>
      <div className='flex-auto px-4'>
        <p className='bg-primary-100 w-full h-full text-sm p-4 rounded-sm'>
          {comment.body}
        </p>
      </div>
      <footer className='flex gap-4 p-4 rounded-b-md'>
        {onLike && (
          <IconButton
            text='Like'
            iconElement={<BiLike />}
            onClick={(e) => onLike(e, comment)}
          />
        )}
        {onReply && (
          <IconButton
            text='Reply'
            iconElement={<BsReply />}
            onClick={(e) => onReply(e, comment)}
          />
        )}
        {onDelete && (
          <IconButton
            text='Delete'
            iconElement={<RiDeleteBin6Line />}
            onClick={(e) => onDelete(e, comment)}
          />
        )}
      </footer>
    </div>
  )
}

export interface CommentProps extends HTMLAttributes<HTMLDivElement> {
  comment: CommentData
  onLike?: CommentActionHandler
  onReply?: CommentActionHandler
  onDelete?: CommentActionHandler
  onShare?: CommentActionHandler
  onReport?: CommentActionHandler
}

const Comment: FC<CommentProps> = ({
  className,
  comment,
  onLike,
  onReply,
  onDelete,
  onShare,
  onReport,
  ...props
}) => {
  return (
    <div className={classNames('flex', className)} {...props}>
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
