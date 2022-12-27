import { render } from '@redwoodjs/testing/web'

import Resume from './Resume'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Resume', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Resume />)
    }).not.toThrow()
  })
})
