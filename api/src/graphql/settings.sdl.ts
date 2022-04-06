export const schema = gql`
  type Settings {
    id: Int!
    status: Int!
  }

  type Query {
    settings: Settings! @skipAuth
  }
`
