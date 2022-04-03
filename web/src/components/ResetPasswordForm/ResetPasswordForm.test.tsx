import { render } from '@redwoodjs/testing/web'

import ResetPasswordForm from './ResetPasswordForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ResetPasswordForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ResetPasswordForm />)
    }).not.toThrow()
  })
})
