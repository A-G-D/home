export const schema = gql`
  type Post {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime
    title: String!
    body: String!
    likes: Int
    comments: [Comment]!
    user: User
    userId: String
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: String!): Post @skipAuth
  }

  input CreatePostInput {
    title: String!
    body: String!
    likes: Int
    userId: String
  }

  input UpdatePostInput {
    title: String
    body: String
    likes: Int
    userId: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth(roles: ["admin"])
    updatePost(id: String!, input: UpdatePostInput!): Post!
      @requireAuth(roles: ["admin"])
    deletePost(id: String!): Post! @requireAuth(roles: ["admin"])
  }
`
