import { render } from '@redwoodjs/testing/web'

import ResumePage from './ResumePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ResumePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ResumePage />)
    }).not.toThrow()
  })
})
