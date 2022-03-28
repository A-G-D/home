import { render } from '@redwoodjs/testing/web'

import CommentsSection from './CommentsSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CommentsSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommentsSection />)
    }).not.toThrow()
  })
})
