import CommentsSection from './CommentsSection'

mockGraphQLMutation('CreateCommentMutation', (variables, { ctx }) => {
  const id = Math.floor(Math.random() * 1000).toString()
  ctx.delay(1000)

  return {
    createComment: {
      id,
      name: variables.input.name,
      body: variables.input.body,
      createdAt: new Date().toISOString(),
    },
  }
})

export const post1 = () => {
  return <CommentsSection postId='1' />
}

export const post2 = () => {
  return <CommentsSection postId='2' />
}

export default { title: 'Components/CommentsSection' }
