import { render } from '@redwoodjs/testing/web'

import NotePage from './NotePage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NotePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotePage />)
    }).not.toThrow()
  })
})
