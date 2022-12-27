import { render } from '@redwoodjs/testing/web'

import CollapsibleArticlePreview from './CollapsibleArticlePreview'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CollapsibleArticlePreview', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CollapsibleArticlePreview />)
    }).not.toThrow()
  })
})
