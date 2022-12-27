import { render } from '@redwoodjs/testing/web'

import ResumeWrapper from './ResumeWrapper'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ResumeWrapper', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ResumeWrapper />)
    }).not.toThrow()
  })
})
