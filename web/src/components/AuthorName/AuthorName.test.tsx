import { render } from '@redwoodjs/testing/web'

import AuthorName from './AuthorName'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AuthorName', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthorName />)
    }).not.toThrow()
  })
})
