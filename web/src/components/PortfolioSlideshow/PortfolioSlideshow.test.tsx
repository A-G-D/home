import { render } from '@redwoodjs/testing/web'

import PortfolioSlideshow from './PortfolioSlideshow'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PortfolioSlideshow', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PortfolioSlideshow />)
    }).not.toThrow()
  })
})
