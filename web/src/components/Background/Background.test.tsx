import { render } from '@redwoodjs/testing/web'

import Background from './Background'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Background', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Background />)
    }).not.toThrow()
  })
})
