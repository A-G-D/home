import { render } from '@redwoodjs/testing/web'
import Component from './Component'

describe('Component', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Component />)
    }).not.toThrow()
  })
})
