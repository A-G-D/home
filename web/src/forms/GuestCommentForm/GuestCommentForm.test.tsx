import { render } from '@redwoodjs/testing/web'

import GuestCommentForm from './GuestCommentForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AnonCommentForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GuestCommentForm postId='1' />)
    }).not.toThrow()
  })
})
