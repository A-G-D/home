import { render } from '@redwoodjs/testing/web'

import ContactFormModal from './ContactFormModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ContactFormModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContactFormModal />)
    }).not.toThrow()
  })
})
