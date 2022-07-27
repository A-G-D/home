import { render } from '@redwoodjs/testing/web'

import PuffUpElement from './PuffUpElement'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PuffUpElement', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PuffUpElement />)
    }).not.toThrow()
  })
})
