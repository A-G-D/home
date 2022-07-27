import { render } from '@redwoodjs/testing/web'

import PortfolioMenu from './PortfolioMenu'

describe('PortfolioMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PortfolioMenu />)
    }).not.toThrow()
  })
})
