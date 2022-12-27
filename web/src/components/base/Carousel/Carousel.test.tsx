import { render } from '@redwoodjs/testing/web'

import Slideshow from './Slideshow'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Slideshow', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Slideshow />)
    }).not.toThrow()
  })
})
