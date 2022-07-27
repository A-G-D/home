import { TiUser } from 'react-icons/ti'

export interface UserInfoPropTypes extends React.HTMLAttributes<HTMLDivElement> {
  username: string
  picture?: string
}

const UserInfo: React.FC<UserInfoPropTypes> = ({
  className,
  username,
  picture,
  ...props
}) => {
  return (
    <div
      className={['flex flex-col items-center gap-4 w-fit', className].join(
        ' '
      )}
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

export default UserInfo
