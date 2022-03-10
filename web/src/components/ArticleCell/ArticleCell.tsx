import type { ArticleQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query ArticleQuery($id: String!) {
    article: post(id: $id) {
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

export const Success = ({ article }: CellSuccessProps<ArticleQuery>) => {
  return (
    <div className='flex-auto flex flex-col px-6 py-3'>
      <h1 className='text-2xl text-center font-bold'>{article.title}</h1>
      <h2 className='text-sm italic'>{article.createdAt}</h2>
      <p
        className='flex-auto flex flex-col items-stetch'
        dangerouslySetInnerHTML={{ __html: article.body }}
      ></p>
    </div>
  )
}
