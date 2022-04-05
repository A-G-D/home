import { render } from '@redwoodjs/testing/web'

import CheckpointPage from './CheckpointPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CheckpointPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CheckpointPage />)
    }).not.toThrow()
  })
})
