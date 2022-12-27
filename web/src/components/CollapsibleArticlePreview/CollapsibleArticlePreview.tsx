import {
  FC,
  HTMLAttributes,
  MouseEvent,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'

export interface CollapsibleArticlePreviewProps
  extends HTMLAttributes<HTMLElement> {
  options?: {
    open?: boolean
    header?: { open?: ReactNode; closed?: ReactNode }
    footer?: { open?: ReactNode; closed?: ReactNode }
    viewportClassName?: { open?: string; closed?: string }
  }
  eventHandlers?: {
    onHeaderClick?: (e: MouseEvent) => boolean
    onBodyClick?: (e: MouseEvent) => boolean
    onFooterClick?: (e: MouseEvent) => boolean
  }
}

const CollapsibleArticlePreview: FC<CollapsibleArticlePreviewProps> = ({
  children,
  className,
  options: { open = false, header, footer, viewportClassName } = {
    open: false,
  },
  eventHandlers = {},
  ...props
}) => {
  const ref: RefObject<HTMLDivElement> = useRef()
  const overlayRef: RefObject<HTMLDivElement> = useRef()
  const [minHeight, setMinHeight] = useState(0)

  const [isOpen, setIsOpen] = useState(open)
  const [articlePaperHeader, setArticlePaperHeader] = useState<HTMLElement>()
  const [articlePaperPaddingTop, setArticlePaperPaddingTop] = useState(0)

  const headerOffsetHeight = articlePaperHeader
    ? articlePaperHeader.clientHeight
    : 0

  const onHeaderClickHandler = (e: MouseEvent) => {
    if (eventHandlers?.onHeaderClick?.(e)) {
      setIsOpen((isOpenFlag) => !isOpenFlag)
    }
  }
  const onBodyClickHandler = (e: MouseEvent) => {
    if (eventHandlers?.onBodyClick?.(e)) {
      setIsOpen((isOpenFlag) => !isOpenFlag)
    }
  }
  const onFooterClickHandler = (e: MouseEvent) => {
    if (eventHandlers?.onFooterClick?.(e)) {
      setIsOpen((isOpenFlag) => !isOpenFlag)
    }
  }

  useEffect(() => {
    if (ref.current != null) {
      setArticlePaperHeader(ref.current.querySelector('header'))
      const padding = window.getComputedStyle(
        ref.current.children[0]
      ).paddingTop
      setArticlePaperPaddingTop(Number.parseInt(padding))
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  useEffect(() => {
    let height = 0
    for (let i = 0; i < overlayRef.current.children.length; ++i) {
      const child = overlayRef.current.children[i] as HTMLElement
      height += child.offsetHeight
    }
    setMinHeight(height)
  })

  return (
    <section
      className={classNames('bg-white/80 relative overflow-hidden', className)}
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
          className={classNames(
            'relative',
            isOpen ? viewportClassName.open : viewportClassName.closed
          )}
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

export default CollapsibleArticlePreview
