export const schema = gql`
  type Settings {
    id: Int!
    status: Int!
  }

  input UpdateSettingsInput {
    status: Int
  }

  type Query {
    settings: Settings! @skipAuth
  }

  type Mutation {
    updateSettings(input: UpdateSettingsInput): Settings!
      @requireAuth(roles: ["admin"])
  }
`
