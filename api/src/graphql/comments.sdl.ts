export const schema = gql`
  type Comment {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime
    name: String!
    body: String!
    likes: Int
    post: Post
    postId: String
    user: User
    userId: String
    comments: [Comment]!
    parent: Comment
    parentId: String
  }

  type Query {
    comments(postId: String!): [Comment!]! @skipAuth
    comment(id: String!): Comment @skipAuth
  }

  input CreateCommentInput {
    name: String!
    body: String!
    postId: String
    userId: String
    parentId: String
  }

  input UpdateCommentInput {
    name: String
    body: String
    likes: Int
    postId: String
    userId: String
    parentId: String
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @skipAuth
    updateComment(id: String!, input: UpdateCommentInput!): Comment!
      @requireAuth
    deleteComment(id: String!): Comment! @requireAuth
  }
`
