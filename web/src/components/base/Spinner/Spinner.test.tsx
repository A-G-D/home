import { render } from '@redwoodjs/testing/web'
import Spinner from './Spinner'

describe('Spinner', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Spinner />)
    }).not.toThrow()
  })
})
