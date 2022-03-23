import { render } from '@redwoodjs/testing/web'

import Window from './Window'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Window', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Window />)
    }).not.toThrow()
  })
})
