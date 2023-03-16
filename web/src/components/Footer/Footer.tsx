import { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'
import AuthorName from 'src/components/AuthorName'

export interface FooterProps extends HTMLAttributes<HTMLElement> {}

const Footer: FC<FooterProps> = ({ className, ...props }) => {
  const creationYear = 2022
  const currentYear = new Date().getFullYear()
  const copyrightYear =
    creationYear === currentYear
      ? creationYear
      : `${creationYear} - ${currentYear}`

  return (
    <footer
      className={classNames(
        'bg-primary-600/80 px-6 py-6 text-gray-200 flex flex-col gap-4 items-center',
        className
      )}
      {...props}
    >
      <div className='text-center text-sm italic'>
        The background shader pattern is an edited fork from{' '}
        <a
          className='text-link text-primary-200 font-bold'
          href='https://www.shadertoy.com/view/WldSRn'
        >
          this source
        </a>
        .
      </div>
      <div className='flex flex-col items-center font-semibold'>
        <div>
          Copyright © {copyrightYear} <AuthorName className='ml-1 text-lg' />
        </div>
        <div>
          Made with{' '}
          <a
            className='text-link text-primary-200 font-bold'
            href='https://redwoodjs.com'
          >
            RedwoodJS
          </a>
          .
        </div>
      </div>
    </footer>
  )
}

export default Footer
