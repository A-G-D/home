export const schema = gql`
  type Setting {
    id: Int!
    updatedAt: DateTime
    status: Int!
  }

  type Query {
    settings: Setting! @skipAuth
  }

  input UpdateSettingInput {
    status: Int
  }

  type Mutation {
    updateSetting(id: Int!, input: UpdateSettingInput!): Setting!
      @requireAuth(roles: ["admin"])
  }
`
