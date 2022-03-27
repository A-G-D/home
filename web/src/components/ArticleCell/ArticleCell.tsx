import type { ArticleQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { formattedDate } from 'web/src/lib/utils'

import NotePage from 'src/components/NotePage/NotePage'
import CommentsCell from 'src/components/CommentsCell'
import CommentForm from 'src/components/CommentForm'

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

const ArticlePaper = ({
  children,
  className,
  bodyHTML,
}: {
  children?: React.ReactNode
  className?: string
  bodyHTML?: string
}): JSX.Element => {
  return (
    <article
      className={['relative flex-auto flex flex-col', className].join(' ')}
    >
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
        dangerouslySetInnerHTML={!!bodyHTML ? { __html: bodyHTML } : undefined}
      />
      <div className='absolute top-0 bottom-0 left-0 right-0'>{children}</div>
    </article>
  )
}

export const Loading = () => (
  <ArticlePaper className='gap-8 px-12 py-12'>
    <div className='absolute top-12 bottom-12 left-12 right-12 bg-white/80 flex justify-center items-center'>
      <div className='flex items-center gap-4'>
        <svg
          className='animate-spin border-blue-600 border-t-2 border-r-2 border-b-2 h-5 w-5 rounded-full'
          viewBox='0 0 24 24'
        ></svg>
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
  const bodyHTML = article.body
    .replace('${title}', article.title)
    .replace('${createdAt}', formattedDate(article.createdAt))

  return (
    <div className='flex flex-col gap-4'>
      <ArticlePaper className='gap-8 px-12 py-12' bodyHTML={bodyHTML} />
      <CommentsCell />
      <CommentForm />
    </div>
  )
}
