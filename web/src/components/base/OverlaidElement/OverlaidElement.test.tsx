import { render } from '@redwoodjs/testing/web'

import OverlaidElement from './OverlaidElement'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OverlaidElement', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OverlaidElement />)
    }).not.toThrow()
  })
})
