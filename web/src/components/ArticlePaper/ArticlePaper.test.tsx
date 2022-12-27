import { render } from '@redwoodjs/testing/web'

import ArticlePaper from './ArticlePaper'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ArticlePaper', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticlePaper />)
    }).not.toThrow()
  })
})
