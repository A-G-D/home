import Modal from 'react-modal'
import { useForm } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'
import { useListener } from 'src/lib/hooks'
import ContactForm from 'src/components/forms/ContactForm'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactFormModal = ({ onClose, ...props }) => {
  const formMethods = useForm({ mode: 'onBlur' })
  const [createContact, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for reaching out!')
      formMethods.reset()
    },
  })
  const onSubmit = useListener((input) => {
    createContact({ variables: { input } })
  })

  return (
    <Modal
      ariaHideApp={false}
      className='max-w-full m-auto z-[101]'
      style={{
        overlay: {
          maxWidth: '100%',
          display: 'flex',
          justifyContents: 'center',
          alignItems: 'center',
          overflowY: 'scroll',
          zIndex: '100',
        },
      }}
      {...props}
    >
      <ContactForm
        error={error}
        loading={loading}
        formMethods={formMethods}
        onClose={onClose}
        onSubmit={onSubmit}
      />
    </Modal>
  )
}

export default ContactFormModal
