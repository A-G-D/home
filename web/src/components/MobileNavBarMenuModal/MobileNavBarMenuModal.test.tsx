import { render } from '@redwoodjs/testing/web'

import MobileNavBarMenuModal from './MobileNavBarMenuModal'

describe('MobileNavBarMenuModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MobileNavBarMenuModal onClose={() => {}} />)
    }).not.toThrow()
  })
})
