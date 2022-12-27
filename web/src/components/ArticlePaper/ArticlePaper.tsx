import { FC, HTMLAttributes } from 'react'
import NotePage from 'src/components/NotePage'

export interface ArticlePaperProps extends HTMLAttributes<HTMLElement> {
  bodyHTML?: string
}

const ArticlePaper: FC<ArticlePaperProps> = ({
  children,
  className,
  bodyHTML,
}) => {
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
          bodyStyles: {},
        }}
        dangerouslySetInnerHTML={!!bodyHTML ? { __html: bodyHTML } : undefined}
      />
      {children && (
        <div className='absolute top-0 bottom-0 left-0 right-0'>{children}</div>
      )}
    </article>
  )
}

export default ArticlePaper
