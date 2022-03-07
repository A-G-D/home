import type { ArticlesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import TextTruncate from 'react-text-truncate'

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
      <h1>
        <Link to={routes.article({ id: post.id })}>{post.title}</Link>
      </h1>
      <p>Posted on: {post.createdAt}</p>
      <TextTruncate
        line={5}
        element='div'
        text={post.body}
        truncateText='...'
        truncateTextChild={
          <Link to={routes.article({ id: post.id })}>Read on</Link>
        }
      ></TextTruncate>
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
