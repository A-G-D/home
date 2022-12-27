import { MdClose } from 'react-icons/md'
import Modal from 'react-modal'
import MobileNavBarMenu from 'src/components/MobileNavBarMenu'

const MobileNavBarMenuModal = ({ onClose, ...props }) => {
  return (
    <Modal
      ariaHideApp={false}
      className='w-full h-full flex flex-col z-[101] bg-primary-500'
      style={{
        overlay: {
          width: '100%',
          overflowY: 'scroll',
          zIndex: '100',
        },
      }}
      {...props}
    >
      <div className='self-stretch flex flex-row justify-end items-center h-[88px] px-6 py-3'>
        <button className='p-3' onClick={onClose}>
          <MdClose className='text-white stroke-2' />
        </button>
      </div>
      <MobileNavBarMenu
        className='flex-auto self-stretch'
        onMenuSelect={onClose}
      />
    </Modal>
  )
}

export default MobileNavBarMenuModal
