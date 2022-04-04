import type { ArticlesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import { MdOutlineArrowDropUp } from 'react-icons/md'

import { formattedDate } from 'src/lib/utils'

import ArticleCell from 'src/components/ArticleCell'

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
    <div className='spin' />
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

interface CollapsiblePreviewPropTypes
  extends React.HTMLAttributes<HTMLElement> {
  options?: {
    open?: boolean
    header?: { open?: React.ReactNode; closed?: React.ReactNode }
    footer?: { open?: React.ReactNode; closed?: React.ReactNode }
    viewportClassName?: { open?: string; closed?: string }
  }
  eventHandlers?: {
    onHeaderClick?: (e: React.MouseEvent) => boolean
    onBodyClick?: (e: React.MouseEvent) => boolean
    onFooterClick?: (e: React.MouseEvent) => boolean
  }
}

const CollapsiblePreview = ({
  children,
  className,
  options: { open = false, header, footer, viewportClassName } = {
    open: false,
  },
  eventHandlers = {},
  ...props
}: CollapsiblePreviewPropTypes) => {
  const ref: React.RefObject<HTMLDivElement> = React.useRef()
  const overlayRef: React.RefObject<HTMLDivElement> = React.useRef()
  const [minHeight, setMinHeight] = React.useState(0)

  const [isOpen, setIsOpen] = React.useState(open)
  const [articlePaperHeader, setArticlePaperHeader] =
    React.useState<HTMLElement>()
  const [articlePaperPaddingTop, setArticlePaperPaddingTop] = React.useState(0)

  const headerOffsetHeight = articlePaperHeader
    ? articlePaperHeader.clientHeight
    : 0

  const onHeaderClickHandler = (e: React.MouseEvent) => {
    if (eventHandlers?.onHeaderClick?.(e)) {
      setIsOpen((isOpenFlag) => !isOpenFlag)
    }
  }
  const onBodyClickHandler = (e: React.MouseEvent) => {
    if (eventHandlers?.onBodyClick?.(e)) {
      setIsOpen((isOpenFlag) => !isOpenFlag)
    }
  }
  const onFooterClickHandler = (e: React.MouseEvent) => {
    if (eventHandlers?.onFooterClick?.(e)) {
      setIsOpen((isOpenFlag) => !isOpenFlag)
    }
  }

  React.useEffect(() => {
    if (ref.current != null) {
      setArticlePaperHeader(ref.current.querySelector('header'))
      const padding = window.getComputedStyle(
        ref.current.children[0]
      ).paddingTop
      setArticlePaperPaddingTop(Number.parseInt(padding))
    }
  }, [isOpen])

  React.useEffect(() => {
    setIsOpen(open)
  }, [open])

  React.useEffect(() => {
    let height = 0
    for (let i = 0; i < overlayRef.current.children.length; ++i) {
      const child = overlayRef.current.children[i] as HTMLElement
      height += child.offsetHeight
    }
    setMinHeight(height)
  })

  return (
    <section
      className={['bg-white/80 relative overflow-hidden', className].join(' ')}
      style={{ height: minHeight }}
      {...props}
    >
      <div
        ref={overlayRef}
        className='absolute top-0 bottom-0 left-0 right-0 flex flex-col items-stretch z-[1]'
      >
        <div
          className='bg-gradient-to-b from-white via-white'
          onClick={onHeaderClickHandler}
        >
          {isOpen ? header.open : header.closed}
        </div>
        <div
          className={[
            'relative',
            isOpen ? viewportClassName.open : viewportClassName.closed,
          ].join(' ')}
          onClick={onBodyClickHandler}
        >
          {isOpen ? (
            <div className=''>{children}</div>
          ) : (
            <div
              ref={ref}
              className='absolute left-0 right-0 z-[-1]'
              style={{
                top: -(headerOffsetHeight + articlePaperPaddingTop),
              }}
            >
              {children}
            </div>
          )}
        </div>
        <div
          className='bg-gradient-to-t from-white'
          onClick={onFooterClickHandler}
        >
          {isOpen ? footer.open : footer.closed}
        </div>
      </div>
    </section>
  )
}

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
            <>
              {i > 0 && (
                <li key={`${post.id}-rule`}>
                  <hr className='bg-white border-white' />
                </li>
              )}
              <li key={post.id}>
                <CollapsiblePreview
                  className=''
                  options={{
                    header,
                    footer,
                    viewportClassName: { closed: 'min-h-[72px]' },
                  }}
                  eventHandlers={{ onFooterClick: (e) => true }}
                >
                  <ArticleCell id={post.id} />
                </CollapsiblePreview>
              </li>
            </>
          )
        })}
    </ul>
  )
}
