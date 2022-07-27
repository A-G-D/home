import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs"
import { SiGmail } from "react-icons/si"
import ContactFormModal from "src/components/ContactFormModal"

const SocialLinks = () => {
  const logo: HTMLElement = document.querySelector('#agd-logo')
  const [contactModalOpen, setContactModalOpen] = React.useState(false)
  const openContactModal = () => {
    setContactModalOpen(true)
  }
  const closeContactModal = (e) => {
    setContactModalOpen(false)
    setTimeout(() => {
      logo.blur()
    }, 0)
  }

  return (
    <ul className='flex flex-row justify-evenly items-center gap-x-3'>
      <li>
        <a href='https://github.com/A-G-D/'>
          <BsGithub />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/aloever-dulay-249226159'>
          <BsLinkedin />
        </a>
      </li>
      <li>
        <a href='https://twitter.com/__A_G_D__'>
          <BsTwitter />
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/agd.91939'>
          <BsInstagram />
        </a>
      </li>
      <li>
        <SiGmail className='hover:cursor-pointer' onClick={openContactModal} />
      </li>
      <ContactFormModal isOpen={contactModalOpen} onClose={closeContactModal} />
    </ul>
  )
}

export default SocialLinks
