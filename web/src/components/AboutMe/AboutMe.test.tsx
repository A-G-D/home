import { render } from '@redwoodjs/testing/web'

import AboutMe from './AboutMe'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AboutMe', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AboutMe />)
    }).not.toThrow()
  })
})
