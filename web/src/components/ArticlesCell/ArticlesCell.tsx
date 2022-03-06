import type { ArticlesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query ArticlesQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

const Article = ({ post }) => {
  return (
    <li className='truncate-overflow' key={post.id}>
      <h1>{post.title}</h1>
      <p>Posted on: {post.createdAt}</p>
      <p>{post.body}</p>
    </li>
  )
}

export const Success = ({ posts }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <ul>
      {posts.map((post) => (
        <Article post={post} />
      ))}
    </ul>
  )
}
