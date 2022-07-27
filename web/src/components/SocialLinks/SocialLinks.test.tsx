import { render } from '@redwoodjs/testing/web'

import SocialLinks from './SocialLinks'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SocialLinks', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SocialLinks />)
    }).not.toThrow()
  })
})
