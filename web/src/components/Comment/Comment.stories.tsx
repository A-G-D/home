import Comment from './Comment'

export const generated = () => {
  return (
    <Comment
      comment={{
        name: 'Tux',
        createdAt: '1972-01-01T12:34:56Z',
        body: 'Hey, Moses.',
      }}
    />
  )
}

export default { title: 'Components/Comment' }
