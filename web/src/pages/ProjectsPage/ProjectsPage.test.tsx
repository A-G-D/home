import { render } from '@redwoodjs/testing/web'

import ProjectsPage from './ProjectsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProjectsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectsPage />)
    }).not.toThrow()
  })
})
