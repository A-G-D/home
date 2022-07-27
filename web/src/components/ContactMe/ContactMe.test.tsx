import { render } from '@redwoodjs/testing/web'

import ContactMe from './ContactMe'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ContactMe', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContactMe />)
    }).not.toThrow()
  })
})
