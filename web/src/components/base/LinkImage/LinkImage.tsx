import { forwardRef, HTMLAttributes, RefObject } from 'react'
import { updateElement } from 'src/lib/utils'

export interface LinkImageProps extends HTMLAttributes<HTMLLinkElement> {
  className?: string
  href?: string
  src?: string
  svg?: JSX.Element
  alt: string
}

const LinkImage = forwardRef<HTMLImageElement, LinkImageProps>(
  (
    { className, href, src, svg, alt },
    ref: RefObject<HTMLAnchorElement & HTMLImageElement>
  ): JSX.Element => {
    return !!href ? (
      <a ref={ref} className={className} href={href}>
        {!!src ? (
          <img src={src} alt={alt} />
        ) : (
          updateElement(svg, { className: 'h-full w-full' })
        )}
      </a>
    ) : !!src ? (
      <img ref={ref} className={className} src={src} alt={alt} />
    ) : (
      <div ref={ref} className={className}>
        {updateElement(svg, { className: 'h-full w-full' })}
      </div>
    )
  }
)

export default LinkImage
