export const schema = gql`
  type User {
    id: String!
    createdAt: DateTime
    name: String
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String!
    posts: [Post]!
    comments: [Comment]!
  }

  type Query {
    users: [User!]! @requireAuth(roles: ["admin", "moderator"])
    user(id: String!): User @requireAuth(roles: ["admin", "moderator"])
  }

  input CreateUserInput {
    name: String
    email: String!
    hashedPassword: String!
    salt: String!
    roles: String!
  }

  input UpdateUserInput {
    name: String
    email: String
    roles: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth(roles: ["admin"])
    updateUser(id: String!, input: UpdateUserInput!): User!
      @requireAuth(roles: ["admin"])
    deleteUser(id: String!): User! @requireAuth(roles: ["admin"])
  }
`
