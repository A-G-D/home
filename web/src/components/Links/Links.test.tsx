import { render } from '@redwoodjs/testing/web'

import Links from './Links'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Links', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Links />)
    }).not.toThrow()
  })
})
