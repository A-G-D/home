import { render, screen } from '@redwoodjs/testing/web'

import { formattedDate } from 'web/src/lib/utils'
import Comment from './Comment'

describe('Comment', () => {
  it('renders successfully', () => {
    const comment = {
      name: 'Tux',
      createdAt: '1972-01-01T12:34:56Z',
      body: 'Hey, Moses.',
    }
    expect(() => {
      render(<Comment comment={comment} />)

      expect(screen.getByText(comment.name)).toBeInTheDocument()
      expect(screen.getByText(comment.body)).toBeInTheDocument()
      const dateExpected = screen.getByText(formattedDate(comment.createdAt))
      expect(dateExpected).toBeInTheDocument()
      expect(dateExpected.nodeName).toEqual('TIME')
      expect(dateExpected).toHaveAttribute('datetime', comment.createdAt)
    }).not.toThrow()
  })
})
