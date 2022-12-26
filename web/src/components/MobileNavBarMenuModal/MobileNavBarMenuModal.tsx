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
      <button className='self-end p-4' onClick={onClose}>
        <MdClose className='text-white stroke-2' />
      </button>
      <MobileNavBarMenu
        className='flex-auto self-stretch'
        onMenuSelect={onClose}
      />
    </Modal>
  )
}

export default MobileNavBarMenuModal
