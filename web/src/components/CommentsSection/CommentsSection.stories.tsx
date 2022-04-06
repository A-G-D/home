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

export const post1GuestView = () => {
  return <CommentsSection postId='1001' />
}

export const post1UserView = () => {
  mockCurrentUser({ id: '3', email: 'Normal User', roles: ['user'] })
  return <CommentsSection postId='1001' />
}

export const post1ModeratorView = () => {
  mockCurrentUser({ id: '2', email: 'AGD', roles: ['moderator'] })
  return <CommentsSection postId='1001' />
}

export const post1AdminView = () => {
  mockCurrentUser({ id: '1', email: 'agd', roles: ['admin'] })
  return <CommentsSection postId='1001' />
}

export const post2GuestView = () => {
  return <CommentsSection postId='1002' />
}

export const post2UserView = () => {
  mockCurrentUser({ id: '3', email: 'Normal User', roles: ['user'] })
  return <CommentsSection postId='1002' />
}

export const post2ModeratorView = () => {
  mockCurrentUser({ id: '2', email: 'AGD', roles: ['moderator'] })
  return <CommentsSection postId='1002' />
}

export const post2AdminView = () => {
  mockCurrentUser({ id: '1', email: 'agd', roles: ['admin'] })
  return <CommentsSection postId='1002' />
}

export default { title: 'Components/CommentsSection' }
