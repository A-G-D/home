import type { ArticlesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Fragment } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { MdOutlineArrowDropUp } from 'react-icons/md'
import { formattedDate } from 'src/lib/utils'
import ArticleCell from 'src/components/ArticleCell'
import CollapsibleArticlePreview from 'src/components/CollapsibleArticlePreview'
import Spinner from 'src/components/base/Spinner'

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

export const Loading = () => (
  <div className='flex-auto flex flex-col gap-4 justify-center items-center'>
    <Spinner />
    <h2>Loading...</h2>
  </div>
)

export const Empty = () => (
  <div className='flex-auto flex justify-center items-center'>
    <h2>There are No Blog Posts to Show</h2>
  </div>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div
    className='flex-auto flex justify-center items-center'
    style={{ color: 'red' }}
  >
    <h2>Error: {error.message}</h2>
  </div>
)

export const Success = ({ posts }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <ul className='flex flex-col items-stretch gap-8'>
      {posts
        .slice(0)
        .reverse()
        .map((post, i) => {
          const header = {
            closed: (
              <div className='py-8'>
                <h1 className='text-center text-2xl font-bold'>
                  <Link
                    className='bg-white'
                    to={routes.article({ id: post.id })}
                  >
                    {post.title}
                  </Link>
                </h1>
                <p className='text-center text-sm'>
                  <span className='bg-white'>
                    Posted on: {formattedDate(post.createdAt)}
                  </span>
                </p>
              </div>
            ),
          }
          const footer = {
            closed: (
              <div className='text-center text-xl font-semibold p-4 cursor-pointer'>
                Read More
              </div>
            ),
            open: (
              <div className='flex justify-center cursor-pointer p-4'>
                <MdOutlineArrowDropUp className='scale-[3]' />
              </div>
            ),
          }
          return (
            <Fragment key={post.id}>
              {i > 0 && (
                <li>
                  <hr className='bg-white border-white' />
                </li>
              )}
              <li>
                <CollapsibleArticlePreview
                  className=''
                  options={{
                    header,
                    footer,
                    viewportClassName: { closed: 'min-h-[72px]' },
                  }}
                  eventHandlers={{ onFooterClick: (e) => true }}
                >
                  <ArticleCell id={post.id} />
                </CollapsibleArticlePreview>
              </li>
            </Fragment>
          )
        })}
    </ul>
  )
}
