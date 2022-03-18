import type { ArticleQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import NotePage from 'src/components/NotePage/NotePage'

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
  const bodyHTML = article.body
    .replace('${title}', article.title)
    .replace('${createdAt}', article.createdAt)
  return (
    <article className='flex-auto flex flex-col gap-8 px-12 py-12'>
      <NotePage
        className='bg-white border-red-600 border-2'
        options={{
          margin: {
            top: { thickness: 72 },
            bottom: { thickness: 72 },
            left: { thickness: 64, offset: 8 },
            right: { thickness: 0, offset: 32 },
          },
          lineHeight: 2,
          lineDividerThickness: 1,
          fontSize: 16,
          bodyClassName: 'flex flex-col gap-8',
          bodyStyles: { fontFamily: 'Raw Print Formal' },
        }}
        dangerouslySetInnerHTML={{ __html: bodyHTML }}
      />
    </article>
  )
}
