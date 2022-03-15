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
    <article className='flex-auto flex flex-col gap-8 px-12 py-12'>
      <h1 className='text-2xl text-center font-bold'>{article.title}</h1>
      <p className='text-sm italic'>Posted on: {article.createdAt}</p>
      <section
        className='flex-auto flex flex-col items-stetch gap-8'
        dangerouslySetInnerHTML={{ __html: article.body }}
      />
    </article>
  )
}
