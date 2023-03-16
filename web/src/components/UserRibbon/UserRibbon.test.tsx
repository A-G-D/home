import { render } from '@redwoodjs/testing/web'

import UserRibbon from './UserRibbon'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserRibbon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserRibbon />)
    }).not.toThrow()
  })
})
