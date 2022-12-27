import { render } from '@redwoodjs/testing/web'

import MobileNavBarMenu from './MobileNavBarMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MobileNavBarMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MobileNavBarMenu />)
    }).not.toThrow()
  })
})
