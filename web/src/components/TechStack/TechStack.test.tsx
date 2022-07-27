import { render } from '@redwoodjs/testing/web'

import TechStack from './TechStack'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TechStack', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TechStack />)
    }).not.toThrow()
  })
})
