import type { ArticlesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import ArticleCell from '../ArticleCell'

import { HTMLAttributes } from 'react'

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

interface CollapsiblePreviewPropTypes extends HTMLAttributes<HTMLElement> {
  options?: {
    open?: boolean
    header?: { open?: React.ReactNode; closed?: React.ReactNode }
    footer?: { open?: React.ReactNode; closed?: React.ReactNode }
    viewportClassName?: string
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
  const overlayRef: React.RefObject<HTMLDivElement> = React.useRef()
  const [minHeight, setMinHeight] = React.useState(0)
  const [isOpen, setIsOpen] = React.useState(open)

  const onHeaderClickHandler = (e: React.MouseEvent) => {
    if (eventHandlers?.onHeaderClick(e)) {
      setIsOpen((isOpenFlag) => !isOpenFlag)
    }
  }
  const onBodyClickHandler = (e: React.MouseEvent) => {
    if (eventHandlers?.onBodyClick(e)) {
      setIsOpen((isOpenFlag) => !isOpenFlag)
    }
  }
  const onFooterClickHandler = (e: React.MouseEvent) => {
    if (eventHandlers?.onFooterClick(e)) {
      setIsOpen((isOpenFlag) => !isOpenFlag)
    }
  }

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
        className='absolute top-0 bottom-0 left-0 right-0 flex flex-col items-stretch z-[200]'
      >
        <div
          className='bg-gradient-to-b from-white via-white'
          onClick={onHeaderClickHandler}
        >
          {isOpen ? header.open : header.closed}
        </div>
        <div
          className={['', viewportClassName].join(' ')}
          onClick={onBodyClickHandler}
        />
        <div
          className='bg-gradient-to-t from-white'
          onClick={onFooterClickHandler}
        >
          {isOpen ? footer.open : footer.closed}
        </div>
      </div>
      <div className='absolute top-[-256px]'>{children}</div>
    </section>
  )
}

export const Success = ({ posts }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <ul className='flex flex-col items-stretch gap-8'>
      {posts.map((post) => {
        const header = {
          closed: (
            <div className='py-8'>
              <h1 className='text-center text-2xl font-bold'>
                <Link className='bg-white' to={routes.article({ id: post.id })}>
                  {post.title}
                </Link>
              </h1>
              <p className='text-center text-sm'>
                <span className='bg-white'>Posted on: {post.createdAt}</span>
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
        }
        return (
          <li key={post.id}>
            <CollapsiblePreview
              className=''
              options={{ header, footer, viewportClassName: 'min-h-[128px]' }}
            >
              <ArticleCell id={post.id} />
            </CollapsiblePreview>
          </li>
        )
      })}
    </ul>
  )
}
