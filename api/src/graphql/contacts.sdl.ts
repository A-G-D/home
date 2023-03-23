export const schema = gql`
  type Contact {
    id: String!
    createdAt: DateTime
    name: String!
    email: String!
    message: String!
  }

  type Query {
    contacts(email: String): [Contact!]! @requireAuth(roles: ["admin"])
  }

  input CreateContactInput {
    name: String!
    email: String!
    message: String!
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @skipAuth
    deleteContact(id: String!): Contact!
      @requireAuth(roles: ["admin", "moderator"])
  }
`
