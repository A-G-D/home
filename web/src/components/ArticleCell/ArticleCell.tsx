import type { ArticleQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { formattedDate } from 'src/lib/utils'
import ArticlePaper from 'src/components/ArticlePaper'
import Spinner from 'src/components/base/Spinner'

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

export const Loading = () => (
  <ArticlePaper className='gap-8 px-12 py-12'>
    <div className='absolute top-12 bottom-12 left-12 right-12 bg-white/80 flex justify-center items-center'>
      <div className='flex items-center gap-4'>
        <Spinner />
        Loading...
      </div>
    </div>
  </ArticlePaper>
)

export const Empty = () => (
  <ArticlePaper className='gap-8 px-12 py-12'>
    <div className='absolute top-12 bottom-12 left-12 right-12 bg-white/80 flex justify-center items-center'>
      There's Nothing to See Here...
    </div>
  </ArticlePaper>
)

export const Failure = ({ error }: CellFailureProps) => (
  <ArticlePaper className='gap-8 px-12 py-12'>
    <div className='absolute top-12 bottom-12 left-12 right-12 bg-red-200/40 flex justify-center items-center'>
      <div className='absolute' style={{ color: 'red' }}>
        Error: {error.message}
      </div>
    </div>
  </ArticlePaper>
)

export const Success = ({ article }: CellSuccessProps<ArticleQuery>) => {
  const date = formattedDate(article.createdAt)
  const bodyHTML = article.body
    .replace('${title}', article.title)
    .replace('${createdAt}', date)

  return (
    <div className='flex flex-col gap-4'>
      <ArticlePaper className='gap-8 px-12 py-12' bodyHTML={bodyHTML} />
    </div>
  )
}
