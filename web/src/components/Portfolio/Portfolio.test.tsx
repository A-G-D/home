import { render } from '@redwoodjs/testing/web'

import Portfolio from './Portfolio'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Portfolio', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Portfolio />)
    }).not.toThrow()
  })
})
